<template>
  <div class="hidden lg:block top-bar w-full bg-[#fff] py-[21px]">
    <div
      v-if="showSuccess"
      class="fixed top-0 left-0 w-full py-2 text-center text-white bg-green-500"
    >
      <!-- <p>Bucket successfully closed</p> -->
      <p :class="alertClass">{{ this.$store.state.alert.message }}</p>
    </div>
    <div class="w-[85%] md:w-[] mx-auto flex justify-between">
      <div class="w-2/3">
        <div
          class="bg-[#F3F3F3] rounded-full p-[12px] md:flex hidden items-center space-x-[24px]"
        >
          <div class="">
            <img src="/clarity_search-line.svg" alt="" />
          </div>
          <div class="">
            <input
              type="text"
              placeholder="Search"
              class="bg-transparent outline-none font-[600] text-[16px]"
            />
          </div>
        </div>
      </div>
      <div class="flex items-center gap-5">
        <div class="relative">
          <button
            @click="toggleDropdown"
            class="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
          >
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
            class="absolute right-0 z-10 w-64 mt-2 bg-white rounded-lg shadow-lg"
          >
            <ul class="divide-y divide-gray-200">
              <li
                v-for="notification in notifications"
                :key="notification.id"
                class="p-4 cursor-pointer hover:bg-gray-100"
                @click="clearNotifications"
              >
                <p>{{ notification.message }}</p>
              </li>
            </ul>
          </div>
        </div>
        <!-- <img src="/roundman.svg" alt="" /> -->
        <div class="bg-[#295F2D] p-2 rounded-full">
          <p class="text-[#fff] font-[700] font-poppins">
            {{ this.$store.state.user.first_name.charAt(0)
            }}{{ this.$store.state.user.last_name.charAt(0) }}
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
export default {
  name: "Topbar",
  data() {
    return {
      activeTab: 0,
      tabs: ["Profile Setting", "Notification", "Security Setting"],
      isActive: false,
      isDropdownOpen: false,
      notifications: [
        { id: 1, message: "Notification 1" },
        { id: 2, message: "Notification 2" },
        { id: 3, message: "Notification 3" },
        { id: 4, message: "Notification 4" },
        { id: 5, message: "Notification 5" },
        { id: 6, message: "Notification 6" },
        { id: 7, message: "Notification 7" },
        { id: 8, message: "Notification 8" },
        { id: 9, message: "Notification 9" },
        { id: 10, message: "Notification 10" },
        { id: 11, message: "Notification 11" },
        { id: 12, message: "Notification 12" },
        { id: 13, message: "Notification 13" },
        { id: 14, message: "Notification 14" },
        { id: 15, message: "Notification 15" },
      ],
    };
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
