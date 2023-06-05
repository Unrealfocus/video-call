import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    user: {},
    token: '',
  },
  mutations: {
    updateUser(state, payload) {
      state.user = payload.user
      state.token = payload.token
    },
    updateSelectedUser(state, payload) {
      state.selectedUser = payload
    },
    updateSelectedSub(state, payload) {
      state.selectedSub = payload
    },
  },
  actions: {},
  modules: {},
})
