import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    user: {},
    token: "",
    bucket: {},
    alert: {
      active: false,
      type: "",
      comment: "error, success, warning", // error, success, warning
      message: "",
    },
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
    showAlert(state, payload) {
      state.alert.active = true;
      state.alert.type = payload.type || "";
      state.alert.comment = payload.comment || "";
      state.alert.message = payload.message || "";
    },
    hideAlert(state) {
      state.alert.active = false;
    },
    logout(state) {
      state.user = {};
      state.token = "";
    },
  },
  actions: {},
  modules: {},
});
