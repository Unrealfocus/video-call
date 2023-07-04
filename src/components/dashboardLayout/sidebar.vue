<template>
  <div class="w-full h-screen overflow-hidden border bg-[#fff]">
    <div class="flex w-[80%] mx-auto py-5 items-center space-x-[15px]">
      <div class="hamburger">
        <img src="/ham.svg" />
      </div>
      <div class="logo">
        <img src="/logo1.svg" />
      </div>
    </div>

    <!-- //top links  -->
    <div class="py-[72px]">
      <!-- selected item  -->
      <!-- <div class="w-full bg-[#295F2D] rounded-xl">
        <div class="w-[97%] bg-[#eef3ef] rounded">
          <div class="flex w-[80%] mx-auto space-x-[22px] py-[20px]">
            <img class="" src="/smallCheck.svg" />
            <p class="text-[#295F2D] font-poppins font-[600] text-[18px]">
              dashboard
            </p>
          </div>
        </div>
      </div> -->

      <div class="w-full rounded-xl">
        <div v-for="item in topLinks" class="w-[97%] rounded">
          <div
            class="flex w-[80%] mx-auto space-x-[22px] py-[20px] cursor-pointer"
          >
            <img class="" :src="item.icon" />
            <router-link :to="item.target"
              ><p class="text-[#484848] font-poppins font-[600] text-[18px]">
                {{ item.title }}
              </p></router-link
            >
          </div>
        </div>
      </div>
    </div>

    <!-- //buttom links  -->
    <div class="py-[32px] border-t-2">
      <div v-for="item in downLinks" class="w-full rounded-xl">
        <div class="w-[97%] rounded">
          <div
            class="flex w-[80%] mx-auto space-x-[22px] py-[20px] cursor-pointer"
          >
            <img class="" :src="item.icon" />

            <p class="text-[#484848] font-poppins font-[600] text-[18px]">
              {{ item.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      topLinks: [
        {
          icon: "/category.svg",
          title: "Dashboard",
          target: "/dashboard",
        },
        {
          icon: "/setting3.svg",
          title: "Manage",
          target: "/dashboard/manage",
        },
        {
          icon: "/receipt-text.svg",
          title: "Transaction History",
          target: "/dashboard/transactions",
        },
        {
          icon: "/la_donate.svg",
          title: "Donation",
          target: "/buckets",
        },
        {
          icon: "/setting2.svg",
          title: "Account Setting",
          target: "/dashboard/account-settings",
        },
      ],
      downLinks: [
        {
          icon: "/help.svg",
          title: "Help",
          target: "/dashboard/help",
        },
        {
          icon: "/logoutcurve.svg",
          title: "Logout",
          target: "/dashboard/transaction",
        },
      ],
    };
  },
};
</script>
