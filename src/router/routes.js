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
		path: "/home-blog",
		component: () => import("../views/home-blog/home-blog.vue"),
		children: [
			{
				path: "",
				name: "home-blog",
				component: () =>
					import("../views/home-blog/home-blog-children/blogs-list.vue"),
			},
			{
				path: "post-details/:postId",
				name: "post-details",
				component: () =>
					import("../views/home-blog/home-blog-children/post-detail.vue"),
			},
		],
	},
	{
		path: "/@dmin-login",
		name: "login",
		component: () => import("../views/admin/admin-login.vue"),
		beforeEnter: (to, from, next) => {
			// Check the authentication status or any other condition
			const isLoggedIn = store.getters["auth/isLoggedIn"];

			// If the user is already logged in,cancel navigation
			if (isLoggedIn) {
				next({ name: "404-page" });
			} else {
				// If the user is not logged in, allow access to the login page
				next();
			}
		},
	},
	{
		path: "/admin-page",
		component: () => import("../views/admin/admin-page.vue"),
		meta: { requiresAuth: true },
		children: [
			{
				path: "",
				name: "admin-page",
				component: () => import("../views/admin/admin-children/blogs-list.vue"),
			},
			// {
			// 	path: "post-details/:postId",
			// 	name: "post-details",
			// 	component: () =>
			// 		import("../views/admin/admin-children/blog-details.vue"),
			// },
			{
				path: "create-post",
				name: "create-post",
				component: () => import("../views/admin/admin-children/create-post"),
			},
		],
	},

	{
		path: "/:notFound(.*)",
		name: "404-page",
		component: () => import("../views/404-page.vue"),
	},
];
