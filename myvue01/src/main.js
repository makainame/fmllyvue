import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import router from '@/router'
<<<<<<< HEAD
import axios from'./utils/http'
import store from'./store/index'
=======
// import axios from'axios'
import store from'./store/index'
import axios from './util/Http'
Vue.config.productionTip = false
Vue.prototype.$axios=axios
Vue.prototype.$http = axios
>>>>>>> 73042d8ae19aab9484e20d2214d80e00db88c591
import 'amfe-flexible'
import { Toast } from 'vant';
Vue.use(Toast);
Vue.config.productionTip = false
Vue.prototype.$http=axios
Vue.prototype.$toast = Toast
Vue.use(Vant)

<<<<<<< HEAD

     
// / 编程导航 自定义指令
Vue.directive("jump",(el,{value},vnode)=>{
        el.onclick=(()=>{
            vnode.context.$router.push({
                path:value
            })
        })
})
Vue.directive("detail",(el,{value},vnode)=>{
  el.onclick=(()=>{
      vnode.context.$router.push({
          path:value
      })
  })
})

  
  
  
=======
// 拖拽

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
>>>>>>> 73042d8ae19aab9484e20d2214d80e00db88c591
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
