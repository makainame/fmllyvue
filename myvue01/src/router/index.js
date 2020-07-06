import Vue from 'vue'
import Router from 'vue-router'
import Sy from '@/components/Sy'
import Lx from '@/components/Lx'
import Kc from '@/components/Kc'
import Wd from '@/components/Wd'
import Yk from '@/components/Yk'
import Deles from '@/page/Deles'
import Oto from '@/page/Oto'


// import { component } from 'vue/types/umd'
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
            component:Wd
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
            path:"/oto",
           component:Oto
        },
     
     ]
})