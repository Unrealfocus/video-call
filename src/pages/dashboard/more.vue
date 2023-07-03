<template>
  <section class="block h-screen p-5 mb-10 lg:hidden">
    <p class="text-xl font-semibold font-poppins">More</p>
    <div class="flex items-center gap-5 mt-10">
      <img src="/Man.svg" alt="" />
      <div class="grid-col-1">
        <!-- David Sampson -->
        <p class="text-sm font-semibold font-poppins">
          {{
            this.$store.state.user.first_name +
            " " +
            this.$store.state.user.last_name
          }}
        </p>
        <button
          class="flex items-center text-left bg-appGreen300 rounded-lg py-2 md:px-4 font-medium gap-2 font-poppins text-sm md:text-xs text-[#FFFFFF] mt-5"
        >
          <router-link to="/dashboard/account-settings" class="flex gap-2 px-2">
            <img src="/basil_edit-outline.svg" alt="" />
            edit profile
          </router-link>
        </button>
      </div>
    </div>
    <section>
      <div
        class="flex items-center gap-10 pb-3 text-base font-medium md:mx-auto pt-9 font-poppins"
      >
        <router-link to="/dashboard/security-settings" class="flex gap-4"
          ><img src="/setting2.svg" alt="" /> Account Settings</router-link
        >
      </div>
      <hr />
      <div
        class="flex items-center pb-3 mx-auto text-base font-medium pt-9 font-poppins"
      >
        <router-link to="" class="flex gap-4"
          ><img src="/setting2.svg" alt="" /> FAQ</router-link
        >
      </div>

      <hr />
    </section>

    <button
      class="border rounded-lg border-[#295F2D] md:px-28 px-24 text-[#295F2D] gap-2 py-2 mt-14 md:mt-16 flex items-center font-poppins font-bold md:text-base"
    >
      <img src="/logoutcurve.svg" alt="" />
      Sign out
    </button>
  </section>
</template>

<script setup></script>
