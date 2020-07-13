import axios from 'axios'
import { Guid } from './guid'
import store from '@/store'
console.log(store)


// 获取设备id
let DeviceID = localStorage.DeviceID;
if (!DeviceID) {
    DeviceID = Guid.NewGuid().ToString('D');
    localStorage.DeviceID = DeviceID;
}
let ID = DeviceID;
axios.defaults.baseURL = 'https://www.365msmk.com'
//请求拦截器
axios.interceptors.request.use(function(config){
    config.headers = {
        DeviceId:ID,
        DeviceType:"H5"
    }
    let adminToken = localStorage.getItem("adminToken")
    if(adminToken){
        config.headers.Authorization =`Bearer ${adminToken}`
    }
   
    return config;
},function(error){
    return Promise.reject(error)
})


export default axios