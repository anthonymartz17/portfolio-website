import { supabase } from "@/utils/supabase";
import { v4 as uuidv4 } from "uuid";

const TABLE_NAME = "project_posts";
const BUCKET_NAME = "project-thumbnails";

function toAppProject(row) {
	if (!row) return row;

	return {
		...row,
		isPublic: row.is_public,
		created_at: row.created_at ? new Date(row.created_at) : null,
	};
}

function toDbProject(projectData) {
	const payload = { ...projectData };

	if (Object.prototype.hasOwnProperty.call(payload, "isPublic")) {
		payload.is_public = payload.isPublic;
		delete payload.isPublic;
	}

	delete payload.thumbnail_data;
	return payload;
}

function getImagePath(file, folderName) {
	const uniqueId = uuidv4();
	const extension = file.name && file.name.includes(".")
		? file.name.split(".").pop()
		: "jpg";

	return `${folderName}/${uniqueId}.${extension}`;
}

export default {
	async getProjects() {
		const { data, error } = await supabase
			.from(TABLE_NAME)
			.select("*")
			.order("created_at", { ascending: false });

		if (error) throw error;

		return data.map(toAppProject);
	},
	async getProjectById(projectId) {
		const { data, error } = await supabase
			.from(TABLE_NAME)
			.select("*")
			.eq("id", projectId)
			.single();

		if (error) throw error;
		if (!data) throw new Error("Projects not found.");

		return toAppProject(data);
	},
	async createPost(projectData) {
		const { data, error } = await supabase
			.from(TABLE_NAME)
			.insert(toDbProject(projectData))
			.select("*")
			.single();

		if (error) throw error;

		return toAppProject(data);
	},
	async updateProject(projectData) {
		const { id, ...project } = toDbProject(projectData);

		const { data, error } = await supabase
			.from(TABLE_NAME)
			.update(project)
			.eq("id", id)
			.select("*")
			.single();

		if (error) throw error;
		if (!data) throw new Error("Post not found.");

		return toAppProject(data);
	},
	async updateProjectVisibility({ projectId, isPublic }) {
		const { data, error } = await supabase
			.from(TABLE_NAME)
			.update({ is_public: isPublic })
			.eq("id", projectId)
			.select("*")
			.single();

		if (error) throw error;
		if (!data) throw new Error("Post not found.");

		return toAppProject(data);
	},
	async deleteProject(projectId) {
		const { error } = await supabase
			.from(TABLE_NAME)
			.delete()
			.eq("id", projectId);

		if (error) throw error;

		return { success: true, message: "post deleted successfully." };
	},

	async uploadThumbnail(thumbnail) {
		const imagePath = getImagePath(thumbnail, "projectThumbnails");
		const { error } = await supabase.storage
			.from(BUCKET_NAME)
			.upload(imagePath, thumbnail, {
				contentType: thumbnail.type,
				upsert: false,
			});

		if (error) throw error;

		return imagePath;
	},

	async deleteThumbnail(imagePath) {
		const { error } = await supabase.storage
			.from(BUCKET_NAME)
			.remove([imagePath]);

		if (error) throw error;

		return { success: true, message: "Images deleted successfully." };
	},
	async getThumbnail(imagePath) {
		if (!imagePath) return null;

		const { data } = supabase.storage
			.from(BUCKET_NAME)
			.getPublicUrl(imagePath);

		const name = imagePath.split("/").pop();

		return {
			dataURL: data.publicUrl,
			name,
			type: "image/jpeg",
			size: 0,
		};
	},
};
