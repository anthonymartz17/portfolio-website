import LandingPage from "../views/landingPage.vue";
import store from "../store/index";

export default [
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
		path: "/resume",
		name: "resume",
		component: () => import("../views/resume-page.vue"),
	},
	{
		path: "/work-project-details/:projectId",
		name: "work-project-details",
		component: () => import("../views/work-project-details.vue"),
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
				next({name:"404-page"});
			} else {
				// If the user is not logged in, allow access to the login page
				next();
			}
		},
	},

	{
		path: "/home-blog",
		component: () => import("../views/home-blog.vue"),
		children: [
			{
				path: "",
				name: "home-blog",
				component: () => import("../views/home-blog-children/blogs-list.vue"),
			},
			{
				path: "details/:postId",
				name: "blog-details",
				component: () => import("../views/home-blog-children/blog-details.vue"),
			},
			{
				path: "admin-app",
				name: "admin-app",
				component: () => import("../views/home-blog-children/admin-app.vue"),
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
