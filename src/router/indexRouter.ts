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
      name: "Home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About,
    },
    {
      path: "/resume",
      name: "Resume",
      component: Resume,
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      component: Portfolio,
    },
    {
      path: "/skills",
      name: "Skill",
      component: Skills,
    },
    {
      path: "/tools",
      name: "Tools",
      component: Tools,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    // always scroll 10px above the element #main
    return {
      // could also be
      // el: document.getElementById('main'),
      el: "#main",
      top: -10,
    };
  },
});

export default router;
