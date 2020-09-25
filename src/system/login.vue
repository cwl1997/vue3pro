<template>
    <div class="content">
       <div class="loginFrom">
           <a-input v-model:value="value" placeholder="test" />
       </div>
    </div>
</template>
<script>
import { ref,reactive } from 'vue'
export default {
    //组合api入口函数
    setup(){
        //ref函数只能监听简单类型的变化,不能监听复杂类型的变化(对象/数组)
        const value =ref(0)
        let state = reactive({
            stus:[
                {id:1,name:'aa'},
                {id:2,name:'bb'},
                {id:3,name:'cc'}
            ]
        })
        //在组合api中定义的方法/变量.如果想要在外部使用必须return出去
        return{
            value,
            state 
        }
    }
}
</script>
<style lang="scss" scope>
.content{
    width: 100%;
    height: 100%;
    .loginFrom{
        width: 480px;
        height: 280px;
    //    border: 1px solid #000;
        border-radius: 10px;
        box-shadow:0px 0px 6px 5px rgba(0,0,0,0.2);
        position:absolute;
        left:50%;
        top: 50%;
        transform:translate(-50%,-50%);
    }
}
</style>