import TPostsVue from "@/components/TPosts.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: TPostsVue,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
