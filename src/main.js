import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store/index'
import fastClick from 'fastclick'
// 引入swiper轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引入css样式
import 'swiper/dist/css/swiper.css'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
import './assets/styles/border.css'
fastClick.attach(document.body)

// 安装swiper插件
Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
