<template>
  <div id="app">
    <addition></addition>
    <p>----------------------------</p>
    <substraction></substraction>
    <p>最终计数结果是：{{$store.state.addition.count}}</p>
    <p>最终计数结果是：{{count}}</p>
    <p>可复用题目：{{$store.getters['addition/showNum']}}</p>
    <p>可复用题目：{{showNum}}</p>

  </div>
</template>

<script>
import addition from './components/Addition.vue'
import substraction from './components/Substraction.vue'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    addition,
    substraction
  },
  computed: {
    ...mapState('substraction',['count']),
    ...mapGetters('substraction',['showNum'])
  }
}
</script>

