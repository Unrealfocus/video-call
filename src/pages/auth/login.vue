<script></script>
<!-- w-[820px] px-[45px] py-[50px] -->
<template>
  <main class="bg-[#B7B7B7] lg:h-screen">
    <div class="flex items-center justify-center lg:h-screen">
      <div
        class="bg-[#fff] rounded-3xl pt-3 pb-10 w-[700px] px-[45px] py-[50px]"
      >
        <div class="p-10">
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
            />
            <input
              class="mt-4 app-input"
              type="password"
              name="password"
              id="password"
              autocomplete="password"
              placeholder="Password"
            />
          </section>
          <div class="py-7 font-poppins font-semibold text-xs text-[#295F2D]">
            Forgotten Password?
          </div>
          <div>
            <span class="flex">
              <input
                type="checkbox"
                class="w-5 h-5 rounded-full"
                name="terms"
                id="terms"
              />
              <span class="block ml-2 text-[#999999] font-poppins text-sm">
                By accepting, I agree to comply with data regulations as
                outlined in the Puthand Privacy Policy, granting my consent for
                the collection and processing of my personal data.
              </span>
            </span>
            <div class="flex mt-7">
              <div class="flex items-center mx-auto">
                <button
                  type="button"
                  class="flex gap-2 rounded-full bg-[#2A5E2A] border-[1px] border-[#fff] text-[#fff] py-3 text-[14px] px-10 m-3"
                >
                  <span class="text-base font-bold font-poppins">Sign In </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
