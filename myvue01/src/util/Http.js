import axios from 'axios'
import { Guid } from './guid'


// 获取设备id
let DeviceID = localStorage.DeviceID;
if (!DeviceID) {
    DeviceID = Guid.NewGuid().ToString('D');
    localStorage.DeviceID = DeviceID;
}
let ID = DeviceID;
axios.defaults.baseURL = 'http://120.53.31.103:84'
//请求拦截器
axios.interceptors.request.use(function(config) {
    config.headers = {
        DeviceId:ID,
        DeviceType:"H5"
    }
    let adminToken = localStorage.getItem("adminToken")
    config.headers.Authorization =`Bearer adminToken`
    return config;
},function(error){
    return Promise.reject(error)
})
export default axios