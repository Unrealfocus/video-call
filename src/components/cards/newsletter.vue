<template>
  <section class="p-8 pt-4 pb-10 bg-appGray100 lg:relative">
    <section class="items-center justify-center pb-10 mx-auto">
      <section
        class="bg-[#FEF4C3] p-9 w-[90%] md:w-2/3 mx-auto rounded-2xl inset-x-0 top-0 mt-6 space-y-5">
        <p
          class="text-center font-poppins font-extrabold text-3xl text-[#333333]">
          We Would Like To Send You Emails
        </p>
        <p
          class="text-center font-poppins font-normal text-base text-[#242424] pt-2">
          Sign up to our newsletters to know what we are up to and what’
          trending
        </p>
        <form @submit.prevent="submitNewsletterForm">
          <div class="relative" id="email">
            <div class="absolute top-[0.9rem] left-3">
              <img src="/sms.svg" alt="" />
            </div>
            <input type="hidden" name="u" value="0e139eebd98f0154312029341" />
            <input
              type="email"
              id="email-address-icon"
              class="bg-[#FFFFFF] rounded-lg block w-full pl-10 p-2.5 outline-none"
              v-model="email"
              placeholder="Enter your email" />
            <button
              class="inset-y-1 right-0 flex md:mx-0 mx-auto items-center px-5 text-[white] w-[90px] md:mr-2 bg-[#939393] rounded-lg h-[36px] lg:absolute mt-3 lg:mt-0 hover:bg-green-500"
              action="input">
              Submit
            </button>
          </div>
        </form>
      </section>
    </section>
  </section>
</template>
<script>
export default {
  name: "Newsletter",
  methods: {
    submitNewsletterForm() {
      alert("we have sent it!!");
    },
  },
};
</script>
