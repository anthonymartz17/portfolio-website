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
				// let imagesUrl = await apiCarsImages.getImagesById(vehicle.pics);
				// vehicle.carPicsUrls = imagesUrl;
				return post;
			} catch (error) {
				throw error;
			}
		},
		async setBlogPosts({ commit }) {
			console.log("fired from state");
			try {
				const data = await blogPostApi.getPosts();
				commit("SET__BLOG_POSTS", data);
			} catch (error) {
				throw error;
			}
		},
		async createPost(context, { post, thumbnail }) {
			//creates timestamp posted date
			const createdAt = new Date();
			post.date_posted = createdAt;
			const createdPost = await blogPostApi.createPost(post);
			const imgPathRef = await blogPostApi.uploadImage({
				thumbnail,
				blogId: createdPost.id,
			});
			post.thumbnail = imgPathRef;
			await blogPostApi.updatePost(post, createdPost.id);
		},
		async updatePost({ commit }, blogPost) {
			const updatePost = await blogPostApi.updatePost(blogPost);
			commit("UPDATE", updatePost);
		},
		async deletePost({ commit }, postId) {
			await blogPostApi.deletePost(postId);
			commit("DELETE", postId);
		},
	},
	getters: {
		blogPosts: (state) => state.blogPosts,
	},
};
