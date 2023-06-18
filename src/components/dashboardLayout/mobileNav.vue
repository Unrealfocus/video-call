<template>
  <!-- <nav class="flex">
    <div v-for="item in topLinks" class="w-[97%] rounded">
      <div class="w-[80%] mx-auto space-x-[22px] py-[20px] cursor-pointer">
        <router-link :to="item.target">
          <img class="bg-red-400" :src="item.icon" />
          <p class="text-[#484848] font-poppins font-[600] text-sm">
            {{ item.title }}
          </p></router-link
        >
      </div>
    </div>
  </nav> -->
  <nav class="flex justify-between bg-white w-[390px] py-5">
    <router-link
      :to="item.target"
      v-for="(item, index) in topLinks"
      :key="index"
      class="flex flex-col items-center px-3 py-1"
    >
      <img :src="item.icon" />
      <span>{{ item.title }}</span>
    </router-link>
  </nav>
</template>

<style scoped>
a.router-link-active {
  @apply bg-[#EAEFEA] rounded-lg text-[#295F2D];
}
</style>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      topLinks: [
        {
          icon: "/category.svg",
          title: "Home ",
          target: "/dashboard/dashboard",
        },
        {
          icon: "/setting3.svg",
          title: "Manage",
          target: "/dashboard/manage",
        },
        {
          icon: "/receipt-text.svg",
          title: "Transaction",
          target: "/dashboard/transactions",
        },
        {
          icon: "/la_donate.svg",
          title: "Donation",
          target: "/dashboard/donations",
        },
        {
          icon: "/setting2.svg",
          title: "Settings",
          target: "/dashboard/account-settings",
        },
      ],
    };
  },
};
</script>
