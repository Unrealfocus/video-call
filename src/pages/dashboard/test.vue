<script>
import Sidebar from '../../components/dashboardLayout/sidebar.vue'
import Topbar from '../../components/dashboardLayout/topbar.vue'
export default {
  name: 'index',
  components: {
    Sidebar,
    Topbar,
  },
  data() {
    return {
      activeTab: 0,
      tabs: ['Profile Setting', 'Notification', 'Security Setting'],
      isActive: false,
    }
  },

  methods: {
    changeTab(index) {
      this.activeTab = index
    },
    toggleSwitch() {
      this.isActive = !this.isActive
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
  },
}
</script>

<template>
  <div class="flex relative bg-[#F9F9F9]">
    <div class="hidden lg:block w-[20%] fixed">
      <Sidebar />
    </div>
    <div class="w-[20%]"></div>
    <div class="w-full">
      <Topbar />
      <main class="lg:w-[85%] mx-auto">
        <div>
          <section
            class="flex bg-white pt-3 pb-5 px-8 w-[100%] rounded-full items-center justify-between mt-20 mb-20"
          >
            <div
              v-for="(tab, index) in tabs"
              :key="index"
              :class="[
                'rounded-full px-14 py-2',
                {
                  'bg-appGreen300 text-white': activeTab === index,
                  'text-appGreen300 cursor-pointer': activeTab !== index,
                },
              ]"
              @click="changeTab(index)"
            >
              {{ tab }}
            </div>
          </section>
          <div class="bg-white p-8 shadow mb-10 rounded-2xl">
            <div v-show="activeTab === 0">
              <section class="pt-3 pb-10 bg-white">
                <p
                  class="font-poppins font-semibold text-4xl text-[#484848] py-10"
                >
                  Profile Settings
                </p>
                <img src="/Man.svg" class="pb-10" alt="" />
                <div class="flex flex-col lg:flex-row gap-5 pb-10">
                  <input
                    class="bg-white w-[519px] p-4 rounded-2xl font-inter font-medium placeholder:font-inter placeholder:font-medium border focus-within:outline-none border-[#484848]"
                    type="text"
                    name="firstName"
                    id="firstName"
                    autocomplete="given-name"
                    placeholder="First Name"
                  />
                  <input
                    class="bg-white w-[519px] p-4 rounded-2xl font-inter font-medium placeholder:font-inter placeholder:font-medium border focus-within:outline-none border-[#484848]"
                    type="text"
                    name="lastName"
                    id="lastName"
                    autocomplete="family-name"
                    placeholder="Last Name"
                  />
                </div>
                <input
                  class="app-input mt-4"
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  placeholder="Email"
                  v-model="email"
                />
                <div>
                  <p class="py-4 font-poppins font-bold text-lg text-[#999999]">
                    Language
                  </p>
                  <input
                    class="app-input mt-4"
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="email"
                    placeholder="Email"
                    v-model="email"
                  />
                </div>
                <p class="py-5 font-poppins font-bold text-lg text-[#999999]">
                  Connect Social media account
                </p>
                <div>
                  <div
                    class="flex justify-between rounded-2xl bg-[#1877F2] w-[500px] px-5 py-3 mb-7"
                  >
                    <img src="Vector(1).svg" alt="" />
                    <div class="rounded-xl bg-white px-8 py-2 text-[#406EE5]">
                      Connect
                    </div>
                  </div>
                  <div
                    class="flex justify-between rounded-2xl bg-[#1877F2] w-[500px] px-5 py-3"
                  >
                    <img src="Vector(2).svg" alt="" />
                    <div class="rounded-xl bg-white px-8 py-2 text-[#406EE5]">
                      Connect
                    </div>
                  </div>
                </div>

                <section class="flex justify-between items-center py-14">
                  <div class="font-poppins font-medium text-sm text-[#999999]">
                    <p>
                      <span class="font-bold text-lg">
                        Deleting your account will
                      </span>
                      <br />
                      Remove all of your activity will campaign and you will no
                      longer be able <br />
                      to sign in with this account
                    </p>
                  </div>
                </section>
              </section>
            </div>

            <div v-show="activeTab === 1">
              <p class="font-poppins font-semibold text-4xl text-[#484848]">
                Notification
              </p>
              <section class="flex justify-between my-5">
                <div class="font-poppins font-medium text-base text-[#999999]">
                  Receive notification on every donation i get
                </div>
                <label class="flex items-center cursor-pointer">
                  <div class="relative">
                    <input
                      type="checkbox"
                      class="sr-only"
                      :checked="isActive"
                      @change="toggleSwitch"
                    />
                    <div
                      class="w-12 h-8 bg-gray-300 rounded-full shadow-inner transition-colors duration-300 ease-in-out"
                    ></div>
                    <div
                      class="absolute w-7 h-7 bg-white rounded-full shadow top-0 left-0 transition-transform duration-300 ease-in-out transform translate-x-0 translate-y-1"
                      :class="{ 'translate-x-6 bg-green-500': isActive }"
                    >
                      <svg
                        class="w-6 h-6 m-auto text-white"
                        fill="none"
                        :class="{
                          'opacity-100': isActive,
                          'opacity-0': !isActive,
                        }"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </label>
              </section>
              <hr class="border-gray-300 my-4" />
              <section class="flex justify-between">
                <div class="font-poppins font-medium text-base text-[#999999]">
                  Receive an email for every withdrawal of donation
                </div>
                <label class="flex items-center cursor-pointer">
                  <div class="relative">
                    <input
                      type="checkbox"
                      class="sr-only"
                      :checked="isActive"
                      @change="toggleSwitch"
                    />
                    <div
                      class="w-12 h-8 bg-gray-300 rounded-full shadow-inner transition-colors duration-300 ease-in-out"
                    ></div>
                    <div
                      class="absolute w-7 h-7 bg-white rounded-full shadow top-0 left-0 transition-transform duration-300 ease-in-out transform translate-x-0 translate-y-1"
                      :class="{ 'translate-x-6 bg-green-500': isActive }"
                    >
                      <svg
                        class="w-6 h-6 m-auto text-white"
                        fill="none"
                        :class="{
                          'opacity-100': isActive,
                          'opacity-0': !isActive,
                        }"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </label>
              </section>
              <hr class="border-gray-300 my-4" />
              <section class="flex justify-between">
                <div class="font-poppins font-medium text-base text-[#999999]">
                  Receive daily summary of every donation i get
                </div>
                <label class="flex items-center cursor-pointer">
                  <div class="relative">
                    <input
                      type="checkbox"
                      class="sr-only"
                      :checked="isActive"
                      @change="toggleSwitch"
                    />
                    <div
                      class="w-12 h-8 bg-gray-300 rounded-full shadow-inner transition-colors duration-300 ease-in-out"
                    ></div>
                    <div
                      class="absolute w-7 h-7 bg-white rounded-full shadow top-0 left-0 transition-transform duration-300 ease-in-out transform translate-x-0 translate-y-1"
                      :class="{ 'translate-x-6 bg-green-500': isActive }"
                    >
                      <svg
                        class="w-6 h-6 m-auto text-white"
                        fill="none"
                        :class="{
                          'opacity-100': isActive,
                          'opacity-0': !isActive,
                        }"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </label>
              </section>
              <section class="flex justify-center mt-20">
                <button
                  class="rounded-xl bg-appGreen200 px-20 py-3 text-white font-poppins font-semibold text-base"
                >
                  Save Changes
                </button>
              </section>
            </div>
            <div v-show="activeTab === 2">
              <!-- Content for Security Setting tab -->
              <!-- Add your content here -->

              <h2>Security Setting Content</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
