import router from "./router";
import store from "./store";
import { Message } from "element-ui";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getToken } from "@/utils/auth";
import { setStore } from "@/utils/localStore";

NProgress.configure({
  showSpinner: false
});

// 免登录路由白名单
const whiteList = [
  "/login",
];

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (getToken()) {
    /* has token*/
    if (to.path === "/login") {
      next({
        path: "/index"
      });
      NProgress.done();
    } else {
      if (store.getters.roles.length === 0) {
        // 判断当前用户是否已拉取完user_info信息
        store.dispatch("GetInfo").then(res => {
          // 拉取user_info
          const roles = res.roles;

          store
            .dispatch("GenerateRoutes", {
              roles
            })
            .then(accessRoutes => {
              // 测试 默认静态页面
              // store.dispatch('permission/generateRoutes', { roles }).then(accessRoutes => {
              next({
                ...to,
                replace: true
              }); // hack方法 确保addRoutes已完成
            });
        });
        // .catch(err => {
        //   store.dispatch('FedLogOut').then(() => {
        //     // Message.error('登录信息获取失败！')
        //     next({
        //       path: '/index'
        //     })
        //   })
        // })
      } else {
        next();
      }
    }
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next();
    } else {
      next(`/login`); // 否则全部重定向到登录页
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
