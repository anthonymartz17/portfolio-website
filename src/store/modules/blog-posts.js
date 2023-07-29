// import blogPostApi from "@/ApiHelper/blogPostApi";

export default {
	namespaced: true,
	state: {
		blogPosts: [],
	},
	mutations: {
		CREATE(state, payload) {
			state.blogPosts.push(payload);
		},
	},
	actions: {
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
