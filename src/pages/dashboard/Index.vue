<template>
  <div class="flex h-screen bg-[#F9F9F9]">
    <div class="hidden lg:block w-[20%]">
      <Sidebar />
    </div>
    <div class="w-full">
      <Topbar />

      //page content goes here
    </div>
  </div>
</template>
<script>
import Sidebar from "../../components/dashboardLayout/sidebar.vue";
import Topbar from "../../components/dashboardLayout/topbar.vue";
export default {
  name: "index",
  components: {
    Sidebar,
    Topbar,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
