import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});
router.beforeEach((to, from, next) => {
	// Check the authentication status or any other condition
	store.dispatch("auth/autoLogIn");
	const isLoggedIn = store.getters["auth/isLoggedIn"];

	// If route requires authentication

	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (!isLoggedIn) {
			// User is not authenticated, redirect to login or appropriate route
			next({ name: "portfolio" });
		} else {
			// User is authenticated, proceed to the route
			next();
		}
	} else {
		// If route does not require authentication
		next();
	}
});
export default router;
