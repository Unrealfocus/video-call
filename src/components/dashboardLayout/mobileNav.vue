<template>
  <main class="">
    <section class="flex">
      <div v-for="item in topLinks" class="w-[97%] rounded">
        <div class="w-[80%] mx-auto space-x-[22px] py-[20px] cursor-pointer">
          <img class="" :src="item.icon" />
          <router-link :to="item.target"
            ><p class="text-[#484848] font-poppins font-[600] text-[18px]">
              {{ item.title }}
            </p></router-link
          >
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      topLinks: [
        {
          icon: '/category.svg',
          title: '',
          target: '/dashboard/dashboard',
        },
        {
          icon: '/setting3.svg',
          title: '',
          target: '/dashboard/manage',
        },
        {
          icon: '/receipt-text.svg',
          title: '',
          target: '/dashboard/transactions',
        },
        {
          icon: '/la_donate.svg',
          title: '',
          target: '/dashboard/donations',
        },
        {
          icon: '/setting2.svg',
          title: '',
          target: '/dashboard/account-settings',
        },
      ],
    }
  },
}
</script>
