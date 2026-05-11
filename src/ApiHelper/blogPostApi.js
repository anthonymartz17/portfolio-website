import { supabase } from "@/utils/supabase";
import { v4 as uuidv4 } from "uuid";

const TABLE_NAME = "blog_posts";
const BUCKET_NAME = "blog-thumbnails";

function toAppPost(row) {
	if (!row) return row;

	return {
		...row,
		isPublic: row.is_public,
	};
}

function toDbPost(postData) {
	const payload = { ...postData };

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
	async getPosts() {
		const { data, error } = await supabase
			.from(TABLE_NAME)
			.select("*")
			.order("created_at", { ascending: false });

		if (error) throw error;

		return data.map(toAppPost);
	},
	async getPostById(postId) {
		const { data, error } = await supabase
			.from(TABLE_NAME)
			.select("*")
			.eq("id", postId)
			.single();

		if (error) throw error;
		if (!data) throw new Error("Post not found.");

		return toAppPost(data);
	},
	async createPost(postData) {
		const { data, error } = await supabase
			.from(TABLE_NAME)
			.insert(toDbPost(postData))
			.select("*")
			.single();

		if (error) throw error;

		return toAppPost(data);
	},
	async updatePost(postData) {
		const { id, ...post } = toDbPost(postData);

		const { data, error } = await supabase
			.from(TABLE_NAME)
			.update(post)
			.eq("id", id)
			.select("*")
			.single();

		if (error) throw error;
		if (!data) throw new Error("Post not found.");

		return toAppPost(data);
	},
	async updatePostVisibility({ postId, isPublic }) {
		const { data, error } = await supabase
			.from(TABLE_NAME)
			.update({ is_public: isPublic })
			.eq("id", postId)
			.select("*")
			.single();

		if (error) throw error;
		if (!data) throw new Error("Post not found.");

		return toAppPost(data);
	},

	async deletePost(postId) {
		const { error } = await supabase.from(TABLE_NAME).delete().eq("id", postId);

		if (error) throw error;

		return { success: true, message: "post deleted successfully." };
	},

	async uploadImage(thumbnail) {
		const imagePath = getImagePath(thumbnail, "blogThumbnails");
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
