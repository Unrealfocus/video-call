<template>
  <div class="relative">
    <div class="flex bg-[#F9F9F9]">
      <div class="hidden lg:block w-[20%]">
        <Sidebar />
      </div>
      <div class="md:w-[20%]"></div>
      <div class="w-full">
        <Topbar class="hidden" />
        <main class="lg:w-[85%] mx-auto hidden">
          <router-view> </router-view>
        </main>
        <div class="py-[50px]"></div>
      </div>
    </div>
    <div class="md:hidden fixed bottom-10 z-50 bg-[#fff] w-full">
      <MobileNav />
    </div>
  </div>
</template>
<script>
import Sidebar from '../../components/dashboardLayout/sidebar.vue'
import Topbar from '../../components/dashboardLayout/topbar.vue'
import MobileNav from '../../components/dashboardLayout/mobileNav.vue'

export default {
  name: 'index',
  components: {
    Sidebar,
    Topbar,
    MobileNav,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
