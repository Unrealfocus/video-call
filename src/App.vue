<script>
import axios from "axios";
export default {
  name: "App",

  async mounted() {
    let user = localStorage.getItem("@user");
    user = JSON.parse(user);
    if (user) {
      this.$store.commit("updateUser", user);
      //check if user token is still valid
      await axios
        .get("", {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        })
        .then((res) => {})
        .catch((err) => {});
    }
  },
};
</script>

<template>
  <router-view />
</template>
