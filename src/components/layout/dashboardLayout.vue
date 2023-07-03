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
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + this.$store.state.token;
    await axios
      .get(createBucket, {
        category_id: this.category,
        goal: this.goal,
        user_id: this.$store.state.user.user_id,
        end_date: this.endDate,
        title: this.title,
        description: this.description,
      })
      .then((res) => {})
      .catch((err) => {
        return this.$router.push("/sign-in");
      });
  },
};
</script>
