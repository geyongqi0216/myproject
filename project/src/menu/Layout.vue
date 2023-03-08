<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="headerMenu"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          nav 1
        </a-menu-item>
        <a-menu-item key="2">
          nav 2
        </a-menu-item>
        <a-menu-item key="3">
          nav 3
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :default-selected-keys="siderMenu"
          :default-open-keys="['sub1']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu v-for="items in siderDates" :key="items.key">
            <span slot="title"><a-icon type="user" />{{items.value}}</span>
            <a-menu-item v-for="i in items.chilren" :key="i.key" @click.native="testClick(i.key, i.path)">{{i.value}}</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
const siderDates = [
    {
        key: 1,
        value: 'home',
        chilren: [
            {
                key: '1-1',
                value: '1',
                path: '/home'
            },
            {
                key: '1-2',
                value: '2',
                path: '/vuexDemo'
            },
            {
                key: '1-3',
                value: '3'
            },
            {
                key: '1-4',
                value: '4'
            }
        ]
    },
    {
        key: 2,
        value: 'about',
        chilren: [
            {
                key: '2-1',
                value: '1',
                path: '/about'
            },
            {
                key: '2-2',
                value: '2'
            },
            {
                key: '2-3',
                value: '3'
            },
            {
                key: '2-4',
                value: '4'
            }
        ]
    }
]
export default {
  data() {
    return {
      siderDates,
      collapsed: false,
      headerMenu: ['1'],
      siderMenu: ['1'],
      
    };
  },
  watch: {
    siderMenu: function(val) {
        console.log(val);
    }
  },
  methods: {
    testClick(key, path) {
        console.log(key,path);
        this.$router.push({
            path,
        }, () => {})
    }
  }
};
</script>

<style>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
