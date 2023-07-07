<template>
  <div class="hidden lg:block top-bar w-full bg-[#fff] py-[21px]">
    <div class="w-[85%] md:w-[] mx-auto flex justify-between">
      <div class="w-2/3">
        <div
          class="bg-[#F3F3F3] rounded-full p-[12px] md:flex hidden items-center space-x-[24px]">
          <div class="">
            <img src="/clarity_search-line.svg" alt="" />
          </div>
          <div class="">
            <input
              type="text"
              placeholder="Search"
              class="bg-transparent outline-none font-[600] text-[16px]" />
          </div>
        </div>
      </div>
      <div class="flex items-center gap-5">
        <div class="relative">
          <button
            @click="toggleDropdown"
            class="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:bg-gray-300">
            <span class="relative">
              <img src="/bell.svg" alt="" />
              <span
                v-if="unreadCount"
                class="absolute px-2 text-xs text-white bg-red-500 rounded-full -top-1 -right-1"
                >{{ unreadCount }}</span
              >
            </span>
          </button>
          <div
            v-if="isDropdownOpen"
            class="absolute right-0 z-10 w-64 mt-2 bg-white rounded-lg shadow-lg">
            <ul class="divide-y divide-gray-200">
              <li
                v-for="notification in notifications"
                class="p-4 cursor-pointer hover:bg-gray-100"
                @click="clearNotifications">
                <p>{{ notification.message }}</p>
              </li>
            </ul>
          </div>
        </div>

        <!-- <img src="/roundman.svg" alt="" /> -->
        <div class="bg-[#295F2D] p-2 rounded-full">
          <p class="text-[#fff] font-[700] font-poppins">
            {{
              this.$store.state.user.first_name
                ? this.$store.state.user.first_name.charAt(0)
                : ""
            }}{{
              this.$store.state.user.last_name
                ? this.$store.state.user.last_name.charAt(0)
                : ""
            }}
          </p>
        </div>
        <p class="text-base font-semibold font-inter">
          {{
            this.$store.state.user.first_name +
            " " +
            this.$store.state.user.last_name
          }}
        </p>
        <img src="/arrowdown.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Topbar",
  data() {
    return {
      activeTab: 0,
      tabs: ["Profile Setting", "Notification", "Security Setting"],
      isActive: false,
      isDropdownOpen: false,
      notifications: [],
    };
  },
  async mounted() {
    //get notifications
    const app = import.meta.env.VITE_APP_ENGINE;
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + this.$store.state.token;
    await axios
      .get(app + "notifications/" + this.$store.state.user.user_id)
      .then((res) => {
        this.notifications = res.data.data;
        console.log(this.notifications);
      })
      .catch();
  },
  async created() {
    if (!this.$store.state.user.first_name) {
      this.$router.push("/sign-in");
    }
  },
  computed: {
    unreadCount() {
      return this.notifications.length;
    },
  },
  methods: {
    changeTab(index) {
      this.activeTab = index;
    },
    toggleSwitch() {
      this.isActive = !this.isActive;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    clearNotifications() {
      this.notifications = [];
    },
  },
};
</script>
