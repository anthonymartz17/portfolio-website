import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../views/landingPage.vue";
import Portfolio from "../views/portfolioSite.vue";
import HomeBlog from "../views/blog/home-blog.vue";

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
    component: Portfolio
  },
  {
    path: "/home-blog",
    name: "home-blog",
    component: HomeBlog
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
