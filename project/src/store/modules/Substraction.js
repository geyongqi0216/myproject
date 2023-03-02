export default {
    namespaced: true,
    state:{
        count: 0
    },
    mutations:{
      sub(state) {
        state.count--
      },
      subN(state, step) {
        state.count -= step
      }

    },
    actions:{
      AsyncSub(context) {
        setTimeout(() => {
          context.commit('sub')
        }, 3000)
      }
    },
    getters:{
      showNum: (state) => {
        return '最终计数结果是' + state.count
      }
    }
  }