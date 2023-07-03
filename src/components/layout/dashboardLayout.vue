<template>
  <div class="relative">
    <div class="flex bg-[#F9F9F9]">
      <div class="hidden lg:block w-[20%]">
        <Sidebar />
      </div>
      <!-- <div class="md:w-[20%]"></div> -->
      <div class="w-full">
        <Topbar />
        <MobileDashboardHeader class="md:hidden" />
        <TabletDashboardHeader class="sm:hidden" />
        <main class="p-5 mx-auto">
          <router-view> </router-view>
        </main>
        <div class="py-[50px]"></div>
      </div>
    </div>
    <div class="md:hidden fixed bottom-0 z-50 bg-[#fff] w-full">
      <MobileNav />
    </div>
  </div>
</template>
<script>
import Sidebar from "../../components/dashboardLayout/sidebar.vue";
import Topbar from "../../components/dashboardLayout/topbar.vue";
import MobileNav from "../../components/dashboardLayout/mobileNav.vue";
import MobileDashboardHeader from "../dashboardLayout/mobileDashboardHeader.vue";
import TabletDashboardHeader from "../dashboardLayout/tabletDashboardHeader.vue";
import axios from "axios";

export default {
  name: "index",
  components: {
    Sidebar,
    Topbar,
    MobileNav,
    MobileDashboardHeader,
    TabletDashboardHeader,
  },
  data() {
    return {};
  },
  methods: {},
  async mounted() {
    if (this.$store.state.user == {}) {
      return this.$router.push("/sign-in");
    }
    //check if user auth is still valid
    const app =
      import.meta.env.VITE_APP_ENGINE +
      "user/" +
      this.$store.state.user.user_id;
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + this.$store.state.token;
    await axios
      .get(app)
      .then((res) => {})
      .catch((err) => {
        let error = err.response.data.message;

        swal(error, {
          icon: "error",
          buttons: false,
          timer: 3000,
          class: "font-poppins font-[700] text-[300px]",
        });
        return this.$router.push("/sign-in");
      });
  },
};
</script>
