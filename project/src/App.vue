<template>
  <div id="app">
    <addition></addition>
    <p>----------------------------</p>
    <substraction></substraction>
  </div>
</template>

<script>
import addition from './components/Addition.vue'
import substraction from './components/Substraction.vue'


export default {
  name: 'App',
  components: {
    addition,
    substraction
  }
}
</script>

