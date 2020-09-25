// import Vue from 'vue'
import {createWebHistory,createRouter} from 'vue-router';
import index from '@/view/index/index.vue'
import test from '@/view/test/test.vue'
import reflearn from "@/view/study/ref.vue"
import watch from '@/view/study/watch'
// import login from '@/system/login.vue'

const history = createWebHistory();
const router = createRouter({
    history,
    routes : [
        // {
        //     path:'/',
        //     component:login
        // },
        {
            path:'/',
            component:index
        },
        {
            path:'/test',
            component:test
        },
        {
            path:'/ref',
            component:reflearn
        },
        {
            path:'/watch',
            component:watch
        }
    ]
})

export default router; 