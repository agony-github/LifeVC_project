import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import VueScroller from 'vue-scroller'
import '../static/reset.css'

Vue.use(VueResource)
// 使用上拉下滑插件
Vue.use(VueScroller)
// 使用懒加载插件
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: 'http://m.lifevc.com/h5/static/images/itemdefault.png',
  attempt: 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
