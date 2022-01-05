import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const About = () => import("../views/DemoView.vue");
const Portfolio = () => import("../views/DemoView.vue");
const Skills = () => import("../views/DemoView.vue");
const Resume = () => import("../views/DemoView.vue");
const Tools = () => import("../views/DemoView.vue");
const Contact = () => import("../views/DemoView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About,
    },
    {
      path: "/resume",
      name: "resume",
      component: Resume,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio,
    },
    {
      path: "/skills",
      name: "skill",
      component: Skills,
    },
    {
      path: "/tools",
      name: "tools",
      component: Tools,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
  ],
});

export default router;
