<template>
  <div id="vuex-demo">
    <addition></addition>
    <p>----------------------------</p>
    <substraction></substraction>
    <p>最终计数结果是：{{$store.state.addition.count}}</p>
    <p>最终计数结果是：{{count}}</p>
    <p>可复用题目：{{$store.getters['addition/showNum']}}</p>
    <p>可复用题目：{{showNum}}</p>
    <p>----------------------------</p>
  </div>
</template>

<script>
import addition from './Addition.vue'
import substraction from './Substraction.vue'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'vuexDemo',
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

