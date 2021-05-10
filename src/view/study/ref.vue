<template>
    <div>
        <h1>ref</h1>
        <!-- 
            注意点:
            如果是通过ref创建的数据,那么在template中使用的时候不用通过.value来获取
            因为Vue会自动给我们添加.value
         -->
         <!-- 
             ref和reactive的区别
             如果在template里使用的是ref类型的数据,那么Vue会自动帮我们添加.value
              如果在template里使用的是reactive类型的数据,那么Vue不会自动帮我们添加.value

              Vue是如何决定是否需要自动添加.value
              Vue在解析数据之前,会自动判断这个数据是否是ref类型的
              如果是就自动添加.value
              如果不是就不自动添加.value

              Vue是如何判断当前的数据是否是ref类型的
              通过当前数据的__V_isRef来判断的
              如果有这个私有的属性,并且取值为true,那么就代表是一个ref类型的数据 
          -->
        <h1>{{age}}</h1>
        <h1>{{testnum}}</h1>
        <button @click="mybtn">打印</button>
    </div>
</template>
<script>
/* 
1.什么是ref?
    -ref和reactive一样,也是用来实现响应式数据的方法
    -由于reactive必须传递一个对象,所以导致在企业开发中
     如果我们只想让某个变量实现响应式的时候会非常麻烦
     所以Vue3就给我们提供了ref方法,实现对简单值的监听
2.ref的本质:
    -ref底层的本质其实还是reactive
     系统会自动根据我们给的ref传入的值将它转换成
     ref(xx) -> reactive({value:xx})
3.ref的注意点:
    -在Vue中使用ref的值不用通过value获取
    -在js中使用ref的值必须通过value获取
*/
/*ref和reactive 的区别 */
import {isRef,isReactive} from 'vue'
import { reactive , watch,ref, unref} from 'vue'
// import {ref} from 'vue'
export default {
    setup(){
        // let state = reactive({
        //     age:18
        // })
        /**
         ref本质:
         ref的本质还是reactive
         当我们给ref函数传递一个值之后,ref函数底层会自动将ref转换巍reactive
         ref(18)->reactive({value:18})
         */
        // let age = ref(18)
        let age = ref(18)
        let num = 555
        let testnum = ref(88)
        function mybtn(){
            // state.age = 666;
            // age=666
            // console.log(isRef(age));
            // console.log(isReactive(age));
            age.value += 1   
            testnum.value += 1        
        }
        watch([age,testnum],([newage,newnum],[oldage,oldnum])=>{
            console.log('old',oldage,oldnum)
            console.log('newVal',newage,newnum)
        })
        // watch(testnum,(newval,oldval)=>{
        //     console.log('old',oldval)
        //     console.log('newVal',newval)
        // })
        return {age,mybtn,testnum} 
    }
}
</script>
<style>

</style>