<script>
import statesWithLGA from "../../assets/statesWithLGA";
import axios from "axios";
export default {
  name: "signUp",
  data() {
    return {
      loading: false,
      currentStep: 1,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      states: [],
      activeState: "",
      activeLGA: [],
    };
  },
  created() {
    Object.keys(statesWithLGA).forEach((key) => {
      this.states.push(key);
    });
  },
  methods: {
    async submit() {
      const registerLink = import.meta.env.VITE_APP_ENGINE + "register";
      this.loading = true;
      await axios
        .post(registerLink, {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          phone: this.phone,
          password: this.password,
          password_confirmation: this.confirmPassword,
        })
        .then((res) => {
          this.loading = false;
          //update user state
          console.log("user", res.data.user);
          console.log("token", res.data.token);
          const payload = res.data.data;

          this.$store.commit("updateUser", payload);

          localStorage.setItem("@user", JSON.stringify(res.data));

          this.currentStep++;
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

    nextSlide() {
      if (this.currentStep < 4) {
        this.currentStep++;
      }
    },
    prevSlide() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    LGAs() {
      Object.entries(statesWithLGA).forEach(([key, value]) => {
        if (key.toLowerCase() === this.activeState.toLowerCase()) {
          this.activeLGA = value;
        }
      });
    },
    handleStateChange(e) {
      this.activeState = e.target.value;
      console.log(typeof statesWithLGA);
    },
  },
  watch: {
    activeState() {
      this.LGAs();
    },
  },
};
</script>

<template>
  <section class="bg-[#B7B7B7] lg:h-screen">
    <div class="flex items-center justify-center lg:h-screen">
      <div class="bg-[#fff] w-[820px] rounded-lg px-[45px] py-[50px]">
        <div :class="[currentStep == 1 ? '' : 'hidden']" class="form">
          <div>
            <h2
              class="text-lg font-bold font-poppins md:text-xl lg:text-2xl text-appGreen400">
              What ‘s your name
            </h2>
            <label
              class="block my-5 text-xl font-bold font-poppins text-appGreen400"
              >We're here to guide you every step of the way.</label
            >

            <div class="flex flex-col gap-5 lg:flex-row">
              <input
                class="app-input"
                type="text"
                name="firstName"
                id="firstName"
                autocomplete="given-name"
                v-model="firstName"
                placeholder="First Name" />
              <input
                class="app-input"
                type="text"
                v-model="lastName"
                placeholder="Last Name" />
            </div>

            <input
              class="my-4 app-input"
              type="password"
              v-model="password"
              placeholder="Password" />

            <input
              class="app-input"
              type="password"
              v-model="confirmPassword"
              placeholder="Confirm Password" />
            <input
              class="mt-4 app-input"
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              placeholder="Email"
              v-model="email" />
            <input
              class="mt-4 app-input"
              type="email"
              autocomplete="phone"
              placeholder="Phone Number"
              v-model="phone" />
          </div>

          <span class="flex items-baseline mt-8">
            <input
              type="checkbox"
              class="w-5 rounded-full"
              name="terms"
              id="terms" />
            <span class="block ml-2 text-[#999999] font-poppins text-sm">
              By accepting, I agree to comply with data regulations as outlined
              in the Puthand Privacy Policy, granting my consent for the
              collection and processing of my personal data.
            </span>
          </span>

          <span class="flex gap-1 font-medium font-inter text-appGreen400"
            ><p>Got an account?</p>
            <button
              @click="this.$router.push('/sign-in')"
              class="underline text-appGreen200"
              type="button">
              Sign In
            </button></span
          >
        </div>
        <!-- second slide  -->
        <div :class="[currentStep == 2 ? '' : 'hidden']" class="form">
          <section class="text-center">
            <img src="/mail.svg" class="mx-auto" alt="" />
            <p class="text-3xl font-extrabold font-poppins my-9">
              Please verify your <br />
              email
            </p>
            <p class="text-base font-medium font-poppins">
              you’re almost there! We sent an email to
            </p>
            <p class="my-6 text-2xl font-extrabold font-poppins">
              <!-- davidisampson16@gmail.com -->
              {{ email }}
            </p>
            <p class="text-base font-medium font-poppins">
              Just click on the link in that email to complete your sign-up..
              <br />
              if you don’t see it, you may need to
              <span class="text-sm font-extrabold font-poppins"
                >check your spam</span
              >
              <br />
              folder.
            </p>
            <p class="my-5 text-base font-medium font-poppins">
              Still can’t find the email? No problem.
            </p>

            <button class="px-20 py-3 text-white bg-appGreen200 rounded-2xl">
              Resend Verification email
            </button>

            <span
              class="flex gap-1 my-5 font-medium font-inter text-appGreen400"
              ><p>Got an account?</p>
              <button class="underline text-appGreen200" type="button">
                Sign In
              </button></span
            >
          </section>
        </div>

        <!-- success slide  -->
        <div
          :class="[currentStep == 3 ? '' : 'hidden']"
          class="form space-y-[140px] py-[100px]">
          <div class="flex items-center justify-center">
            <img class="" src="/bigCheck.svg" />
          </div>
          <div class="space-y-[30px]">
            <p class="text-center font-poppins font-[700] text-[24px]">
              Successfully Completed
            </p>
            <div
              class="flex justify-center rounded-full text-[#fff] py-3 text-[14px] px-10">
              <button
                class="bg-[#295F2D] text-center cursor-pointer font-[700] font-poppins py-[11px] text-[#fff] rounded-2xl px-40">
                Done
              </button>
            </div>
          </div>
        </div>

        <div class="justify-between pt-16">
          <div class="next-button">
            <div
               :class="[currentStep == 3 ? 'hidden' : '']"
              @click="submit()"
              class="bg-[#295F2D] text-center cursor-pointer font-[700] font-poppins py-[11px] text-[#fff] rounded-2xl px-6">
              {{ loading == true ? "Loading..." : "Submit" }}
 
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
