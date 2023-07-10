<template>
  <div v-if="manageCount == 1" class="">
    <bucket @singleBucket="toggleNext" />
  </div>
  <div v-if="manageCount == 2" class="lg:w-[85%] mx-auto">
    <!-- px-10 pt-5 pb-10 mt-5 bg-white rounded-2xl -->
    <div class="flex justify-between">
      <button
        @click="togglePrev"
        class="flex items-center px-4 py-4 text-base font-bold border border-[#333333] rounded-full font-poppins"
      >
        <img src="/arrow-left.svg" alt="" />
        Back for fundraiser
      </button>
      <div class="relative">
        <button
          @click="toggleDropdown"
          class="flex items-center justify-center p-2"
        >
          <div class="flex flex-col items-center">
            <span class="w-2 h-2 bg-gray-500 rounded-full"></span>
            <span class="w-2 h-2 bg-gray-500 rounded-full"></span>
            <span class="w-2 h-2 bg-gray-500 rounded-full"></span>
          </div>
        </button>
        <div
          v-if="dropdownOpen"
          class="absolute right-0 py-10 mt-2 bg-white border border-gray-300 shadow w-[250px] rounded-3xl gap-"
        >
          <ul class="">
            <li class="px-4 py-2 cursor-pointer hover:bg-gray-100">
              <button>Pause Bucket</button>
            </li>
            <li class="px-4 py-2 cursor-pointer hover:bg-gray-100">
              <button>Delete Bucket</button>
            </li>
            <div>
              <li class="px-4 py-2 cursor-pointer hover:bg-gray-100">
                <button @click="showConfirmationModal">Close Bucket</button>
              </li>
              <div
                v-if="showModal"
                class="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-gray-800 bg-opacity-50"
              >
                <div class="p-6 bg-white rounded shadow">
                  <h3 class="text-lg font-semibold">Confirmation</h3>
                  <p>Are you sure you want to close this bucket?</p>
                  <div class="flex justify-end mt-4">
                    <button
                      @click="cancelClose"
                      class="px-4 py-2 text-gray-500"
                    >
                      Cancel
                    </button>
                    <button
                      @click="closeBucket"
                      class="px-4 py-2 ml-2 text-white bg-red-500"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <li class="px-4 py-2 cursor-pointer hover:bg-gray-100">
              <button>Stop Receiving Donations</button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="text-2xl font-extrabold md:text-4xl pt-7 font-poppins">
      {{ buck.bucket.title }}
    </div>

    <p class="pt-10 text-[#939393]">Created {{ buck.bucket.created_at }}</p>

    <section class="pt-5">
      <div
        class="flex font-semibold font-poppins bg-[#C8C8C8] rounded-md py-2 px-5 w-[200px]"
      >
        Days:30days left
      </div>
    </section>
    <dl class="flex pt-4">
      <div class="flex flex-1 mr-3 rounded-full bg-[#EAF9F0]">
        <span class="bg-[#F6A609] rounded-full" />
      </div>
      <data value="60" class="font-poppins font-medium text-sm text-[#000000]"
        >60%</data
      >
    </dl>
    <P
      class="flex items-center gap-1 text-xl font-bold font-poppins text-[#939393] mt-4"
      >Total Raised is <span> <img src="/money.svg" alt="" /></span>
      <span class="text-black">{{ buck.donated }}</span></P
    >
    <div class="items-center lg:flex sm:block">
      <div v-if="manageCount == 3" class="">
        <button @click="toggleNext">toggle page 3</button>
      </div>

      <button
        class="flex text-left gap-2 items-center bg-appGreen300 rounded-md py-2 px-7 font-semibold font-poppins text-sm text-[#FFFFFF] mt-5"
        type="button"
        @click="toogleSection"
      >
        <img src="/basil_edit-outline.svg" alt="" />
        edit/settings
      </button>

      <div class="flex items-center gap-3">
        <div
          class="flex py-2 text-sm font-semibold text-left rounded-md font-poppins"
        >
          Preview fundraiser
        </div>

        <router-link to="/withdrawal"
          ><button
            class="flex items-center gap-2 text-left bg-[#EAF9F0] rounded-md py-2 px-7 font-semibold font-poppins text-sm text-[#295F2D] mt-5"
          >
            <img src="/uil_money-withdraw.svg" alt="" />
            withdrawal
          </button></router-link
        >
      </div>
    </div>

    <div class="pt-9">
      <img
        :src="assets + buck.images[0].image_url"
        class="object-cover object-center h-[300px] rounded-2xl"
        alt=""
      />
    </div>

    <section class="">
      <div class="items-center block gap-10 md:flex mt-7">
        <img src="/shareSocial.svg" class="flex items-end bottom-4" alt="" />
        <p class="font-bold md:text-lg font-poppins">
          Are you aware that sharing your donation on social <br />
          media has the potential to boost your donation by an <br />
          impressive 60%?"
        </p>
        <button
          class="px-16 py-2 text-[#295F2D] border-[#295F2D] border rounded-xl"
        >
          share
        </button>
      </div>
    </section>
    <section class="flex items-center mt-20 mb-20">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="[
          'rounded-full px-10 text-xs py-2',
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

    <div v-show="activeTab === 0">
      <!-- <div class="flex">
        <p class="font-medium md:text-2xl font-poppins text-[#484848]">
          <span class="font-bold text-black"
            >Get your first Donation by sharing Sharing</span
          >
          <br />
          your fundraiser regularly with your friends for the most success and
          ask <br />
          friends to donate and share.
        </p>
      </div>
      <button
        class="px-20 py-4 mt-5 text-white rounded-lg md:px-28 bg-appGreen200"
      >
        Share Fundraiser
      </button> -->
    </div>
    <div v-show="activeTab === 1">
      <div class="space-y-[20px] pb-5">
        <p class="text-lg font-semibold font-poppins text-[#484848]">
          Write a new update
        </p>
        <div class="border rounded-2xl w-full border-[#000] p-3">
          <textarea
            class="w-full bg-transparent border-none outline-none"
            rows="4"
          ></textarea>
        </div>

        <div class="pt-5"><p>Add a Photos</p></div>

        <div class="pt-10"></div>

        <div>
          <p class="text-lg font-semibold font-poppins text-[#484848]">
            Share Update
          </p>
          <div class="flex items-center gap-2 pt-3">
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="w-5 h-5 text-indigo-600 transition duration-150 ease-in-out form-checkbox"
                :checked="checked"
                @change="toggle"
              />
            </label>
            <p class="text-sm font-medium font-poppins text-[#999999]">
              Fundraiser page default
            </p>
          </div>
          <div class="flex items-center gap-2 pt-3">
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="w-5 h-5 text-indigo-600 transition duration-150 ease-in-out form-checkbox"
                :checked="checked"
                @change="toggle"
              />
            </label>
            <p class="text-sm font-medium font-poppins text-[#999999]">
              Email donors
            </p>
          </div>
        </div>

        <div class="flex items-center justify-between pt-7">
          <button
            class="px-20 py-2 text-base font-semibold text-white bg-appGreen200 rounded-xl font-poppins"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>

    <div class="flex">
      <p class="font-medium md:text-2xl font-poppins text-[#484848]">
        <span class="font-bold text-black"
          >Get your first Donation by sharing Sharing</span
        >
        <br />
        your fundraiser regularly with your friends for the most success and ask
        <br />
        friends to donate and share.
      </p>
    </div>
    <button
      class="px-20 py-4 mt-5 text-[#295F2D] rounded-lg md:px-24 border-[#295F2D] border"
    >
      Share Fundraiser
    </button>
  </div>
</template>

<script>
import bucket from "../../components/manageBucket/bucket.vue";
export default {
  name: "manage",
  emits: ["edit"],
  components: {
    bucket,
  },
  data() {
    return {
      buck: {},
      assets: "",
      manageCount: 1,
      activeTab: 0,
      tabs: ["Donator", "Bucket Updates"],
      dropdownOpen: false,
      showModal: false,
    };
  },
  mounted() {
    this.bucket = this.$store.state.bucket;
    this.assets = import.meta.env.VITE_APP_ASSETS;
  },
  methods: {
    toggleNext(num) {
      this.manageCount++;
      this.buck = num;
    },
    changeTab(index) {
      this.activeTab = index;
    },
    togglePrev() {
      this.manageCount--;
    },
    toogleSection() {
      this.$emit("edit");
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    showConfirmationModal() {
      this.showModal = true;
    },
    cancelClose() {
      this.showModal = false;
    },
    closeBucket() {
      // Perform the close bucket action here
      this.showModal = false;
    },
  },
};
</script>
