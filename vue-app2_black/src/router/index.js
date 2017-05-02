import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 懒加载路由
const routes = [
  // 路由重定向
  { path: "/", redirect: '/home' },
  {
    path: '/home',
    component:resolve => require(['../components/home'],resolve)
  },
  {
    path: '/new',
    component:resolve => require(['../components/home'],resolve)
  },
  {
    path: '/channel/:id',
    component:resolve => require(['../components/home'], resolve)
  },
  {
    path: '/allProject',
    component:resolve => require(['../components/allProduct'], resolve)
  },
  {
    path: '/stroll',
    component:resolve => require(['../components/stroll'], resolve)
  },
  {
    path: '/shopcart',
    component: resolve => require(['../components/shopcart .vue'], resolve)
  },
  {
    path: '/center',
    component: resolve => require(['../components/center'], resolve)
  },
  {
    path: '/login',
    component: resolve => require(['../components/login'], resolve)
  },
  {
    path: '/register',
    component: resolve => require(['../components/register'], resolve)
  }
]
const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  routes
})
export default router;


