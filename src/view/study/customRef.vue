<template>
    <div>
        <h1>customRef</h1>
        <p>{{age}}</p>
        <button @click="mybtn">按钮</button>
        <ul>
            <li v-for="item in state" :key="item.id">{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
/**
 1.customRef
 返回一个ref对象,可以显示的控制依赖追踪和触发响应
 */
import {ref,customRef} from 'vue'
function myRef(value){
    return customRef((track,trigger)=>{
        return {
            get(){
                track()//告诉Vue这个数据是需要追踪变化的
                console.log('get',value)
                //注意点:不能在get中发送网络请求
                //渲染界面 -> 调用get ->发送网络请求
                //保存数据 -> 更新页面 -> 调用get
                return value 
            },
            set(newValue){ 
                console.log('set',newValue)
                value = newValue
                trigger()//告诉Vue触发页面更新
            }
        }
    })
}
function myRef2(value){
    return customRef((track,trigger)=>{
         fetch(value)
            .then((res)=>{
                console.log(res)
                return res.json()                
            })
            .then((data)=>{
                console.log(data)
                value = data
                trigger()
            })
            .catch((err)=>{
                console.log(err)
            })
        return {
            get(){
                track()//告诉Vue这个数据是需要追踪变化的
                console.log('get',value)
                //注意点:不能在get中发送网络请求
                //渲染界面 -> 调用get ->发送网络请求
                //保存数据 -> 更新页面 -> 调用get
                return value 
            },
            set(newValue){ 
                console.log('set',newValue)
                value = newValue
                trigger()//告诉Vue触发页面更新
            }
        }
    })
}
export default {
    setup(){
        // let age = ref(18)
        // let state = ref([])
        let age = myRef(18)
        function mybtn(){
            age.value+= 1;
        }
        // fetch('./data.json')
        //     .then((res)=>{
        //         console.log(res)
        //         return res.json()                
        //     })
        //     .then((data)=>{
        //         console.log(data)
        //         state.value = data
        //     })
        //     .catch((err)=>{
        //         console.log(err)
        //     })
        let state = myRef2('./data.json')
        return {age,mybtn,state}
    }
}
</script>
<style>

</style>