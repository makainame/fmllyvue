import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import router from '@/router'
import Router from 'vue-router'//解决重复点击导航报错
import store from'./store/index'
Vue.config.productionTip = false
import axios from'axios'
Vue.prototype.$axios=axios
import http from './util/Http'
import 'amfe-flexible'
import lod from'./util/Loading'
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
// 拖拽

     
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

//解决重复点击导航报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
 return originalPush.call(this, location).catch(err => err)};
  
// Vue.filter("toFixed",(val,inp)=>{
//   return "￥"+ Number(val).toFixed(inp)
// })
// Vue.filter("toText",(val)=>{
// return    Number(val)+"人购买"
// })


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
