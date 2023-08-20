import workProjectsApi from "@/ApiHelper/workProjectsApi";

export default {
	namespaced: true,
	state: {
		projects: [],
	},
	mutations: {
		SET__PROJECTS(state, payload) {
			state.projects = payload;
		},
		// CREATE(state, payload) {
		// 	state.blogPosts.push(payload);
		// },
		UPDATE(state, payload) {
			state.projects.find((x) => {
				if (x.id == payload.id) {
					Object.assign(x, payload);
				}
			});
		},
		DELETE(state, projectId) {
			state.projects = state.projects.filter((x) => x.id !== projectId);
		},
	},

	actions: {
		async fetchProjectById(_, projectId) {
			try {
				let project = await workProjectsApi.getProjectById(projectId);
				const thumbnail_data = await workProjectsApi.getThumbnail(
					project.thumbnail_path_ref
				);
				project.thumbnail_data = thumbnail_data;
				return project;
			} catch (error) {
				throw error;
			}
		},
		async getProjects({ commit }) {
			try {
				const projectsData = await workProjectsApi.getProjects();
				const dataWithThumbnailPromises = projectsData.map(async (project) => {
					const thumbnail_img = await workProjectsApi.getThumbnail(
						project.thumbnail_path_ref
					);
					project.thumbnail_data = thumbnail_img;
					return project;
				});
				const dataReady = await Promise.all(dataWithThumbnailPromises);

				commit("SET__PROJECTS", dataReady);
			} catch (error) {
				throw error;
			}
		},
		async createProject(context, { project, projectThumbnail }) {
			const imgPathRef = await workProjectsApi.uploadThumbnail(
				projectThumbnail
			);
			project.thumbnail_path_ref = imgPathRef;
			//converting into arrays and trimming spaces for all strings---------
			project.techs_implemented = project.techs_implemented
				.split(",")
				.map((x) => x.trim());
			project.isPublic = false;
			// project.video_ids = project.video_ids.split(',')
			await workProjectsApi.createPost(project);
		},
		async updateProject({ commit }, { project, projectThumbnail }) {
			delete project.thumbnail_data;
			console.log(project.techs_implemented);
			//converting into arrays and trimming spaces for all strings---------
			project.techs_implemented = project.techs_implemented
				.split(",")
				.map((x) => x.trim());

			console.log(project.techs_implemented);
			// if is new img delete old one from storage, upload new one and replace img path in post object with new img path
			if (!projectThumbnail.manuallyAdded) {
				await workProjectsApi.deleteThumbnail(project.thumbnail_path_ref);
				const imgPathRef = await workProjectsApi.uploadThumbnail(
					projectThumbnail
				);
				project.thumbnail_path_ref = imgPathRef;
			}
			const updatedProject = await workProjectsApi.updateProject(project);
			commit("UPDATE", updatedProject);
		},
		async updateProjectVisibility({ commit }, postData) {
			const updatedPost = await workProjectsApi.updateProjectVisibility(
				postData
			);

			commit("UPDATE", updatedPost);
		},

		async deleteProject({ commit }, { thumbnail_path_ref, id }) {
			await workProjectsApi.deleteThumbnail(thumbnail_path_ref);
			await workProjectsApi.deleteProject(id);
			commit("DELETE", id);
		},
	},
	getters: {
		projects: (state) => state.projects,
	},
};
