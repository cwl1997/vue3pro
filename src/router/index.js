// import Vue from 'vue'
import {createWebHistory,createRouter} from 'vue-router';
import index from '@/view/index/index.vue'
import test from '@/view/test/test.vue'
import reflearn from "@/view/study/ref.vue"
import watch from '@/view/study/watch'
import shallowRef from '@/view/study/shallowRef'
import toRow from '@/view/study/toRow'
import markRow from '@/view/study/markRaw'
import toRef from '@/view/study/toRef'
import customRef from '@/view/study/customRef'
import getRef from '@/view/study/getRef'

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
        },
        {
            path:'/shallowRef',
            component:shallowRef
        },
        {
            path:'/toRow',
            component:toRow
        },
        {
            path:'/markRow',
            component:markRow
        },
        {
            path:'/toRef',
            component:toRef
        },
        {
            path:'/customRef',
            component:customRef
        },
        {
            path:'/getRef',
            component:getRef
        }
    ]
})

export default router; 