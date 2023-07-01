import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    user: {},
    token: "",
    bucket: {},
  },
  mutations: {
    manageBucket(state, payload) {
      state.bucket = payload.bucket;
    },
    updateUser(state, payload) {
      state.user = payload.user;
      state.token = payload.token;
    },
    updateSelectedUser(state, payload) {
      state.selectedUser = payload;
    },
    updateSelectedSub(state, payload) {
      state.selectedSub = payload;
    },
  },
  actions: {},
  modules: {},
});
