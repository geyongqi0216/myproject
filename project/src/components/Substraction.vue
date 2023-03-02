<template>
    <div>
        <h5>普通修改:{{count}}</h5>
        <button @click="handle1">普通-1</button>
        <button @click="btnhandle">全局-1</button>
        <button @click="btnhandle2N">全局-10</button>
        <button @click="btnhandle3">全局缓存5秒-1</button>

    </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
    name: 'substraction',
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        handle1() { // 只应用本页面
            this.count--
        },
        ...mapMutations(['substraction/sub',  'substraction/subN']),
        ...mapActions(['substraction/AsyncSub']),
        btnhandle(){
            this['substraction/sub']()
        },
        btnhandle2N(){
            this['substraction/subN'](10)
        },
        btnhandle3(){
            this['substraction/AsyncSub']()
        }
    }
}
</script>