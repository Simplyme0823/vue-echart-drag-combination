import Vue from "vue";
import VueRouter from "vue-router";
import { menu } from "./menu";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { name: "主页" }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export const menus = menu(routes);
export default router;
