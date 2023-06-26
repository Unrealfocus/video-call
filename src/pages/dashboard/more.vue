<template>
  <section class="p-5 mb-10">
    <p class="text-xl font-semibold font-poppins">More</p>
    <div class="flex items-center gap-5 mt-10">
      <img src="/Man.svg" alt="" />
      <div class="grid-col-1">
        <p class="text-sm font-semibold font-poppins">David Sampson</p>
        <button
          class="flex items-center text-left bg-appGreen300 rounded-lg py-2 px-7 font-medium gap-2 font-poppins text-xs text-[#FFFFFF] mt-5"
        >
          <img src="/basil_edit-outline.svg" alt="" />
          edit profile
        </button>
      </div>
    </div>
    <section>
      <div
        class="flex items-center gap-2 pb-3 mx-auto text-base font-medium pt-9 font-poppins"
      >
        <router-link to="/dashboard/account-settings"
          ><img src="/setting2.svg" alt="" /> Account Settings</router-link
        >
      </div>
      <hr />
      <div
        class="flex items-center pb-3 mx-auto text-base font-medium pt-9 font-poppins"
      >
        <router-link to=""><img src="/setting2.svg" alt="" /> FAQ</router-link>
      </div>

      <hr />
    </section>

    <button
      class="border rounded-lg border-[#295F2D] px-28 text-[#295F2D] gap-2 py-2 mt-16 flex items-center font-poppins font-bold text-base"
    >
      <img src="/logoutcurve.svg" alt="" />
      Sign out
    </button>
  </section>
</template>

<script setup></script>
