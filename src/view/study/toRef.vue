<template>
    <div>
        <h1>toRef</h1>
        <p>{{state}}</p>
        <button @click="mybtn">按钮</button>
    </div>
</template>
<script>
/**1.toRef */
// import {ref} from 'vue'
// import {toRef} from 'vue'
import {toRefs} from 'vue'
export default {
    setup(){
        let obj = {name:'ccc',age:18}
        /**
         ref(obj.name) -> ref(ccc)
         ->reactive({value:ccc})
         */
        // ref->复制
        // let state = ref(obj.name)
        //tuRef的本质 ->引用
        /**
         * ref和toRef的区别
         * ref->复制,修改响应式数据不会影响以前的数据
         * toRef-> 引用,修改响应式的数据会影响以前的数据
         * ref-> 数据发生改变,界面自动更新
         * toRef -> 数据发生改变,界面不会自动更新
         *  toRef应用场景 :
         * 如果想让响应式数据和以前的关联起来,并且更新响应式数据之后还不想更新UI,那么就可以使用t oRef
         */
        // let state = toRef(obj,'name')
        let state = toRefs(obj)
        function mybtn(){
            // state.value = 'cwl'
            state.name.value = 'cwl'
            state.age.value = '666'
            /**
             结论:如果利用ref将某一个对象中的属性变成响应式的数据
                我们修改响应式的数据是不会影响到原始数据的
             */
            /**
             结论: 如果用toRef将某一个对象中的属性变成响应式的数据
                   我们修改响应式的数据是会影响到原始数据的
                   如果响应式的数据是通过toRef创建的,那么修改了数据并不会触发UI界面的更新
             */
            console.log(state)
            console.log(obj)           
        }
    return {state,mybtn}       
    }
}
</script>
<style>

</style>