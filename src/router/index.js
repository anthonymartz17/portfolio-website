import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../views/landingPage.vue";

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
				component: () => import("../views/blog/admin-app.vue"),
			},
		],
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
