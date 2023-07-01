<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      loading: false,
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
  },
};
</script>
<!-- w-[820px] px-[45px] py-[50px] -->
<template>
  <main class="bg-[#B7B7B7] lg:h-screen">
    <div class="flex items-center justify-center lg:h-screen">
      <div class="bg-[#fff] w-[820px] rounded-lg px-[45px] py-[50px]">
        <div class="form">
          <h1 class="pb-4 font-poppins font-extrabold text-4xl text-[#484848]">
            Welcome Back
          </h1>
          <p class="pb-7 font-inter font-medium text-base text-[#484848]">
            We're here to guide you’re back
          </p>
          <section>
            <input
              class="mb-4 app-input"
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              placeholder="Email address"
              v-model="email"
            />
            <input
              class="mt-4 app-input"
              type="password"
              name="password"
              id="password"
              autocomplete="password"
              placeholder="Password"
              v-model="password"
            />
          </section>
          <div class="py-7 font-poppins font-semibold text-xs text-[#295F2D]">
            Forgotten Password?
          </div>
          <div>
            <span class="flex">
              <span class="flex gap-1 font-medium font-inter text-appGreen400"
                ><p>No account?</p>
                <button
                  @click="this.$router.push('/signup')"
                  class="underline text-appGreen200"
                  type="button"
                >
                  Sign Up
                </button></span
              >
            </span>
            <div class="mt-7">
              <div class="mx-auto">
                <button
                  type="button"
                  class="w-full rounded-2xl bg-[#2A5E2A] border-[1px] border-[#fff] text-[#fff] py-3 text-[14px] m-3"
                  @click="signin"
                >
                  <span class="text-base font-bold font-poppins">
                    {{ loading == true ? "loading..." : "Sign In" }}</span
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
