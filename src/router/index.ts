import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TPosts from "@/components/TPosts.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: TPosts,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
