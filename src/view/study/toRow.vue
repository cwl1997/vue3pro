<template>
    <div>
        <h1>toRaw</h1>
        <div>{{state}}</div>
        <button @click="mybtn">按钮</button>
    </div>
</template>
<script>
/*
    1.toRow
    从Reactive 或 Ref中得到原始数据

    2.toRow作用
    做一些不想被监听的事情(提升性能)
*/
// import {reactive,toRaw} from 'vue'
import {ref,toRaw} from 'vue'
export default {
    setup(){
        let obj = {name:'ccc',age:18}
        /**
         ref/reactive数据类型的特点
         每次修改都会被追踪,都会更新ui界面,但是这样非常消耗性能
         所以如果我们有些操作不需要追踪,不需要更新ui界面,那么这个时候,
         就可以通过toRaw拿到原始数据,对原始数据进行修改
         这样就不会被追踪,这样就不会更新ui界面,这样性能更好
         */
        /**
        1.ref-> reactive 

         */
        let state = ref(obj)
        //注意点: 如果想通过toRaw拿到ref类型的原始数据(创建时传入的那个数据)
        //必须明确的告诉toRaw,要获取的是.value 的值
        //因为经过Vue处理之后,.value中保存的才是当初创建时传入的那个原始数据
        // let obj2 = toRaw(state)
        let obj2 = toRaw(state.value)
        console.log(obj === obj2) // true


        // console.log(obj === state) //false
        //state和obj的关系
        // 引用关系,state的本质是一个Proxy对象,在这个Proxy对象中引用了obj

        function mybtn(){
            //如果直接修改obj无法触发obj的更新
            // 只有通过包装之后的对象来修改,才会触发页面的更新
            obj.name="cwl"
            console.log(obj)
            // state.name = 'cwl'
            console.log(state)
            console.log(obj2)
        }
        return {state,mybtn}
    }
}
</script>
<style>

</style>