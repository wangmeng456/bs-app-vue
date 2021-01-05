import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// 公共路由
export const constantRoutes = [
  {
    path: "/404",
    component: () => import("@/views/error/404"),
    hidden: true
  },
  {
    path: "/NoAccess",
    component: () => import("@/views/error/NoAccess"),
    hidden: true
  },
  {
    path: "/401",
    component: () => import("@/views/error/401"),
    hidden: true
  },
  {
    path: "/login",
    component: () => import("@/views/login"),
    hidden: true
  },
  {
    path: "/index",
    component: () => import("@/views/index"),
    hidden: true
  },
];

export default new Router({
  mode: "history", // 去掉url中的#
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
});
