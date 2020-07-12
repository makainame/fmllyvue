
import Vue from 'vue'
import Router from 'vue-router'
import Sy from '@/components/Sy'
import Lx from '@/components/Lx'
import Kc from '@/components/Kc'
import Wd from '@/components/Wd'
import Yk from '@/components/Yk'
import Deles from '@/page/Deles'
import Oto from '@/page/Oto'
import Otoplan from '@/page/Otoplan'

import Home from'@/components/Home'


import Pwd from'@/page/Pwd'
import Zc from'@/page/Zc'
import Pass from'@/page/Pass'
import Detail from '@/page/Detail'
import Smspwd from '@/page/Smspwd'
import SmsMain from '@/page/Smsmain'
import smsSend from '@/page/Smssend'

import lxyFz from'@/page/lxy/lxyFz'
import lxyCp from'@/page/lxy/lxyCp'
import lxyCt from'@/page/lxy/lxyCt'
import lxyKd from'@/page/lxy/lxyKd'
import lxyXt from'@/page/lxy/lxyXt'
import lxyTj from'@/page/lxy/lxyTj'


// import { component } from 'vue/types/umd'

import Mkrouter from'@/page/Mkrouter'

import Qdfss from'@/page/qdf/Qdfss'
import Qdfxqy from'@/page/qdf/Qdfxqy'
import Qdfjsxq from '@/page/qdf/Qdfjsxq'
import Qdfxx from '@/page/qdf/Qdfxx'
 // import { component } from 'vue/types/umd'
Vue.use(Router)
export default new Router({


    routes:[
        {
            path:"/",
            name:"Home",
            redirect:"/home/sy"
        },
        {
               path:"/home",
               name:"Home",
               component:Home,
               children:[
                {
                    path:"sy",
                    name:"sy",
                    component:()=> import ("../components/Sy.vue"),
                   
                },
                {
                   path:"kc",
                   name:"kc",
                   component:()=> import ("../components/Kc.vue"),
                  
               },
               {
                   path:"wd",
                   name:"wd",
                   component:()=> import ("../components/Wd.vue"),
                  
               },
               {
                   path:"yk",
                   name:"yk",
                   component:()=> import ("../components/Yk.vue"),
                   
               },
               {
                   path:"lx",
                   name:"lx",
                   component:()=> import ("../components/Lx.vue"),
                  
               },
               {
                path:"smsmain",
                name:'smsmain',
                component:()=> import ("../page/Smsmain.vue"),
               }
               ] 
        },

         
        {
            path:"/deles",
            component:()=> import ("../page/Deles.vue"),
            meta:{
                ollarr:true
            }
        },
        {
            path:"/qdfss",
            name:'qdfss',
            component:()=> import ("../page/qdf/Qdfss.vue")
        },
        {
            path:"/qdfxqy",
            name:'qdfxqy',
            component:()=> import ("../page/qdf/Qdfxqy.vue")
        },
        {
            path:"/qdfjsxq",
            name:'qdfjsxq',
            component:()=> import ("../page/qdf/Qdfjsxq.vue")
        },
        {
            path:"/mkroute",
            component:()=> import ("../page/Mkrouter.vue"),
            meta:{
                ollarr:true
            }
        },
        {
            path:"/oto",
           component:()=>  import("../page/Oto.vue")
        },
        {
            path:"/Otoplan",
           component:()=> import("../page/Otoplan.vue")
        },
        {
            path:'/detail',
            component:()=> import ("../page/Detail.vue")
        },
        {
            path:"/lxykd",//考点专练
            component:()=> import ("../page/lxy/lxyKd.vue")
        },
        {
            path:"/lxytj",//套卷练习
            component:()=> import ("../page/lxy/lxyTj.vue")
        },
        {
            path:"/lxyfz",//仿真模考
            component:()=> import ("../page/lxy/lxyFz.vue")
        },
        {
            path:"/lxyct",//错题练习
            component:()=> import ("../page/lxy/lxyCt.vue")
        },
        {
            path:"/lxycp",//测评记录
            component:()=> import ("../page/lxy/lxyCp.vue")
        },
        {
            path:"/lxyxt",//习题收藏
            component:()=> import("../page/lxy/lxyXt.vue")
        },
        {
            path:"/pwd",//找回密码
            component:()=> import("../page/Pwd.vue")
        },
        {
            path:"/zc",//注册页面
            component:()=> import("../page/Zc.vue")
        },
        {
            path:"/pass",//手机密码登录
            component:()=> import("../page/Pass.vue")
        },
        {
            path:"/qdfxx",
            name:'qdfxx',
            component:()=> import ("../page/qdf/Qdfxx.vue")
        },
        {
            path:"/smspwd",
            name:'smspwd',
            component: ()=> import ("../page/Smspwd")
        },
        
     ]
})