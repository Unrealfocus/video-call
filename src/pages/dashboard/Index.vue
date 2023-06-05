<template>
  <div class="flex h-screen">
    <div class="w-[300px]">
      <Sidebar />
    </div>
    <div class="w-[90%] xl:w-[1280px] mx-auto"></div>
  </div>
</template>
<script>
import Sidebar from "../../components/layout/sidebar.vue";
export default {
  name: "index",
  components: {
    Sidebar,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
