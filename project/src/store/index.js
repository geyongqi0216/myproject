import Vue from "vue"
import Vuex from 'vuex'
import addition from './modules/Addition.js'


Vue.use(Vuex)
const store = new Vuex.Store({
    // state,  // 提供唯一的公共数据源
    // mutations,  // 用于变更State中的数据（不能进行异步操作）
    // actions,    // 用于处理异步操作（只有通过触发Mutations的方式才能间接变更State数据，不能直接修改State中数据）
    // getters,    // 用于对State中的数据进行加工处理形成新的数据（state中的数据发生改变，Getter中的数据也跟着发生改变） 
    modules: {  // 内部仍然可以继续存放一些子store,内部再有五种属性，模块化vuex
        addition,
    }  
})

export default store