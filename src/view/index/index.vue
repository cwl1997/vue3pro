<template>
    <div>
        <h1>首页</h1>
        <a-input v-model:value="state2.stu.id"  placeholder="id" />
        <a-input v-model:value="state2.stu.name"  placeholder="nane"/>
        <button @click="addStu">新增</button>
        <ul>
            <li v-for="(item,index) in state.stus" :key="index" @click="remove(index)">{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
import {reactive} from 'vue'
/* 
1.setup执行时机
setup : 
beforecreated: 表示组件刚刚被创建出来,组件的data和methods还没有初始化
created : 表示组件刚刚被创建出来,组件的data和methods已经初始化好
2.setup注意点
-在执行setup函数的时候,还没有执行created生命周期的方法
-为了避免错误的使用,直接将this修改为undefined
-setup函数只能是同步的不能是异步的

*/
export default {
    setup(){
        /*
        const num = ref(0)
        const addnum = ()=>{
            num.value++
            test()
        }
        let state = reactive({
            stus:[
                {id:1,name:'aa'},
                {id:2,name:'bb'},
                {id:3,name:'cc'}
            ]
        });
        function remove(index){
            console.log(index)
            state.stus.splice(index,1)
        }
        const test = ()=>{
            num.value++
        }*/
    let {state,remove} = removeSutdent();
    let {state2,addStu} = useAdd(state);
    return {        
        // addnum,
        // num,
        state,
        remove,
        state2,
        addStu
        }
    }
}
function removeSutdent(){
    let state = reactive({
            stus:[
                {id:1,name:'aa'},
                {id:2,name:'bb'},
                {id:3,name:'cc'}
            ]
        });
        function remove(index){
            console.log(index)
            state.stus.splice(index,1)
        }
        return {state,remove}
}
 function useAdd(state){
      let state2 = reactive({
        stu:{
            id:'',
            name:''
        }
    });
    function addStu(e){
        e.preventDefault()
        console.log(state2.stu)
        const stu = Object.assign({},state2.stu)
        state.stus.push(stu)
    }
    return {state2,addStu}
 }
</script>
<style>

</style>