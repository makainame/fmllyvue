import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import router from '@/router'
import axios from'axios'
import store from'./store/index'
Vue.config.productionTip = false
Vue.prototype.$axios=axios
import 'amfe-flexible'
Vue.use(Vant)
// 自定义全局拖拽指令

// 请求拦截器
axios.interceptors.request.use(
  config => {             // 一些配置信息，里面包含url地址，请求的参数，是否延迟，请求方式等等
      store.state.isLoading = true  // loading显示
      return config
  },
  error => {
      return Promise.error(error)
  }
  )
  import elementUi from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'   // 全局样式
  Vue.use(elementUi)
  // 响应拦截器
  axios.interceptors.response.use(
  response => {         // 一些返回状态，返回状态码，返回状态信息，数据等等
      // console.log(response)
      store.state.isLoading = false   // loading不显示
      // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
      // 否则的话抛出错误
      if (response.status === 200) {
      return Promise.resolve(response)
      } else {
      return Promise.reject(response)
      }
  },
  error => {
      if (error.response.status) {
      return Promise.reject(error.response)
      }
  }
  );
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
