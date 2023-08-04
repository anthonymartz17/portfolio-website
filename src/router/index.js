import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../views/landingPage.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "landing page",
		component: LandingPage,
	},
	{
		path: "/portfolio",
		name: "portfolio",
		component: () => import("../views/portfolioSite.vue"),
	},
	{
		path: "/@dmin-login",
		name: "login",
		component: () => import("../views/admin-login.vue"),
		beforeEnter: (to, from, next) => {
			// Check the authentication status or any other condition
			const isLoggedIn = store.getters["auth/isLoggedIn"];
		

			// If the user is already logged in,cancel navigation
			if (isLoggedIn) {
		
				// next('/');
			} else {
				// If the user is not logged in, allow access to the login page
				next();
			}
		},
	},

	{
		path: "/home-blog",
		component: () => import("../views/blog/home-blog.vue"),
		children: [
			{
				path: "",
				name: "home-blog",
				component: () => import("../views/blog/blogs-list.vue"),
			},
			{
				path: "details/:postId",
				name: "blog-details",
				component: () => import("../views/blog/blog-details.vue"),
			},
			{
				path: "admin-app",
				name: "admin-app",
				component: () => import("../views/blog/admin/admin-app.vue"),
				meta: { requiresAuth: true },
			},
		],
	},
	{
		path: "/:notFound(.*)",
		name: "404-page",
		component: () => import("../views/404-page.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});
router.beforeEach((to, from, next) => {
	// Check the authentication status or any other condition
	store.dispatch("auth/autoLogIn");
	const isLoggedIn = store.getters["auth/isLoggedIn"];
	console.log(isLoggedIn, "esta logeado?");
	// If route requires authentication
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (!isLoggedIn) {
			// User is not authenticated, redirect to login or appropriate route
			next({ name: "portfolio" });
			console.log("redirectin to homepage");
		} else {
			console.log("ahouldnt print");
			// User is authenticated, proceed to the route
			next();
		}
	} else {
		console.log("is it printing");
		// If route does not require authentication
		next();
	}
});
export default router;
