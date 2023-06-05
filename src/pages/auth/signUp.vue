<script setup>
import { ref, watchEffect, watch } from "vue";
import statesWithLGA from "../../assets/statesWithLGA";

const states = ref([]);
const activeState = ref("");
const activeLGA = ref([]);

Object.keys(statesWithLGA).forEach((key) => {
  states.value.push(key);
});

const LGAs = () =>
  Object.entries(statesWithLGA).forEach(([key, value]) => {
    if (key.toLowerCase() === activeState.value.toLowerCase()) {
      activeLGA.value = value;
    }
  });

const handleStateChange = (e) => {
  activeState.value = e.target.value;
  console.log(typeof statesWithLGA);
};
watchEffect(() => {
  LGAs();
});

const activeIndex = ref(1);
const isTrue = ref(false);

const handleToggle = (e) => {
  e.preventDefault();
  isTrue.value = !isTrue.value;
};
</script>

<template>
  <main class="grid grid-cols-1 sm:grid-cols-2 min-h-screen bg-[#f9f9f9]">
    <figure class="h-[100vh] hidden sm:block w-full relative">
      <img
        src="/signup.svg"
        alt="hero"
        class="h-full w-full object-cover"
        draggable="false" />
      <!-- <button
        :onclick="handleToggle"
        class="bg-appGreen200 absolute top-10 right-10 z-50 text-white py-3 px-6 rounded-full my-5 hover:scale-110 duration-300 transition-all hover:bg-green-950"
        type="button"
      >
        Next
      </button> -->
      <img
        src="/green-bg.svg"
        draggable="false"
        class="absolute z-20 h-full w-full object-cover top-0 bottom-0 left-0 right-0" />

      <!-- <img
        src="/signup.svg  "
        alt="hero"
        class="h-full rounded-br-3xl"
        draggable="false"
      />
      <img
        src="/green-bg.svg"
        draggable="false"
        class="absolute z-20 h-full top-0 bottom-0 left-0 right-0 rounded-br-3xl"
      /> -->
    </figure>

    <!-- 
SIGN UP SECTION
 -->
    <section class="h-[100vh] overflow-hidden p-10">
      <div
        :class="{ '-translate-y-[110%] hidden': isTrue }"
        class="bg-white px-6 pt-10 pb-5 rounded-3xl shadow-aboutContainer transition-all duration-500 h-full overflow-y-scroll no-scrollbar">
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
            By accepting, I agree to comply with data regulations as outlined in
            the Puthand Privacy Policy, granting my consent for the collection
            and processing of my personal data.
          </span>
        </span>

        <div class="flex justify-end">
          <button
            :onclick="handleToggle"
            class="bg-appGreen200 text-white py-3 px-6 rounded-full my-5 hover:scale-110 duration-300 transition-all hover:bg-green-950"
            type="button">
            Next
          </button>
        </div>

        <span class="flex gap-1 font-inter font-medium text-appGreen400"
          ><p>Got an account?</p>
          <button class="text-appGreen200 underline" type="button">
            Sign In
          </button></span
        >
      </div>

      <div
        :class="{ '-translate-y-7   ': isTrue }"
        class="px-6 pt-10 pb-5 block rounded-3xl translate-y-[110%] shadow-aboutContainer transition-all duration-500 bg-white mt-11 h-full overflow-y-scroll no-scrollbar">
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

          <div class="flex justify-between pt-16">
            <button
              :onclick="handleToggle"
              class="rounded-2xl py-3 px-6 my-5 border border-[#295F2D]">
              Back
            </button>
            <button
              class="bg-appGreen200 text-white py-3 px-6 rounded-2xl my-5 hover:scale-110 duration-300 transition-all hover:bg-green-950">
              Next
            </button>
          </div>

          <span class="flex gap-1 font-inter font-medium text-appGreen400 my-5"
            ><p>Got an account?</p>
            <button class="text-appGreen200 underline" type="button">
              Sign In
            </button></span
          >
        </section>
      </div>
    </section>
  </main>
</template>
