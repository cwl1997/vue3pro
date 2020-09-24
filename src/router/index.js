// import Vue from 'vue'
import {createWebHistory,createRouter} from 'vue-router';
import index from '@/view/index/index.vue'
import test from '@/view/test/test.vue'
import login from '@/system/login.vue'

const history = createWebHistory();
const router = createRouter({
    history,
    routes : [
        {
            path:'/',
            component:login
        },
        {
            path:'/index',
            component:index
        },
        {
            path:'/test',
            component:test
        }
    ]
})

export default router; 