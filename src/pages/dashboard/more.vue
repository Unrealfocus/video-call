<template>
  <section class="block h-screen p-5 mb-10 lg:hidden">
    <p class="text-xl font-semibold font-poppins">More</p>
    <div class="flex items-center gap-5 mt-10">
      <!-- <img src="/Man.svg" alt="" />
       -->
      <div class="bg-[#295F2D] p-[40px] rounded-2xl">
        <p class="text-[#fff] font-[700] font-poppins">
          {{ this.$store.state.user.first_name.charAt(0)
          }}{{ this.$store.state.user.last_name.charAt(0) }}
        </p>
      </div>
      <div class="grid-col-1">
        <p class="text-sm font-semibold font-poppins">
          {{ this.$store.state.user.first_name }}
          {{ this.$store.state.user.last_name }}
        </p>
        <button
          @click="this.$router.push('/dashboard/account-settings')"
          class="flex items-center text-left bg-appGreen300 rounded-lg py-2 px-7 font-medium gap-2 font-poppins text-xs text-[#FFFFFF] mt-5"
        >
          <img src="/basil_edit-outline.svg" alt="" />
          edit profile
        </button>
      </div>
    </div>
    <section>
      <router-link to="/dashboard/account-settings">
        <div
          class="flex items-center gap-5 pb-3 text-base font-medium md:mx-auto pt-9 font-poppins"
        >
          <img src="/setting2.svg" alt="" /><span>Account Settings</span>
        </div>
      </router-link>
      <hr />
      <router-link to="/dashboard/faq">
        <div
          class="flex items-center gap-5 pb-3 mx-auto text-base font-medium pt-9 font-poppins"
        >
          <img src="/setting2.svg" alt="" />
          <span> FAQ </span>
        </div>
      </router-link>

      <hr />
    </section>

    <button
      class="border rounded-lg border-[#295F2D] w-full text-[#295F2D] gap-2 py-2 mt-16 flex justify-center items-center font-poppins font-bold text-base"
    >
      <img src="/logoutcurve.svg" alt="" />
      <p>Sign out</p>
    </button>
  </section>
</template>

<script setup></script>
