<template>
    <div class="content">
        <h1>递归监听</h1>
        <p>{{state.a}}</p>
        <p>{{state.gf.b}}</p>
        <p>{{state.gf.f.c}}</p>
        <p>{{state.gf.f.s.d}}</p>
        <button @click="mybtn">按钮</button>
    </div>
</template>
<script>
/*
1.递归监听
默认情况下,无论是通过ref还是reactive都是递归监听

2.递归监听存在的问题
如果数据量较大非常消耗性能

3.非递归监听

4.使用场景
一般情况下我们使用ref和reactive即可
只有在需要监听的数据量比较大的时候,我们才使用shallowRef/shollowReactive
*/
// import {reactive} from 'vue'
// import {ref} from 'vue'
// import {shallowReactive} from 'vue'
import {shallowRef,triggerRef} from 'vue'
export default {
    setup(){
        // let state =shallowReactive({
        let state =shallowRef({    
            a:'a',
            gf:{
                b:'b',
                f:{
                    c:'c',
                    s:{
                        d:'d'
                    }
                }

            }
        })
        function mybtn(){
        // state.value ={    
        //     a:'1',
        //     gf:{
        //         b:'2',
        //         f:{
        //             c:'3',
        //             s:{
        //                 d:'4'
        //             }
        //         }

        //     }
        // }

            // state.value.a = '1';
            // state.value.gf.b = '2';
            // state.value.gf.f.c = '3';
            state.value.gf.f.s.d = '4';
            //注意点:Vue3 只提供了triggerRef的方法,没有提供triggerReactive的方法
            // 所以如果reactive类型的数据,那么是无法主动触发界面更新的
            triggerRef(state)
            // 注意点:如果是通过shallowRef创建数据,
            // 那么Vue监听的是.value的变化,并不是第一层的变化 只有state被包装
            console.log(state) 
            console.log(state.value) 
            console.log(state.value.gf) 
            console.log(state.value.gf.f) 
            console.log(state.value.gf.f.s) 

            // state.a = '1';
            // state.gf.b = '2';
            // state.gf.f.c = '3';
            // state.gf.f.s.d = '4';

            // console.log(state) 
            // console.log(state.gf) 
            // console.log(state.gf.f) 
            // console.log(state.gf.f.s) 
        }
        return {state,mybtn}
    }
}
</script>
<style lang="scss" scoped>
.content{
    position:absolute;
    left:50%;
    top: 50%;
    transform:translate(-50%,-50%);
}
</style>