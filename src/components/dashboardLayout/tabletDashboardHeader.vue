<template>
  <section
    class="hidden sm:flex shadow-aboutContainer lg:hidden"
    :class="[toggleNav == true ? 'bg-[#f9f9f9]' : 'bg-[#fff]']"
  >
    <header
      class="w-[90%] xl:w-[1280px] mx-auto flex items-center justify-between flex-wrap py-[20px]"
    >
      <div class="flex items-center mr-6 text-white flex-no-shrink">
        <img src="/logo1.svg" alt="logo" />
      </div>
      <!-- center block  -->
      <div
        class="hidden lg:hidden space-x-[40px] font-[500] text-[16px] font-poppins"
      >
        <div class=""><router-link to="/">Home</router-link></div>

        <div class="">
          <router-link to="/contact-us">Fundraiser Category</router-link>
        </div>
        <div class="">How it works</div>
        <div class=""><router-link to="/about-us">About us</router-link></div>
      </div>

      <div class="flex space-x-[43px] font-poppins font-[700] items-center">
        <div class="">
          <button
            class="hidden lg:hidden text-[#295F2D] px-[23px] py-[11px] border-2 border-[#295F2D] rounded-full"
          >
            <router-link to="/signUp">Sign in</router-link>
          </button>
        </div>
        <div class="">
          <button
            :class="[toggleNav == true ? 'md:hidden' : '']"
            class="hidden md:block bg-[#295F2D] rounded-full px-[23px] py-[11px] text-white"
          >
            Let's Put Hands
          </button>
        </div>
        <div
          @click="navDrop"
          class="lg:hidden"
          :class="[toggleNav == true ? 'hidden' : '']"
        >
          <img src="/ham.svg" />
        </div>
        <div
          @click="navDrop"
          :class="[toggleNav == true ? ' ' : 'hidden']"
          class="lg:hidden font-[500] text-[14px] bg-[#e9e9e9] px-[20px] py-[10px] rounded-full"
        >
          close x
        </div>
      </div>
    </header>
  </section>
  <div
    :class="[toggleNav == true ? ' ' : 'hidden']"
    class="lg:hidden tab-mobile-drop bg-[#f9f9f9] h-screen"
  >
    <div class="w-[90%] mx-auto">
      <div class="text-[16px] font-[500] font-poppins space-y-[30px]">
        <div><router-link to="/">Home</router-link></div>
        <div><router-link to="#">Fundraiser Category</router-link></div>
        <div><router-link to="/works">How it works</router-link></div>
        <div><router-link to="/about-us">About us</router-link></div>

        <div class="py-[23px] space-y-[23px]">
          <div
            class="border-2 border-[#295F2D] rounded-full text-center py-[12px] text-[#295F2D] font-[700] font-poppins"
          >
            Sign in
          </div>
          <div
            class="bg-[#295F2D] rounded-full text-center py-[12px] text-white font-[700] font-poppins"
          >
            Let's Put Hands
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar_test",
  data() {
    return {
      toggleNav: false,
    };
  },
  methods: {
    navDrop() {
      this.toggleNav = !this.toggleNav;
    },
  },
};
</script>
