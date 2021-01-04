import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";
import MultiMenuBaseView from '@/components/MultiMenuBaseView'
/**
 * Note: 路由配置项
 *
 * hidden: true                   // 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 * alwaysShow: true               // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 *                                // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 *                                // 若你想不管路由下面的 children 声明的个数都显示你的根路由
 *                                // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * redirect: noRedirect           // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'             // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * meta : {
    roles: ['admin','editor']    // 设置该路由进入的权限，支持多个权限叠加
    title: 'title'               // 设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'             // 设置该路由的图标，对应路径src/assets/icons/svg
    breadcrumb: false            // 如果设置为false，则不会在breadcrumb面包屑中显示
  }
 */

// 公共路由
export const constantRoutes = [
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path*",
        component: () => import("@/views/redirect")
      }
    ]
  },
  // 选择用户身份
  {
    path: "/chooseAuth",
    component: () => import("@/views/chooseAuth"),
    name: "ChooseAuth",
    hidden: true
  },
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
    path: "/rsa",
    component: () => import("@/views/rsa"),
    hidden: true
  },
  {
    path: "/401",
    component: () => import("@/views/error/401"),
    hidden: true
  },
  {
    path: "",
    component: () => import("@/views/login"),
    hidden: true
  },
  {
    path: "/auxiliaryFunction",
    component: Layout,
    redirect: "noRedirect",
    children: [
      {
        path: "auxiliaryFunction",
        component: () => import('@/views/auxiliaryFunction'),
        name: "辅助功能",
        meta: {
          title: "辅助功能",
          icon: "dashboard",
          noCache: true,
          affix: true
        }
      },
    ]
  },
  {
    path: "/exploratoryAnalysis",
    redirect: "noRedirect",
    component: Layout,
    children: [
      {
        name: "探索分析",
        path: "exploratoryAnalysis",
        component: () => import('@/views/exploratoryAnalysis'),
        meta: {
          title: "探索分析",
          icon: "building-info-manage"
        }
      }
    ]
  },
  {
    path: "/customGenerationFunction",
    redirect: "noRedirect",
    component: Layout,
    children: [
      {
        name: "定制生成函数",
        path: "customGenerationFunction",
        component: () => import('@/views/customGenerationFunction'),
        meta: {
          title: "定制生成函数",
          icon: "building-info-manage"
        }
      }
    ]
  },
  {
    name: "定制服务",
    path: "/customService",
    redirect: "noRedirect",
    component: Layout,
    alwaysShow: true,
    meta: {
      title: "定制服务",
      icon: "dict-space"
    },
    children: [
      {
        name: "工作流定制",
        path: "workflowCustomization",
        component: () => import('@/views/customService/workflowCustomization'),
        meta: {
          title: "工作流定制",
          icon: "building-info-manage"
        }
      },
      {
        name: "项目定制",
        path: "projectCustomization",
        component: () => import('@/views/customService/projectCustomization'),
        meta: {
          title: "项目定制",
          icon: "building-info-manage"
        }
      },
    ]
  },
  {
    path: "/resourceManagement",
    redirect: "noRedirect",
    component: Layout,
    children: [
      {
        name: "资源管理",
        path: "resourceManagement",
        component: () => import('@/views/resourceManagement'),
        meta: {
          title: "资源管理",
          icon: "building-info-manage"
        }
      }
    ]
  },
  {
    path: "/hostResourceManagement",
    redirect: "noRedirect",
    component: Layout,
    children: [
      {
        name: "主机资源管理",
        path: "hostResourceManagement",
        component: () => import('@/views/hostResourceManagement'),
        meta: {
          title: "主机资源管理",
          icon: "building-info-manage"
        }
      }
    ]
  },
  {
    name: "策略管理",
    path: "/policyManagement",
    redirect: "noRedirect",
    component: Layout,
    alwaysShow: true,
    meta: {
      title: "策略管理",
      icon: "dict-space"
    },
    children: [
      {
        name: "资源管理策略",
        path: "resourceManagementStrategy",
        component: () => import('@/views/policyManagement/resourceManagementStrategy'),
        meta: {
          title: "资源管理策略",
          icon: "building-info-manage"
        }
      },
      {
        name: "运维策略",
        path: "operationMaintenanceStrategy",
        component: () => import('@/views/policyManagement/operationMaintenanceStrategy'),
        meta: {
          title: "运维策略",
          icon: "building-info-manage"
        }
      },
      {
        name: "鉴权策略",
        path: "authenticationStrategy",
        component: () => import('@/views/policyManagement/authenticationStrategy'),
        meta: {
          title: "鉴权策略",
          icon: "building-info-manage"
        }
      },
    ]
  },
  {
    path: "/nodeDisplay",
    redirect: "noRedirect",
    component: Layout,
    children: [
      {
        name: "节点展示",
        path: "nodeDisplay",
        component: () => import('@/views/nodeDisplay'),
        meta: {
          title: "节点展示",
          icon: "building-info-manage"
        }
      }
    ]
  },
  {
    path: "/programDevelopment",
    redirect: "noRedirect",
    component: Layout,
    children: [
      {
        name: "实时程序开发",
        path: "programDevelopment",
        component: () => import('@/views/programDevelopment'),
        meta: {
          title: "实时程序开发",
          icon: "building-info-manage"
        }
      }
    ]
  },
];

export default new Router({
  mode: "history", // 去掉url中的#
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
});
