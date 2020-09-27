<template>
    <div>
        <h1>markRaw</h1>
        <p>{{state}}</p>
        <button @click="mybtn">按钮</button>
    </div>
</template>
<script>
import { reactive ,markRaw} from 'vue'
export default {
    setup(){
        let obj = {name:'ccc',age:18}
        obj = markRaw(obj)
        let state =reactive(obj)
        function mybtn(){
            state.name ='cwl';

        }
        return {state,mybtn}
    }
}
</script>
<style>

</style>