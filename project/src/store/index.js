import Vue from 'vue'
import Vuex from 'vuex'
import VueSession from 'vue-session'
import VueCookies from 'vue-cookies'
import getters from './getters'

Vue.use(Vuex).use(VueCookies).use(VueSession)

const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules,
  getters
})

export default store
