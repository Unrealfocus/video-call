<template>
  <nav class="flex justify-between bg-white w-[95%] py-5 px-3 items-center">
    <router-link
      :to="item.target"
      v-for="(item, index) in topLinks"
      :key="index"
      @click="toggle(item)"
      :class="[item == current ? 'bg-[#EAEFEA] rounded-lg text-[#295F2D]' : '']"
      class="flex flex-col items-center p-1">
      <img :src="item.icon" />
      <span>{{ item.title }}</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    toggle(item) {
      this.current = item;
    },
  },
  data() {
    return {
      current: "",
      topLinks: [
        {
          icon: "/home-2.svg",
          title: "Home ",
          target: "/dashboard",
          current: false,
        },
        {
          icon: "/document-text.svg",
          title: "Manage",
          target: "/dashboard/manage",
          current: false,
        },
        {
          icon: "/clock.svg",
          title: "History",
          target: "/dashboard/transactions",
          current: false,
        },

        // {
        //   icon: "/card-pos.svg",
        //   title: "Donation",
        //   target: "/dashboard/donations",
        // },

        {
          icon: "/element-equal.svg",
          title: "More",
          target: "/dashboard/more",
          current: false,
        },
      ],
    };
  },
};
</script>
