import store from "../store/index"


// Function to update the alert state
export function updateAlert(type, comment, message) {
    const payload = {
      type,
      comment,
      message,
    };
    store.commit("showAlert", payload);
  }