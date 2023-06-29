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
    return {
      activeTab: 0,
      tabs: ["Profile Setting", "Notification", "Security Setting"],
      isActive1: false,
      isActive2: false,
      isActive3: false,
    };
  },
  methods: {
    changeTab(index) {
      this.activeTab = index;
    },
    toggleSwitch(identifier) {
      if (identifier === 1) {
        this.isActive1 = !this.isActive1;
      } else if (identifier === 2) {
        this.isActive2 = !this.isActive2;
      } else if (identifier === 3) {
        this.isActive3 = !this.isActive3;
      }
    },
  },
};
</script>

<template>
  <div>
    <section
      class="md:flex hidden bg-white pt-3 pb-5 px-8 w-[100%] rounded-full items-center justify-between mt-20 mb-20"
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
    <div class="p-8 mt-10 mb-10 bg-white shadow rounded-2xl">
      <div v-show="activeTab === 0">
        <section class="pt-3 pb-10 bg-white">
          <p class="font-poppins font-semibold text-4xl text-[#484848] py-10">
            Profile Settings
          </p>
          <img src="/Man.svg" class="pb-10" alt="" />
          <div class="flex flex-col gap-5 pb-10 lg:flex-row">
            <input
              class="app-input"
              type="text"
              name="firstName"
              id="firstName"
              autocomplete="given-name"
              placeholder="First Name"
            />
            <input
              class="app-input"
              type="text"
              name="lastName"
              id="lastName"
              autocomplete="family-name"
              placeholder="Last Name"
            />
          </div>
          <input
            class="mt-4 app-input"
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
              class="mt-4 app-input"
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
              class="flex justify-between bg-[#1877F2] md:w-[500px] w-full p-4 rounded-2xl px-5 py-3 mb-7"
            >
              <img src="/Vector(1).svg" alt="" />
              <div class="rounded-xl bg-white px-8 py-2 text-[#406EE5]">
                Connect
              </div>
            </div>
            <div
              class="flex justify-between bg-[#1877F2] w-full p-4 rounded-2xl md:w-[500px] px-5 py-3"
            >
              <img src="/Vector(2).svg" alt="" />
              <div class="rounded-xl bg-white px-8 py-2 text-[#406EE5]">
                Connect
              </div>
            </div>
          </div>

          <section class="flex items-center justify-between py-14">
            <div class="font-poppins font-medium text-sm text-[#999999]">
              <p>
                <span class="text-lg font-bold">
                  Deleting your account will
                </span>
                <br />
                Remove all of your activity will campaign and you will no longer
                be able <br />
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
                :checked="isActive1"
                @change="toggleSwitch(1)"
              />
              <div
                class="w-12 h-8 transition-colors duration-300 ease-in-out bg-gray-300 rounded-full shadow-inner"
              ></div>
              <div
                class="absolute top-0 left-0 transition-transform duration-300 ease-in-out transform translate-x-0 translate-y-1 bg-white rounded-full shadow w-7 h-7"
                :class="{ 'translate-x-6 bg-green-500': isActive1 }"
              >
                <svg
                  class="w-6 h-6 m-auto text-white"
                  fill="none"
                  :class="{
                    'opacity-100': isActive1,
                    'opacity-0': !isActive1,
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
        <hr class="my-4 border-gray-300" />
        <section class="flex justify-between">
          <div class="font-poppins font-medium text-base text-[#999999]">
            Receive an email for every withdrawal of donation
          </div>
          <label class="flex items-center cursor-pointer">
            <div class="relative">
              <input
                type="checkbox"
                class="sr-only"
                :checked="isActive2"
                @change="toggleSwitch(2)"
              />
              <div
                class="w-12 h-8 transition-colors duration-300 ease-in-out bg-gray-300 rounded-full shadow-inner"
              ></div>
              <div
                class="absolute top-0 left-0 transition-transform duration-300 ease-in-out transform translate-x-0 translate-y-1 bg-white rounded-full shadow w-7 h-7"
                :class="{ 'translate-x-6 bg-green-500': isActive2 }"
              >
                <svg
                  class="w-6 h-6 m-auto text-white"
                  fill="none"
                  :class="{
                    'opacity-100': isActive2,
                    'opacity-0': !isActive2,
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
        <hr class="my-4 border-gray-300" />
        <section class="flex justify-between">
          <div class="font-poppins font-medium text-base text-[#999999]">
            Receive daily summary of every donation i get
          </div>
          <label class="flex items-center cursor-pointer">
            <div class="relative">
              <input
                type="checkbox"
                class="sr-only"
                :checked="isActive3"
                @change="toggleSwitch(3)"
              />
              <div
                class="w-12 h-8 transition-colors duration-300 ease-in-out bg-gray-300 rounded-full shadow-inner"
              ></div>
              <div
                class="absolute top-0 left-0 transition-transform duration-300 ease-in-out transform translate-x-0 translate-y-1 bg-white rounded-full shadow w-7 h-7"
                :class="{ 'translate-x-6 bg-green-500': isActive3 }"
              >
                <svg
                  class="w-6 h-6 m-auto text-white"
                  fill="none"
                  :class="{
                    'opacity-100': isActive3,
                    'opacity-0': !isActive3,
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
            class="px-20 py-3 text-base font-semibold text-white rounded-xl bg-appGreen200 font-poppins"
          >
            Save Changes
          </button>
        </section>
      </div>
      <div v-show="activeTab === 2">
        <section>
          <p class="text-xl font-semibold font-poppins text-[#C8C8C8]">
            Password Setting
          </p>
          <div>
            <p class="pt-4 text-sm font-semibold font-poppins">
              Current Password
            </p>
            <input
              class="mt-4 app-input"
              type="password"
              name="current password"
              id="current password"
              placeholder="thedesignerofficial1@gmail.com"
            />
          </div>

          <div>
            <p class="pt-4 text-sm font-semibold font-poppins">New Password</p>
            <input
              class="mt-4 app-input"
              type="password"
              name="new password"
              id="new password"
              placeholder="!Fav90800000000"
            />
          </div>

          <div>
            <p class="pt-4 text-sm font-semibold font-poppins">
              Confirm New Password
            </p>
            <input
              class="mt-4 app-input"
              type="password"
              name="confirm new password"
              id="confirm new password"
              placeholder="************"
            />
          </div>
        </section>
        <section class="pt-10">
          <p class="text-xl font-semibold font-poppins text-[#C8C8C8]">
            Email address setting
          </p>

          <div>
            <p class="pt-4 text-sm font-semibold font-poppins">
              Current Email Address
            </p>
            <input
              class="mt-4 app-input"
              type="email"
              name="current email adresss"
              id="current email address"
              autocomplete="email"
              placeholder="PhelTakon@gmail.com"
              v-model="email"
            />
          </div>

          <div>
            <p class="pt-4 text-sm font-semibold font-poppins">
              New Email Address
            </p>
            <input
              class="mt-4 app-input"
              type="email"
              name="new email adresss"
              id="new email address"
              autocomplete="email"
              placeholder="PhelTakon1234@gmail.com"
              v-model="email"
            />
          </div>

          <div>
            <p class="pt-4 text-sm font-semibold font-poppins">
              Confirm New Email Address
            </p>
            <input
              class="mt-4 app-input"
              type="email"
              name="confirm new email adresss"
              id="confirm new email address"
              autocomplete="email"
              placeholder="PhelTakon1234@gmail.com"
              v-model="email"
            />
          </div>
        </section>
        <section class="flex justify-center mt-20">
          <button
            class="px-20 py-3 text-base font-semibold text-white rounded-xl bg-appGreen200 font-poppins"
          >
            Save Changes
          </button>
        </section>
      </div>
    </div>
  </div>
</template>
