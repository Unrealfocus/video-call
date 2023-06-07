<script setup>
import Navbar from '../../components/layout/navabar_test.vue'
import Footer from '../../components/layout/footer.vue'
</script>
<template>
  <Navbar class="" />

  <main class="bg-[##FFFFFF] mt-5">
    <section
      class="w-[90%] xl:w-[1280px] mb-10 mx-auto grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 items-center bg-[url('/public/Vector2.svg')]"
    >
      <section class="md:mt-20 py-10">
        <h1
          class="bg-appGreen100 text-appGreen200 py-2 px-4 flex w-max rounded-xl font-bold font-poppins"
        >
          Support
        </h1>
        <h2
          class="my-12 font-poppins font-extrabold text-4xl md:text-5xl lg:text-6xl mt-4"
        >
          Get in Touch.
        </h2>
        <p class="font-poppins font-medium text-sm sm:text-base">
          If you need help, you can chat with us on the app or send a message to
          help@puthands.com.
        </p>
        <div
          class="w-[100%] bg-[#F9F9F9] flex gap-3 px-5 py-3 pb-5 rounded-lg mt-5"
        >
          <img src="/mail1.svg" alt="" />
          <p class="py-2 font-poppins text-base font-medium">
            <span class="font-poppins text-base font-bold">Email address:</span>
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
      <div class="bg-[white] pt-4 pb-10 px-[10px] lg:px-[34px] rounded-3xl">
        <div class="font-poppins font-extrabold text-5xl pt-20">
          Send us an Instant <br />
          Message!
        </div>

        <div class="flex flex-col lg:flex-row gap-5 mt-10 mb-5">
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
          <span class="mb-3 font-poppins font-semibold text-base">
            Phone Number</span
          >
          <input
            class="app-input mb-5"
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            autocomplete="phoneNumber"
            placeholder="phoneNumber"
          />
        </label>
        <label>
          <span class="font-poppins font-semibold text-base"
            >Tell your Story?</span
          >
          <input
            class="app-input h-[150px]"
            type="text"
            name="Hello everyone my name is David Sampson and i'm fundrasing for......."
            id="Hello everyone my name is David Sampson and i'm fundrasing for......."
            placeholder="Hello everyone my name is David Sampson and i'm fundrasing for......."
          />
        </label>

        <button
          class="gap-10 text-center bg-[#F8B83A] text-[#242424] py-4 px-10 flex w-[285px] mt-7 rounded-xl"
        >
          <div class="font-bold font-poppins text-base mt-2">Send an email</div>
          <img class="" src="arrow-right.svg" alt="" />
        </button>
      </div>
      <Footer class=""></Footer>
    </section>
  </main>
</template>
