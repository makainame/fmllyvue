import store from'../store/index'
import axios from'axios'

// 请求拦截器
axios.interceptors.request.use(
    config => {
      store.state.isLoading = true
      return config;
    },
    error => {
      return Promise.error(error);
    }
  );
  
  
  axios.interceptors.response.use(
    response => {
      // console.log(response)
      store.state.isLoading = false
      // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
      // 否则的话抛出错误
      if (response.status === 200) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(response);
      }
    },
    // 服务器状态码不是2开头的的情况
    // 这里可以跟你们的后台开发人员协商好统一的错误状态码
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    // 下面列举几个常见的操作，其他需求可自行扩展
    error => {
      if (error.response.status) {
        return Promise.reject(error.response);
      }
    }
  );
  
  export default axios 
  