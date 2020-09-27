<template>
    <div>
        <h1>shallowRef</h1>
    </div>
</template>
<script>
 /*1.toRow */
//  import {ref} from 'vue'
//  import {reactive} from 'vue'
import {shallowRef} from 'vue'
import {shallowReactive} from 'vue'
export default {
    setup(){
        //ref ->reactive 
        //ref(10)-> reactive({value:10})
        //shallowRef -> shallowReactive
        //shallowRef(10) -> shallowReactive({value:10})
        //如果是通过shallowRef创建的数据,它监听的是.value的变化
        //因为底层本质上value才是第一层
        let state1 =shallowRef({    
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
        let state2 =shallowReactive({ 
            value:{
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
            }   
            
        })
        return {state1,state2}
    }
}
</script>
<style>

</style>