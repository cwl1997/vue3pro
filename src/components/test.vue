<template>
    <div>
        <button @click="inc">click{{count}}times.</button>
    </div>
    <div id="counter">
        Counter:{{ counter }}
    </div>
    <div>
        <button @click="test">测试按钮{{value}}</button>
    </div>
</template>
<script>
import{ ref } from 'vue'
export default {
    setup(){
        const count = ref(0)
        const counter = ref('')
        const value = ref(0)
        const inc= ()=>{
            console.log(count.value)
            count.value++
            counter.value =  counter.value +'a'
        }
        const test = ()=>{// eslint-disable-line no-unused-vars
            value.value++
            console.log(value.value)
           
        }
        return {
            inc,
            test,
            count,
            counter,
            value
        }
    }    
}
</script>
<style>

</style>