import Vue from'vue'
import Router from'vue-router'
import Sy from'@/components/Sy'
import Lx from'@/components/Lx'
import Kc from'@/components/Kc'
import Wd from'@/components/Wd'
import Yk from'@/components/Yk'
import Home from'@/components/Home'
import Deles from'@/page/Deles'
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
            redirect:"/home"
        },
        {
               path:"/home",
               name:"Home",
               component:Home,
               redirect:"/home/sy",
               children:[
                {
                    path:"sy",
                    component:Sy
                },
                {
                   path:"kc",
                   component:Kc
               },
               {
                   path:"wd",
                   component:Wd
               },
               {
                   path:"yk",
                   component:Yk
               },
               {
                   path:"lx",
                   component:Lx
               },
               ] 
        },

         
        {
             path:"/deles",
            component:Deles
        },
        {
            path:"/qdfss",
            name:'qdfss',
            component:Qdfss
        },
        {
            path:"/qdfxqy",
            name:'qdfxqy',
            component:Qdfxqy
        },
        {
            path:"/qdfjsxq",
            name:'qdfjsxq',
            component:Qdfjsxq
        },
        {
            path:"/qdfxx",
            name:'qdfxx',
            component:Qdfxx
        }
     ]
})