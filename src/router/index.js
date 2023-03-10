import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: {
      name: "index",
    },
  },
  {
    path: "/index",
    name: "index",
    component: () =>
      import(/* webpackChunkName: "index" */ "../views/Home/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;