<template>
  <nav class="flex justify-between bg-white w-[400px] py-5 px-3 items-center">
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
  @apply bg-[#EAEFEA] rounded-lg px-2 text-[#295F2D];
}
</style>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      topLinks: [
        {
          icon: "/home-2.svg",
          title: "Home ",
          target: "/dashboard",
        },
        {
          icon: "/document-text.svg",
          title: "Manage",
          target: "/dashboard/manage",
        },
        {
          icon: "/clock.svg",
          title: "History",
          target: "/dashboard/transactions",
        },
        {
          icon: "/card-pos.svg",
          title: "Donation",
          target: "/buckets",
        },
        {
          icon: "/element-equal.svg",
          title: "More",
          target: "/dashboard/more",
        },
      ],
    };
  },
};
</script>
