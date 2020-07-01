import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import router from '@/router'
import axios from'axios'
import store from'./store/index'
Vue.config.productionTip = false
Vue.prototype.$axios=axios
import 'amfe-flexible';
Vue.use(Vant);

// 请求拦截器
axios.interceptors.request.use(
  config => {             // 一些配置信息，里面包含url地址，请求的参数，是否延迟，请求方式等等
      store.state.isLoading = true  // loading显示
      return config;
  },
  error => {
      return Promise.error(error);
  }
  );
  import elementUi from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css';   // 全局样式
  Vue.use(elementUi)
  // 响应拦截器
  axios.interceptors.response.use(
  response => {         // 一些返回状态，返回状态码，返回状态信息，数据等等
      // console.log(response)
      store.state.isLoading = false   // loading不显示
      // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
      // 否则的话抛出错误
      if (response.status === 200) {
      return Promise.resolve(response);
      } else {
      return Promise.reject(response);
      }
  },
  error => {
      if (error.response.status) {
      return Promise.reject(error.response);
      }
  }
  );
   
//  自定义指令拖拽
  Vue.directive('drag',function(el){
    el.onmousedown=function(e){
      //获取鼠标点击处分别与div左边和上边的距离：鼠标位置-div位置
      var disX=e.clientX-el.offsetLeft;
      var disY=e.clientY-el.offsetTop;
      console.log(disX,disY);
  
      //包含在onmousedown里面，表示点击后才移动，为防止鼠标移出div，使用document.onmousemove，点击后再移动
      //使用document.onmousemove，不要使用el.onmousemmove
      //在这个文档里出不去
      document.onmousemove=function(e){
        //获取移动后div的位置：鼠标位置-disX/disY
        var l=e.clientX-disX;
        var t=e.clientY-disY;
        el.style.left=l+'px';      //必须要有单位
        el.style.top=t+'px';
      }
  
      //停止移动，鼠标弹起
      document.onmouseup=function(e){
        document.onmousemove=null;
        document.onmouseup=null;
      }
  
    }
  });


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
