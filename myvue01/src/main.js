import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import router from '@/router'
import axios from'./utils/http'
import store from'./store/index'
import 'amfe-flexible'
import { Toast } from 'vant';
Vue.use(Toast);
Vue.config.productionTip = false
Vue.prototype.$http=axios
Vue.prototype.$toast = Toast
Vue.use(Vant)


     
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

  
  
  
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
