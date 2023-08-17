import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import blogPosts from "./modules/blogPosts";
import workProjects from "./modules/workProjects";

Vue.use(Vuex);
export default new Vuex.Store({
	modules: {
		auth,
		blogPosts,
		workProjects
	},
	state: {},
});
