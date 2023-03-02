<template>
    <div>
        <h5>普通修改:{{count}}</h5>
        <button @click="handle1">普通+1</button>
        <button @click="handle2">全局+1</button>
        <button @click="handle2N">全局+10</button>
        <button @click="handle3">全局缓存5秒+1</button>

    </div>
</template>

<script>
export default {
    name: 'addition',
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        handle1() { // 只应用本页面
            this.count++
            console.log(this.count);
        },
        handle2() {
            this.$store.commit('addition/add')
        },
        handle2N() {
            this.$store.commit('addition/addN', 10)
        },
        handle3() {
            this.$store.dispatch('addition/AsyncAdd')
        }
    }
}
</script>