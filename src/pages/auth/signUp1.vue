<script>
import statesWithLGA from "../../assets/statesWithLGA";
export default {
  name: "signUp",
  data() {
    return {
      currentStep: 1,

      forWho: "",
      forWhoList: [
        { icon: "", target: "Yourself" },
        { icon: "", target: "A Friend" },
        { icon: "", target: "Charity" },
      ],
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
    setForWho(item) {
      this.forWho = item;
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
  <section class="bg-[#B7B7B7] min-h-screen">
    <div class="flex items-center justify-center">
      <div class="bg-[#fff] w-[820px] rounded-lg px-[45px] py-[50px] mt-5 mb-5">
        <div :class="[currentStep == 1 ? '' : 'hidden']" class="form">
          <div>
            <h2
              class="font-poppins text-lg md:text-xl lg:text-2xl font-bold text-appGreen400">
              What ‘s your name
            </h2>
            <label
              class="block my-5 font-poppins font-bold text-xl text-appGreen400"
              >We're here to guide you every step of the way.</label
            >

            <div class="flex flex-col lg:flex-row gap-5">
              <input
                class="app-input"
                type="text"
                name="firstName"
                id="firstName"
                autocomplete="given-name"
                placeholder="First Name" />
              <input
                class="app-input"
                type="text"
                name="lastName"
                id="lastName"
                autocomplete="family-name"
                placeholder="Last Name" />
            </div>

            <input
              class="app-input my-4"
              type="password"
              name="password"
              id="password"
              autocomplete="new-password"
              placeholder="Password" />

            <input
              class="app-input"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              autocomplete="new-password"
              placeholder="Confirm Password" />
            <input
              class="app-input mt-4"
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              placeholder="Email"
              v-model="email" />
          </div>
          <h3
            class="my-5 font-poppins font-bold text-base md:text-lg lg:text-xl text-appGreen400">
            Where are you located?
          </h3>

          <section class="flex flex-col lg:flex-row gap-5 text-appGreen400">
            <select
              :value="activeState"
              :onchange="handleStateChange"
              class="app-input"
              name="state"
              id="state">
              <option value="">Select your state</option>
              <option
                v-for="(state, index) in states"
                :key="index"
                :value="state">
                {{ state }}
              </option>
            </select>

            <!-- CITY -->
            <select class="app-input" name="state" id="state">
              <option value="">Select your city</option>
              <option
                v-for="(cities, index) in activeLGA"
                :key="index"
                :value="cities">
                {{ cities }}
              </option>
            </select>
          </section>

          <span class="flex items-baseline mt-8">
            <input
              type="checkbox"
              class="w-5 h-5 rounded-full"
              name="terms"
              id="terms" />
            <span class="block ml-2 text-[#999999] font-poppins text-sm">
              By accepting, I agree to comply with data regulations as outlined
              in the Puthand Privacy Policy, granting my consent for the
              collection and processing of my personal data.
            </span>
          </span>

          <span class="flex gap-1 font-inter font-medium text-appGreen400"
            ><p>Got an account?</p>
            <button class="text-appGreen200 underline" type="button">
              Sign In
            </button></span
          >
        </div>
        <!-- second slide  -->
        <div :class="[currentStep == 2 ? '' : 'hidden']" class="form">
          <section class="text-center">
            <img src="/mail.svg" class="mx-auto" alt="" />
            <p class="font-poppins font-extrabold text-3xl my-9">
              Please verify your <br />
              email
            </p>
            <p class="font-poppins font-medium text-base">
              you’re almost there! We sent an email to
            </p>
            <p class="font-extrabold font-poppins text-2xl my-6">
              <!-- davidisampson16@gmail.com -->
              {{ email }}
            </p>
            <p class="font-medium font-poppins text-base">
              Just click on the link in that email to complete your sign-up..
              <br />
              if you don’t see it, you may need to
              <span class="font-extrabold text-sm font-poppins"
                >check your spam</span
              >
              <br />
              folder.
            </p>
            <p class="font-poppins font-medium text-base my-5">
              Still can’t find the email? No problem.
            </p>

            <button class="bg-appGreen200 text-white py-3 px-20 rounded-2xl">
              Resend Verification email
            </button>

            <span
              class="flex gap-1 font-inter font-medium text-appGreen400 my-5"
              ><p>Got an account?</p>
              <button class="text-appGreen200 underline" type="button">
                Sign In
              </button></span
            >
          </section>
        </div>

        <!-- success slide  -->
        <div
          :class="[currentStep == 3 ? '' : 'hidden']"
          class="form space-y-[140px] py-[100px]">
          <div class="flex justify-center items-center">
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

        <div class="flex justify-between pt-16">
          <div :class="[currentStep == 3 ? 'hidden' : '']" class="">
            <button
              @click="prevSlide()"
              class="border-2 border-[#295F2D] text-[#295F2D] rounded-2xl px-[23px] py-[12px] font-[700] text-[16px]">
              Back
            </button>
          </div>
          <div class="next-button">
            <div
              :class="[currentStep == 3 ? 'hidden' : '']"
              @click="nextSlide()"
              class="bg-[#295F2D] text-center cursor-pointer font-[700] font-poppins py-[11px] text-[#fff] rounded-2xl px-6">
              {{ currentStep > 2 ? "Done" : "Next" }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
