import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const About = () => import("../views/AboutPage.vue");
const Experience = () => import("../views/ExperiencePage.vue");
const Skills = () => import("../views/SkillsPage.vue");
// const CanvasSketch = () => import("../views/CanvasSketch.vue");
const Projects = () => import("../views/ProjectPage.vue");
const NotFound = () => import("../views/NotFound.vue");

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
      path: "/experience",
      name: "Experience",
      component: Experience,
    },

    {
      path: "/work",
      name: "Work",
      component: Projects,
    },
    {
      path: "/skills",
      name: "Skill",
      component: Skills,
    },
    /*    {
      path: "/canvas-sketch",
      name: "CanvasSketch",
      component: CanvasSketch,
    },*/
    {
      name: "NotFound",
      path: "/:pathMatch(.*)*",
      component: NotFound,
    },
  ],

  scrollBehavior() {
    const app = document.getElementById("app") as HTMLDivElement | null;
    if (app) {
      app.scrollIntoView({ behavior: "smooth" });
    }
  },
});

export default router;
