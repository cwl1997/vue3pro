<template>
    <div>
        <h1>测试页</h1>
        <h1>{{state.time}}</h1>\
        <button @click="mybtn">打印</button>
    </div>
</template>
<script>
/*
1.什么是reactive
    -reactive是Vue3中提供实现响应式数据的方法
    -在Vue2中响应式数据是通过defineProperty实现的
    在Vue3中响应式数据都是通过es6的Proxy实现的
2.reactive注意点
    -reactive参数必须是对象(json/arr)
    -如果给reactive传递了其他对象
     +默认情况下修改对象,界面不会自动更新
     +如果像更新,可以通过重新赋值的方法
*/
import {reactive} from 'vue'
export default{
    setup(){
        //创建一个响应式的数据
        //本质:就是将传入的数据包装成一个Proxy对象
        // let state = reactive({
        //      age:123
        // })
        // let state = reactive([1,3,5])
        let state = reactive({
            time: new Date()
        })
        function mybtn(){
            // state = 666 //由于创建响应式数据的时候不是一个对象,所以无法实现响应式
            // state.age = 666
            // state[0] = 666
            //直接修改以前的,界面不会更新
            // state.time.setDate(state.time.getDate() + 1);
            const newTime = new Date(state.time.getTime());
            newTime.setDate(state.time.getDate() + 1);
            state.time = newTime
            console.log(state)
        }
        return {state,mybtn} 
    }
}
</script>
<style>

</style>