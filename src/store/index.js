import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import blogPosts from "./modules/blog-posts";

Vue.use(Vuex);
export default new Vuex.Store({
	modules: {
		auth,
		blogPosts,
	},
	state: {},
});
