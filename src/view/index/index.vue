<template>
    <div>
        <h1>首页</h1>
        <button @click="addnum">点击次数:{{num}}</button>
    </div>
</template>
<script>
import {ref} from 'vue'
export default {
    setup(){
        const num = ref(0)
        const addnum = ()=>{
            num.value++
            test()
        }
        const test = ()=>{
            num.value++
        }
    return {        
        addnum,
        num
    }
    }
}
</script>
<style>

</style>