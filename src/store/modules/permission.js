import {
  constantRoutes
} from '@/router'
import datas from './data'

const permission = {
  state: {
    routes: [],
    addRoutes: []
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes
      state.routes = constantRoutes.concat(routes)
    }
  },
  actions: {
    // 生成路由
    GenerateRoutes({
      commit
    }) {
      return new Promise(resolve => {
        // 向后端请求路由数据
        const accessedRoutes = filterAsyncRouter(datas.data)
          accessedRoutes.push({
            path: '*',
            redirect: '/404',
            hidden: true
          })
        commit('SET_ROUTES', accessedRoutes)
        resolve(accessedRoutes)
        // getRouters().then(res => {
        //   console.log(datas.data)
        //   const accessedRoutes = filterAsyncRouter(datas.data)
        //   accessedRoutes.push({
        //     path: '*',
        //     redirect: '/404',
        //     hidden: true
        //   })
        //   commit('SET_ROUTES', accessedRoutes)
        //   resolve(accessedRoutes)
        // })
      })
    }
  }
}

// 动态生成路由，遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap) {
  return asyncRouterMap.filter(route => {
    if (route.component) {
      route.component = loadView(route.component)
    }
    if (route.children != null && route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }

    return true
  })
}

// export const loadParamView = (view,param) => { // 路由懒加载
//   return () => import(`@/views/${view}`)
// }

export const loadView = (view) => { // 路由懒加载
  // return () => import(`@/views/${view}`)
  return (resolve) =>  require([`@/views/${view}`], resolve)
}

export default permission
