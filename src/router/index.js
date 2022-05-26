import { createRouter, createWebHistory } from "vue-router";
import NavBar from "../views/NavBar.vue";
import Home from "../components/HomeComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: NavBar,
      children: [
        {
          path: "",
          name: "home",
          component: Home,
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
