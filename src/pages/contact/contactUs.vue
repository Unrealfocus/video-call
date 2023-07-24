<script setup>
import Navbar from "../../components/layout/navabar_test.vue";
import Footer from "../../components/layout/footer.vue";
</script>
<template>
  <Navbar class="" />

  <main class="bg-[##FFFFFF] mt-5">
    <section
      class="w-[90%] xl:w-[1280px] mb-10 mx-auto grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 items-center bg-[url('/Vector2.svg')]"
    >
      <section class="py-10 md:mt-20">
        <h1
          class="flex px-4 py-2 font-bold bg-appGreen100 text-appGreen200 w-max rounded-xl font-poppins"
        >
          Support
        </h1>
        <h2
          class="my-12 mt-4 text-4xl font-extrabold font-poppins md:text-5xl lg:text-6xl"
        >
          Get in Touch.
        </h2>
        <p class="text-sm font-medium font-poppins sm:text-base">
          If you need help, you can chat with us on the app or send a message to
          hello@puthand.com.
        </p>
        <div
          class="w-[100%] bg-[#F9F9F9] flex gap-3 px-5 py-3 pb-5 rounded-lg mt-5"
        >
          <img src="/mail1.svg" alt="" />
          <p class="py-2 text-base font-medium font-poppins">
            <span class="text-base font-bold font-poppins">Email address:</span>
            hello@puthand.com
          </p>
        </div>
      </section>
      <figure class="relative">
        <img class="" src="/Lady1.svg" alt="hero" />
      </figure>
    </section>
    <section class="pt-4 pb-12 bg-appGray100 lg:relative">
      <!-- md:py-[110px]  lg:py-[100px]     -->

      <div
        class="bg-[white] pt-4 pb-10 mb-10 px-[10px] lg:px-[34px] rounded-3xl"
      >
        <div class="w-[90%] xl:w-[1280px] mx-auto">
          <div class="pt-20 text-5xl font-extrabold font-poppins">
            Send us an Instant <br />
            Message!
          </div>

          <div class="flex flex-col gap-5 mt-10 mb-5 lg:flex-row">
            <input
              class="app-input"
              type="text"
              name="firstName"
              id="firstName"
              autocomplete="given-name"
              placeholder="First Name"
            />
            <input
              class="app-input"
              type="text"
              name="lastName"
              id="lastName"
              autocomplete="family-name"
              placeholder="Last Name"
            />
          </div>
          <label>
            <span class="mb-3 text-base font-semibold font-poppins">
              Phone Number</span
            >
            <input
              class="mb-5 app-input"
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              autocomplete="phoneNumber"
              placeholder="phoneNumber"
            />
          </label>
          <div class="space-y-[20px]">
            <p class="font-[600] text-[18px]">How can we help you?</p>
            <div class="border rounded-2xl w-full border-[#000] p-3">
              <textarea
                class="w-full bg-transparent border-none outline-none"
                rows="4"
              ></textarea>
            </div>
          </div>

          <button
            class="gap-10 text-center bg-[#F8B83A] text-[#242424] py-4 px-10 flex w-[285px] mt-7 rounded-xl"
          >
            <div class="mt-2 text-base font-bold font-poppins">
              Send an email
            </div>
            <img class="" src="/arrow-right.svg" alt="" />
          </button>
        </div>
      </div>
      <Footer class=""></Footer>
    </section>
  </main>
</template>
