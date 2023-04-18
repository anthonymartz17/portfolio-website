import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../views/landingPage.vue";
import Portfolio from "../views/portfolioSite.vue";
import HomeBlog from "../views/blog/home-blog.vue";
import BlogsList from "../views/blog/blogs-list.vue";
import BlogsDetails from "../views/blog/blog-details.vue";

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
		component: Portfolio,
	},
	{
		path: "/home-blog",
    component: HomeBlog,
    name: "home-blog",
    children: [
      {path:'', name: "home-blog", component:BlogsList},
      {path:'details', name: "blog-details", component:BlogsDetails}
    ]
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
