import { getUser } from '@/api/modules/user'

const state = {
  basic_auth: {},
  windows_auth_token: {},
  iam_token: null,
  user_token: null,
  user_login_success: false,
  current_username: null,
  current_full_user_name: null,
  membership: null,
  superuser: false,
  user_role: null,
  user_email: null,
}

const mutations = {
  userAuthRegister (state, newAuth) {
    state.basic_auth = newAuth
  },
  setWindowsToken (state, windowsToken) {
    state.windows_auth_token = windowsToken
  },
  setIamToken (state, iamToken) {
    state.iam_token = iamToken
  },
  setUserToken (state, userToken) {
    state.user_token = userToken
  },
  setLoginSuccess (state, requirebool) {
    state.user_login_success = requirebool
  },
  setCurrentUser (state, username) {
    state.current_username = username
  },
  updateCurrentFullUsername (state, userName) {
    state.current_full_user_name = userName
  },
  setMembership (state, membership) {
    state.membership = membership
  },
  setSuperuser (state, superuser) {
    state.superuser = superuser
  },
  setUserRole (state, role){
    state.user_role = role
  },
  setUserEmail (state, userEmail) {
    state.user_email = userEmail
  },
}

const actions = {
  getUser ({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUser(state.current_username).then(data => {
        commit('setLoginSuccess', true)
        commit('updateCurrentFullUsername', data.results[0].last_name + ', ' + data.results[0].first_name)
        commit('setCurrentUser', data.results[0].username)
        commit('setMembership', data.results[0].membership)
        commit('setSuperuser', data.results[0].is_superuser)
        resolve()
      }).catch(error => {
        commit('setLoginSuccess', false)
        reject(error)
      })
    })
  },
  logOut ({commit, state}) {
    commit('setLoginSuccess', false)
    commit('userAuthRegister', '')
    commit('updateCurrentFullUsername', null)
    commit('setCurrentUser', null)
    commit('setMembership', null)
    commit('setUserRole', null)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}


