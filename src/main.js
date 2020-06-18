import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import  'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.matched[0].meta.title
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
