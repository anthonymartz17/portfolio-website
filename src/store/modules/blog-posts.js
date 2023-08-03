import blogPostApi from "@/ApiHelper/blogPostApi";

export default {
	namespaced: true,
	state: {
		blogPosts: [],
	},
	mutations: {
		SET__BLOG_POSTS(state, payload) {
			state.blogPosts = payload;
		},
		// CREATE(state, payload) {
		// 	state.blogPosts.push(payload);
		// },
		UPDATE(state, payload) {
			state.blogPosts.find((x) => {
				Object.assign(x, payload);
			});
		},
		DELETE(state, postId) {
			state.blogPosts = state.blogPosts.filter((x) => x.id !== postId);
		},
	},

	actions: {
		async fetchPostById(_, postId) {
			try {
				let post = await blogPostApi.getPostById(postId);
				const thumbnail_data = await blogPostApi.getThumbnail(
					post.thumbnail_path_ref
				);
				post.thumbnail_data = thumbnail_data;
				return post;
			} catch (error) {
				throw error;
			}
		},
		async setBlogPosts({ commit }) {
			try {
				const data = await blogPostApi.getPosts();
				const dataWithThumbnailPromises = data.map(async (x) => {
					const thumbnail_data = await blogPostApi.getThumbnail(
						x.thumbnail_path_ref
					);
					x.thumbnail_data = thumbnail_data;
					return x;
				});
				const dataReady = await Promise.all(dataWithThumbnailPromises);

				commit("SET__BLOG_POSTS", dataReady);
			} catch (error) {
				throw error;
			}
		},
		async createPost(context, { post, thumbnail }) {
			const imgPathRef = await blogPostApi.uploadImage(thumbnail);
			const createdAt = new Date();
			post.date_posted = createdAt.toDateString();
			post.thumbnail_path_ref = imgPathRef;
			await blogPostApi.createPost(post);
		},
		async updatePost({ commit }, { post, thumbnail }) {
			delete post.thumbnail_data;
			// if is new img delete oldone from storage, upload new one and replace img path in post object with new img path
			if (!thumbnail.manuallyAdded) {
				await blogPostApi.deleteThumbnail(post.thumbnail_path_ref);
				const imgPathRef = await blogPostApi.uploadImage(thumbnail);
				post.thumbnail_path_ref = imgPathRef;
			}
			const updatePost = await blogPostApi.updatePost(post);
			commit("UPDATE", updatePost);
		},
		async deletePost({ commit }, {thumbnail_path_ref,id}) {
			await blogPostApi.deleteThumbnail(thumbnail_path_ref);
			await blogPostApi.deletePost(id);
			commit("DELETE", id);
		},
	},
	getters: {
		blogPosts: (state) => state.blogPosts,
	},
};
