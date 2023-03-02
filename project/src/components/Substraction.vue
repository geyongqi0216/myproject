<template>
    <div>
        <h5>{{message}}:{{count}}</h5>
        <button @click="handle1">-1</button>
    </div>
</template>

<script>
export default {
    name: 'addition',
    data() {
        return {
            count: 0,
            message: '计数的第二种方式的值为'
        }
    },
    methods: {
        handle1() {
            this.count--
            console.log(this.count);
        }
    }
}
</script>