<template>
  <header class="flex items-center justify-between px-5">
    <img src="/logo1.svg" class="w-24" alt="puthand logo" />
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
      <img
        src="/Man.svg"
        class="w-10 h-10 rounded-full"
        alt="profile picture"
      />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      notifications: [
        { id: 1, message: "Notification 1" },
        { id: 2, message: "Notification 2" },
        { id: 3, message: "Notification 3" },
        { id: 4, message: "Notification 4" },
        { id: 5, message: "Notification 5" },
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    clearNotifications() {
      this.notifications = [];
    },
  },
};
</script>
