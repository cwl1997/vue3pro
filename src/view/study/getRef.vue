<template>
    <div>
        <h1>ref获取元素理解</h1>
        <div ref="box">我是div</div>
    </div>
</template>
<script>
/**
 1.获取元素
 在Vue2.x中我们可以通过给元素添加ref="xxx",
 然后在代码中通过this.$refs.xxx的方式拿到
 在Vue3.x中我们也可以通过ref来获取元素
 */
import {ref,onMounted} from 'vue'
export default {
    setup(){
        let box =ref(null);
         onMounted(()=>{
            console.log('onMounted',box.value)
        })
        console.log(box.value)// reactive({value:null})       
        return {box}
    }
}
</script>
<style>

</style>