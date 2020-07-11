import {Guid} from './guid'
import axios from 'axios';
// import { config } from 'vue/types/umd';
// 获取设备id
let DeviceID = localStorage.DeviceID;
if (!DeviceID) {
    DeviceID = Guid.NewGuid().ToString('D');
    localStorage.DeviceID = DeviceID;
}
let ID = DeviceID;
// axios.defaults.baseURL="https://wap.365msmk.com";
axios.defaults.baseURL = 'http://120.53.31.103:84';
// 请求拦截  
axios.interceptors.request.use(config=>{

    config.headers = {
          DeviceId:ID,
          DeviceType:"H5"
    }
    let dv1= localStorage.getItem("adminToken")
    if(dv1){
      config.headers.authorization=`Bearer ${dv1}`
    }
    return config;
},function(error){
      return Promise.reject(error);

})
export default axios 