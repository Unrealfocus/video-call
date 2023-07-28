<script>
import axios from "axios";
import RepeatEmailEntry from "../../components/auth/reset/RepeatEmailEntry.vue"
import ResetPassword from "../../components/auth/reset/resetPassword.vue";
import SetPassword from "../../components/auth/reset/setPassword.vue";
import ResetDone from "../../components/auth/reset/ResetDone.vue";
export default {
  name: "login",
  components :{
    RepeatEmailEntry,
    ResetPassword,
    SetPassword,
    ResetDone,
},
  data() {
    return {
      ResetPin: "",
      email:"",
      password:"",
      confirmPassword:"",
      loading: false,
      seePassword: false,
      LoginFlow:"ResetPasswordEntry",
    };
  },
  methods: {
   async SendResetPin(){
      if(this.ResetPin.length<=5){
        this.loading = false;
        let error ="incorrect pin";
            swal(error, {
              icon: "error",
              buttons: false,
              timer: 3000,
              class: "font-poppins font-[700] text-[300px]",
            });
      }
      else {

        const Link = import.meta.env.VITE_APP_ENGINE + " ";
        this.loading = true;
        await axios
          .post(Link, {
            pin: this.ResetPin,
          })
          .then((res) => {
            this.loading = false;
            this.LoginFlow="SetPassword"
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
   async SendResetEmail(){
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
        const Link = import.meta.env.VITE_APP_ENGINE + " ";
        this.loading = true;
        await axios
          .post(Link, {
            email: this.email,
          })
          .then((res) => {
            this.loading = false;
             this.LoginFlow="ResetPasswordEntry";
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
   async SendNewPassword(){
      if((this.password.length<=5) || (this.password != this.confirmPassword)
      ){
        this.loading = false;
        let error ="incorrect pin";
            swal(error, {
              icon: "error",
              buttons: false,
              timer: 3000,
              class: "font-poppins font-[700] text-[300px]",
            });
      }
      else {
        const loginLink = import.meta.env.VITE_APP_ENGINE + "forgetpassword";
        this.loading = true;
        await axios
          .post(loginLink, {
            email: this.email,
          })
          .then((res) => {
            this.loading = false;
            this.LoginFlow="ResetDone"
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
};
</script>
<template>
  <main class="bg-[#B7B7B7] lg:h-screen">
    
    <div v-if="LoginFlow=='ResetPasswordEntry'">
      <ResetPassword  
        @SendResetPin="SendResetPin"
        :loading="loading"
        v-model="ResetPin"
        @set-Login-Flow="(n) =>LoginFlow=n"
      />
    </div>
    <div  v-if="LoginFlow=='RepeatEmailEntry'">
      <RepeatEmailEntry
        @SendResetEmail="SendResetEmail"
        :loading="loading"
        v-model="email"
        @set-Login-Flow="(n) =>LoginFlow=n"
      />
    </div>
    <div  v-if="LoginFlow=='SetPassword'">
      <SetPassword
        @SendNewPassword="SendNewPassword"
        :loading="loading"
        v-model:password="password"
        v-model:confirmPassword="confirmPassword"
        @set-Login-Flow="(n) =>LoginFlow=n"
      />
    </div>
    <div  v-if="LoginFlow=='ResetDone'">
      <ResetDone
        @signin="signin"
        :loading="loading"
      />
    </div>
  </main>
</template>
