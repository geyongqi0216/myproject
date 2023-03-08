<template>
  <div id="app">
    <layout-vue></layout-vue>
    <!-- <router-link to="/home" >首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-view></router-view> -->
  </div>
</template>
 
<script>
import LayoutVue from './menu/Layout.vue'
export default {
  name: 'App',
  components: {
    'layout-vue': LayoutVue
  }
}
</script>