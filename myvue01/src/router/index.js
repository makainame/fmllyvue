import Vue from'vue'
import Router from'vue-router'
import Sy from'@/components/Sy'
import Lx from'@/components/Lx'
import Kc from'@/components/Kc'
import Wd from'@/components/Wd'
import Yk from'@/components/Yk'
import Deles from'@/page/Deles'

import Pwd from'@/page/Pwd'
import Zc from'@/page/Zc'
import Pass from'@/page/Pass'
import Detail from '@/page/Detail'

import lxyFz from'@/page/lxy/lxyFz'
import lxyCp from'@/page/lxy/lxyCp'
import lxyCt from'@/page/lxy/lxyCt'
import lxyKd from'@/page/lxy/lxyKd'
import lxyXt from'@/page/lxy/lxyXt'
import lxyTj from'@/page/lxy/lxyTj'

// import { component } from 'vue/types/umd'

// import Mkrouter from'@/page/Mkrouter'

Vue.use(Router)
export default new Router({


    routes:[
         {
             path:"/",
             component:Sy
         },
         {
            path:"/kc",
            component:Kc
        },
        {
            path:"/wd",
            component:Wd,
        },
        {
            path:"/yk",
            component:Yk
        },
        {
            path:"/lx",
            component:Lx
        },
        {
             path:"/deles",
            component:Deles
        },
        {
            path:"/pwd",
           component:Pwd
       },
       {
        path:"/zc",
       component:Zc
       },
        {
            path:"/pass",
        component:Pass
        },
        {
            path:'/detail',
          
            component:Detail
        },
        {
            path:"/lxykd",//考点专练
            component:lxyKd
        },
        {
            path:"/lxytj",//套卷练习
            component:lxyTj
        },
        {
            path:"/lxyfz",//仿真模考
            component:lxyFz
        },
        {
            path:"/lxyct",//错题练习
            component:lxyCt
        },
        {
            path:"/lxycp",//测评记录
            component:lxyCp
        },
        {
            path:"/lxyxt",//习题收藏
            component:lxyXt
        },
     ]
})