<script>
import Sidebar from "../../components/dashboardLayout/sidebar.vue";
import Topbar from "../../components/dashboardLayout/mobileDashboardHeader.vue";
export default {
  name: "securitySettings",
  components: {
    Sidebar,
    Topbar,
  },
};
</script>

<template>
  <section>
    <p class="text-xl font-semibold font-poppins text-[#C8C8C8]">
      Password Setting
    </p>
    <div>
      <p class="pt-4 text-sm font-semibold font-poppins">Current Password</p>
      <input
        class="mt-4 app-input"
        type="password"
        name="current password"
        id="current password"
        placeholder="thedesignerofficial1@gmail.com"
      />
    </div>

    <div>
      <p class="pt-4 text-sm font-semibold font-poppins">New Password</p>
      <input
        class="mt-4 app-input"
        type="password"
        name="new password"
        id="new password"
        placeholder="!Fav90800000000"
      />
    </div>

    <div>
      <p class="pt-4 text-sm font-semibold font-poppins">
        Confirm New Password
      </p>
      <input
        class="mt-4 app-input"
        type="password"
        name="confirm new password"
        id="confirm new password"
        placeholder="************"
      />
    </div>

    <section class="pt-10">
      <p class="text-xl font-semibold font-poppins text-[#C8C8C8]">
        Email address setting
      </p>

      <div>
        <p class="pt-4 text-sm font-semibold font-poppins">
          Current Email Address
        </p>
        <input
          class="mt-4 app-input"
          autocomplete="email"
          disabled
          :value="email"
        />
      </div>

      <div>
        <p class="pt-4 text-sm font-semibold font-poppins">New Email Address</p>
        <input
          class="mt-4 app-input"
          type="email"
          name="new email adresss"
          id="new email address"
          autocomplete="email"
          placeholder="PhelTakon1234@gmail.com"
          v-model="newEmail"
        />
      </div>

      <div>
        <p class="pt-4 text-sm font-semibold font-poppins">
          Confirm New Email Address
        </p>
        <input
          class="mt-4 app-input"
          type="email"
          name="confirm new email adresss"
          id="confirm new email address"
          autocomplete="email"
          placeholder="PhelTakon1234@gmail.com"
          v-model="confirmEmail"
        />
      </div>
    </section>
    <section class="flex justify-center mt-20">
      <button
        class="px-20 py-3 text-base font-semibold text-white rounded-xl bg-appGreen200 font-poppins"
      >
        Save Changes
      </button>
    </section>
  </section>
</template>
