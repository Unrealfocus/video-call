<script>
import axios from "axios";
import Login from "../../components/auth/login.vue";
import ForgetPassword from "../../components/auth/forgetPassword.vue";

export default {
  name: "login",
  components :{
     Login,
     ForgetPassword
  },
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      seePassword: false,
      LoginFlow:"signin",
    };
  },
  methods: {
    async signin() {
      const loginLink = import.meta.env.VITE_APP_ENGINE + "login";
      this.loading = true;
      await axios
        .post(loginLink, {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          this.loading = false;
          //update user state

          const payload = res.data.data;

          this.$store.commit("updateUser", payload);

          localStorage.setItem("@user", JSON.stringify(res.data.data));

          this.$router.push("/dashboard");
        })
        .catch((err) => {
          this.loading = false;
          let error = err.response.data.message;
          swal(error, {
            icon: "error",
            buttons: false,
            timer: 3000,
            class: "font-poppins font-[700] text-[300px]",
          });
        });
    },
  async SendResetEmail() {
      if(this.email.length<=0){
        this.loading = false;
        let error ="please type in your Email";
            swal(error, {
              icon: "error",
              buttons: false,
              timer: 3000,
              class: "font-poppins font-[700] text-[300px]",
            });
      }
      else {
        const Link = import.meta.env.VITE_APP_ENGINE + "forgetpassword";
        this.loading = true;
        await axios
          .post(Link, {
            email: this.email,
          })
          .then((res) => {
            this.loading = false;
            this.$router.push("/resetpassword");
          })
          .catch((err) => {
            this.loading = false;
            let error = err.response.data.message;
            swal(error, {
              icon: "error",
              buttons: false,
              timer: 3000,
              class: "font-poppins font-[700] text-[300px]",
            });
          });
      }
   },
}
}
</script>
<!-- w-[820px] px-[45px] py-[50px] -->
<template>
  <main class="bg-[#B7B7B7] lg:h-screen">
    <div v-if="LoginFlow=='signin'">
      <Login  
        @signin="signin"
        :loading="loading"
        @set-Login-Flow="(n) =>LoginFlow=n"
      />
    </div>
    <div  v-if="LoginFlow=='ForgetPassword'">
      <ForgetPassword 
        @SendResetEmail="SendResetEmail"
        :loading="loading"
        v-model="email"
        @set-Login-Flow="(n) =>LoginFlow=n"
      />
    </div>
  </main>
</template>
