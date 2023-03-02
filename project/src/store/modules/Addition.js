export default {
  namespaced: true, //开启命名空间
  state:{
    count: 0,
  },
  mutations:{
    add(state) {
      state.count++
    },
    addN(state, step) {
      state.count += step
    }
  },
  actions:{
    AsyncAdd(context) {
      setTimeout(() => {
        context.commit('add')
      }, 3000)
    }
  },
  getters:{
    showNum: (state) => {
      return '最终计数结果是' + state.count
    }
  }
}