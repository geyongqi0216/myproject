<template>
  <div id="app">
    <addition></addition>
    <p>----------------------------</p>
    <p>最终计数结果是：{{$store.state.addition.count}}</p>
    <p>可复用题目：{{$store.getters['addition/showNum']}}</p>
  </div>
</template>

<script>
import addition from './components/Addition.vue'
export default {
  name: 'App',
  components: {
    addition,
  },
}
</script>

