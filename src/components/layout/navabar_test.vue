<template>
  <section
    class="flex shadow-aboutContainer"
    :class="[toggleNav == true ? 'bg-[#f9f9f9]' : 'bg-[#fff]']">
    <!-- class="flex"
    :class="[toggleNav == true ? 'bg-[#f9f9f9]' : 'bg-[#fff]']" -->
    <header
      class="w-[90%] xl:w-[1280px] mx-auto flex items-center justify-between flex-wrap py-[20px]">
      <div class="flex items-center mr-6 text-white flex-no-shrink">
        <img src="/logo1.svg" alt="logo" />
      </div>
      <!-- center block  -->
      <div
        class="hidden lg:flex space-x-[40px] font-[500] text-[16px] font-poppins">
        <div class="hover:font-[800]">
          <router-link to="/">Home</router-link>
        </div>

        <div class="flex gap-1 hover:font-[800]" @click="toggleDropdown">
          <p>Fundraiser Category</p>
          <img src="/arrow-down.svg" alt="" />
        </div>

        <div class="hover:font-[800]">
          <router-link to="/works">How it works</router-link>
        </div>
        <div class="hover:font-[800]">
          <router-link to="/about-us">About us</router-link>
        </div>
      </div>

      <div class="flex space-x-[43px] font-poppins font-[700] items-center">
        <div class="">
          <button
            class="hidden lg:block hover:bg-[#BDEED1] text-[#295F2D] px-[23px] py-[11px] border-2 border-[#295F2D] rounded-full">
            class="hidden lg:block hover:bg-[#BDEED1] text-[#295F2D] px-[23px]
            py-[11px] border-2 border-[#295F2D] rounded-full">
            <router-link v-if="!this.$store.state.user.user_id" to="/sign-in"
              >Sign in</router-link
            >
            <router-link v-if="this.$store.state.user.user_id" to="/dashboard"
              >Dashboard</router-link
            >
          </button>
        </div>
        <div class="">
          <button
            @click="this.$router.push('/buckets')"
            :class="[toggleNav == true ? 'md:hidden' : '']"
            class="hidden md:block bg-[#295F2D] rounded-full px-[23px] py-[11px] text-white">
            class="hidden md:block bg-[#295F2D] rounded-full px-[23px] py-[11px]
            text-white"> Let's Put Hands
          </button>
        </div>
        <div
          @click="navDrop"
          class="lg:hidden"
          :class="[toggleNav == true ? 'hidden' : '']">
          :class="[toggleNav == true ? 'hidden' : '']">
          <img src="/ham.svg" />
        </div>
        <div
          @click="navDrop"
          :class="[toggleNav == true ? ' ' : 'hidden']"
          class="lg:hidden font-[500] text-[14px] bg-[#e9e9e9] px-[12px] py-[10px] rounded-full">
          close x
        </div>
      </div>
    </header>
  </section>
  <div
    :class="[toggleNav == true ? ' ' : 'hidden']"
    class="lg:hidden tab-mobile-drop bg-[#f9f9f9] h-screen">
    <div class="w-[90%] mx-auto">
      <div class="text-[16px] font-[500] font-poppins space-y-[30px]">
        <div><router-link to="/">Home</router-link></div>
        <div><router-link to="#">Fundraiser Category</router-link></div>
        <div><router-link to="/works">How it works</router-link></div>
        <div><router-link to="/about-us">About us</router-link></div>

        <div class="py-[23px] space-y-[23px]">
          <div
            class="border-2 border-[#295F2D] rounded-full text-center py-[12px] text-[#295F2D] font-[700] font-poppins">
            <router-link v-if="!this.$store.state.user.user_id" to="/sign-in"
              >Sign in</router-link
            >
            <router-link v-if="this.$store.state.user.user_id" to="/dashboard"
              >Dashboard</router-link
            >
            <!-- Sign in -->
          </div>

          <div
            class="bg-[#295F2D] rounded-full text-center py-[12px] text-white font-[700] font-poppins">
            <router-link to="/buckets"> Let's Put Hands </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="isDropdownOpen"
    class="inline-flex p-6 mt-2 bg-white shadow rounded-3xl h-[371px]"
    x-transition:enter="transition ease-out duration-200"
    x-transition:enter-start="opacity-0 transform scale-90"
    x-transition:enter-end="opacity-100 transform scale-100"
    x-transition:leave="transition ease-in duration-150"
    x-transition:leave-start="opacity-100 transform scale-100"
    x-transition:leave-end="opacity-0 transform scale-90">
    <div class="z-10 flex gap-6">
      <div>
        <ul>
          <li>medical</li>
          <li>Non-profit</li>
          <li>Emergency</li>
          <li>Education</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>medical</li>
          <li>Non-profit</li>
          <li>Emergency</li>
          <li>Education</li>
        </ul>
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
      isDropdownOpen: false,
    };
  },
  methods: {
    navDrop() {
      this.toggleNav = !this.toggleNav;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>
