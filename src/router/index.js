import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../views/landingPage.vue";
import Portfolio from "@/components/portfolioSite.vue";

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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
