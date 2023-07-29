import Vue from "vue";
import Vuex from "vuex";
// import blogPosts from "./modules/blog-posts";

Vue.use(Vuex);

const store = new Vuex.Store({
	// modules: {
	// 	blogPosts,
	// },
	state: {
		// Your state variables go here
	},
	mutations: {
		// Your mutations go here
	},
	actions: {
		// Your actions go here
    createPost(context) {
      console.log('kkkkkk')
    }
	},
	getters: {
		// Your getters go here
	},
});

export default store;
