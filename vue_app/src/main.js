import Vue from 'vue'
import VueRouter from 'vue-router'
/*用来发送ajax请求*/
import VueResource from 'vue-resource'

import App from './App.vue'
import home from './components/home'
import allProject from './components/allProduct'
import stroll from './components/stroll'
import shopcart from './components/shopcart .vue'
import center from './components/center'
import login from './components/login'
import register from './components/register'

import '../../css/reset.css'

// 声明使用VueRouter
Vue.use(VueRouter)
// 创建路由器来管理路由
const router = new VueRouter({
  linkActiveClass: 'active',
  history: true
})
// 映射路由
router.map({
  '/home': {
    component: home
  },
  '/allProject': {
    component: allProject
  },
  '/stroll': {
    component: stroll
  },
  '/shopcart': {
    component: shopcart
  },
  '/center': {
    component: center,
  },
  '/login': {
    component: login
  },
  '/register': {
    component: register
  }
})
// 开启路由
router.start(App, '#app')
// 默认路由
router.go('/home')
