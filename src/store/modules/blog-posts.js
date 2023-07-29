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
		CREATE(state, payload) {
			state.blogPosts.push(payload);
		},
	},
	actions: {
		async setBlogPosts({ commit }) {
			console.log('fired from state')
			try {
				const data = await blogPostApi.getPosts();
				commit("SET__BLOG_POSTS", data);
			} catch (error) {
				throw error;
			}
		},
		async createPost({ commit }, payload) {
			console.log(payload, "state");
			// const createdPost = await blogPostApi.createPost(payload);
			// commit("CREATE", payload);
		},
	},
	getters: {
		blogPosts: (state) => state.blogPosts,
	},
};
