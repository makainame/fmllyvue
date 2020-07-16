
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
import Tsk from '@/page/Tsk'
import Home from'@/components/Home'


import Pwd from'@/page/Pwd'
import Zc from'@/page/Zc'
import sz from'@/page/Sz'
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
import teacher from'@/page/teacher'
import Lsgz from'@/page/Lsgz'
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
            redirect:"/home/sy",
            meta:{
                title:"每时每刻"
            }
        },
        {
               path:"/home",
               name:"Home",
               component:Home,
               meta:{
                title:"每时每刻"
            },
               children:[
                {
                    path:"sy",
                    name:"sy",
                    component:()=> import ("../components/Sy.vue"),
                    meta:{
                        title:"首页"
                    }
                },
                {
                   path:"kc",
                   name:"kc",
                   component:()=> import ("../components/Kc.vue"),
                   meta:{
                    title:"课程"
                }
               },
               {
                   path:"wd",
                   name:"wd",
                   component:()=> import ("../components/Wd.vue"),
                   meta:{
                    title:"登陆"
                }
               },
               {
                   path:"yk",
                   name:"yk",
                   component:()=> import ("../components/Yk.vue"),
                   meta:{
                    title:"约课"
                }
               },
               {
                   path:"lx",
                   name:"lx",
                   component:()=> import ("../components/Lx.vue"),
                   meta:{
                    title:"练习"
                }
               },
               {
                path:"smsmain",
                name:'smsmain',
                component:()=> import ("../page/Smsmain.vue"),
                meta:{
                    title:"我的"
                }
               }
               ] 
        },

         
        {
            path:"/deles",
            component:()=> import ("../page/Deles.vue"),
            meta:{
                ollarr:true,
                
            }
        },
        {
            path:"/sz",
            component:()=> import ("../page/Sz.vue"),
            meta:{
                ollarr:true,
                title:"设置"
            }
        },
        {
            path:"/qdfss",
            name:'qdfss',
            component:()=> import ("../page/qdf/Qdfss.vue")
        },
        {
            path:"/teacher",
            name:'teacher',
            component:()=> import ("../page/teacher.vue"),
            meta:{
                title:"讲师详情"
            }
        },
        {
            path:"/qdfxqy",
            name:'qdfxqy',
            component:()=> import ("../page/qdf/Qdfxqy.vue"),
            meta:{
                title:"课程详情"
            }
        },
        {
            path:"/qdfjsxq",
            name:'qdfjsxq',
            component:()=> import ("../page/qdf/Qdfjsxq.vue"),
            meta:{
                title:"讲师详情"
            }
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
           component:()=>  import("../page/Oto.vue"),
           meta:{
               title:"一对一辅导"
           }
        },
        {
            path:"/Otoplan",
           component:()=> import("../page/Otoplan.vue")
        },
        {
            path:'/detail',
            component:()=> import ("../page/Detail.vue"),
             meta:{
                  title:"课程详情"
             }
        },
        {
            path:"/lxykd",//考点专练
            component:()=> import ("../page/lxy/lxyKd.vue"),
            meta:{
                title:"考点专练"
            }
        },
        {
            path:"/lxytj",//套卷练习
            component:()=> import ("../page/lxy/lxyTj.vue"),
            meta:{
                title:"套卷练习"
            }
        },
        {
            path:"/lxyfz",//仿真模考
            component:()=> import ("../page/lxy/lxyFz.vue"),
            meta:{
                title:"仿真模考"
            }
        },
        {
            path:"/lxyct",//错题练习
            component:()=> import ("../page/lxy/lxyCt.vue"),
            meta:{
                title:"错题练习"
            }
        },
        {
            path:"/lxycp",//测评记录
            component:()=> import ("../page/lxy/lxyCp.vue"),
            meta:{
                title:"测评记录"
            }
        },
        {
            path:"/lxyxt",//习题收藏
            component:()=> import("../page/lxy/lxyXt.vue"),
            meta:{
                title:"习题收藏"
            }
        },
        {
            path:"/pwd",//找回密码
            component:()=> import("../page/Pwd.vue"),
            meta:{
                title:"找回密码"
            }
        },
        {
            path:"/zc",//注册页面
            component:()=> import("../page/Zc.vue"),
            meta:{
                title:"注册页面"
            }
        },
        {
            path:"/pass",//手机密码登录
            component:()=> import("../page/Pass.vue"),
            meta:{
                title:"手机密码登陆"
            }
        },
        {        
            path:"/qdfxx",
            name:'qdfxx',
            component:()=> import ("../page/qdf/Qdfxx.vue"),
            meta:{
                 title:"学习"
            }
            
        },
        {
            path:"/smspwd",
            name:'smspwd',
            component: ()=> import ("../page/Smspwd"),
            meta:{
                 title:"设置密码"
            }
        },
       
        {
            path:"/smssend",
            name:'smssend',
            component:()=> import ("../page/Smssend"),
            meta:{
                 title:"信息填写"
            }
        },
        {
            path:"/lsgz",
            name:'lsgz',
            component:()=> import ("../page/Lsgz.vue"),
            meta:{
                title:"讲师关注"
            }
        },
          {
            path:"/mycollect",
            name:'mycollect',
            component:()=> import ("../page/Mycollect"),
                meta:{
                    title:"我的收藏"
                }
        },
 {
                path:"/tsk",
                name:'tsk',
                component:()=> import ("../page//Tsk.vue"),
                    meta:{
                        title:"我的学习"
                    }
            }
       
     ]
})