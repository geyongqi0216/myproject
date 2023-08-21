import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import vuetify from './plugins/vuetify'
import 'ant-design-vue/dist/antd.less'
import router from './router'
import store from './store'
import axios from 'axios'
import VueSession from 'vue-session'
import VueCookies from 'vue-cookies'
import './css/font/font.css'
import api from './api/index.js'
import './css/common-style.css'
const utils = require('@/utils/utils')
const syncrequests = require('@/utils/syncrequests')
const paginationRequest = require('@/utils/paginationRequest')

Vue.prototype.$axios = axios
Vue.prototype.$utils = utils
Vue.prototype.$syncrequests = syncrequests
Vue.prototype.$paginationReq = paginationRequest.paginationReq
Vue.prototype.$paginationRequest = paginationRequest
Vue.prototype.$api = api
Vue.config.productionTip = false

Vue.prototype.$cancel = function() {
  let cancelArr = window.axiosCancel
  cancelArr.forEach((cancelFunc, index) => {
    cancelFunc('Request cancelled')
    delete window.axiosCancel[index]
  })
}

router.beforeEach((to, from, next) => {
  // Reset global pagination
  store.state.global.page = store.state.global.pagination.current = store.state.global.defaultPageCurrent
  store.state.global.pageSize = store.state.global.pagination.pageSize = store.state.global.defaultPageSize
  store.state.global.pagination.total = store.state.global.defaultTotal

  if (to.meta.requireLogin) {
    if (store.state.user.user_login_success || 
        (sessionStorage['vue-session-key'] && sessionStorage['vue-session-key'].indexOf('windows_auth_token') !== -1)) {
      let cancelArr = window.axiosCancel
      cancelArr = cancelArr || []
      cancelArr.forEach((cancelFunc, index) => {
        cancelFunc('Request cancelled')
        delete window.axiosCancel[index]
        console.log('Previous request cancelled')
      })
      next()
    } else {
      if (to.fullPath && to.fullPath.indexOf('logout') === -1) {
        sessionStorage.setItem('old_path', to.path)
        next({
          path: '/redirect'
        })
      } else {
        next()
      }
    }
  } else {
    next()
  }
})

Vue.use(Antd).use(VueSession).use(VueCookies)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  components: {
    App
  }
}).$mount('#app')
