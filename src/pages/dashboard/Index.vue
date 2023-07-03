<template>
  <div>
    <div
      v-if="loading == true"
      class="loading w-full h-screen flex justify-center items-center">
      <img src="/logo1.svg" class="animate-bounce" />
    </div>
    <main v-if="loading == false" class="lg:w-[85%] mx-auto">
      <section class="section 1">
        <h1
          class="pb-3 text-sm font-medium md:text-base md:font-bold font-poppins"
        >
          Hi
          {{
            this.$store.state.user.first_name +
            " " +
            this.$store.state.user.last_name
          }}
        </h1>
        <div class="items-center justify-between block md:flex">
          <div class="flex">
            <p
              class="pb-3 text-2xl font-bold md:text-3xl md:font-medium font-poppins"
            >
              Welcome back 👋🏼
            </p>
            <img src="" alt="" />
          </div>
          <router-link to="/create-bucket">
            <button
              class="rounded-full bg-[#2A5E2A] border-[1px] text-[#fff] py-3 text-[14px] px-10 font-poppins font-bold text-base"
            >
              Create a bucket
            </button></router-link
          >
        </div>
      </section>

      <section class="hidden mt-12 md:block section 2">
        <div
          class="w-[1000px] h-[146.19px] top-277px left-33px rounded-[16.4px] p-[8.2px] bg-white gap-[8.2px]"
        >
          <div class="flex cards">
            <div
              class="w-[273.96px] h-Hug-[129.79px] top-[8.2px] left-[8.2px] p-[34px 14px]"
            >
              <div class="p-5">
                <div class="text-[#999999] font-bold text-xs flex gap-2">
                  <img src="/naira.svg" class="-mt-1" alt="" />
                  Total Donation
                </div>
                <div
                  class="flex gap-2 pt-2 text-2xl font-semibold font-poppins"
                >
                  <img src="/money.svg" alt="" />
                  500,000.00
                  <div
                    class="text-xs text-[#1E8D4B] rounded-lg bg-[#EAF9F0] py-2 px-5 justify-center flex"
                  >
                    30%
                    <img src="/arrowup2.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="w-[273.96px] h-Hug-[129.79px] top-[8.2px] left-[8.2px] p-[34px 14px] border-l-2 border-r-2 border-gray-300"
            >
              <div class="p-5">
                <div class="text-[#999999] font-bold text-xs flex gap-2">
                  <img src="/naira.svg" class="-mt-1" alt="" />
                  Total Fundraisers
                </div>

                <div class="pt-2 text-2xl font-semibold font-poppins">
                  Created:50 | Funded:10
                </div>
              </div>
            </div>

            <div
              class="w-[273.96px] h-Hug-[129.79px] top-[8.2px] left-[8.2px] p-[34px 14px]"
            >
              <div class="p-5">
                <div class="text-[#999999] font-bold text-xs flex gap-2">
                  <img src="/naira.svg" class="-mt-1" alt="" />
                  Total Fundraising Buckets
                </div>
                <div class="pt-2 text-2xl font-semibold font-poppins">
                  {{ myBuckets.length }}
                  <span class="text-xs font-medium font-poppins">Buckets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section v-if="myBuckets.length > 0" class="hidden section 3 md:block">
        <p class="pt-9 pb-5 font-poppins font-semibold text-xl text-[#484848]">
          Recent Fund Bucket
        </p>
        <div
          class="w-[1,000px] h-[339.71px] top-53px rounded-[15px] p-[40px] gap-[10px] bg-white"
        >
          <div class="p-2">
            <div class="text-3xl font-bold font-poppins">
              {{ recent.bucket.title }}
            </div>
            <div class="py-5 text-base font-medium font-poppins">
              {{ recent.bucket.description }}
            </div>
            <dl class="flex">
              <div class="flex flex-1 bg-[#EAF9F0] rounded-full mr-3">
                <span class="bg-[#26B560] w-[30%] rounded-full" />
              </div>
              <data
                value="60"
                class="font-poppins font-medium text-sm text-[#000000]"
                >60%</data
              >
            </dl>
            <div
              class="flex justify-between gap-1 pt-2 text-2xl font-semibold font-poppins"
            >
              <div class="flex py-5">
                <img src="/money.svg" alt="" /> {{ recent.donated }}
              </div>
              <div class="font-poppins font-medium text-xs text-[#939393]">
                March 22th 2023
              </div>
            </div>
            <div
 
              class="rounded-xl text-start py-2 px-3 border border-[#484848] w-[160px] text-base">
              {{ recent.category }}

            </div>
          </div>
        </div>
      </section>

      <section class="section 4">
        <p class="pt-9 pb-5 font-poppins font-bold text-xl text-[#484848]">
          Daily Tips for fundraising 💸
        </p>
        <div class="pt-4 pb-10 bg-appGreen200 rounded-2xl">
          <div class="p-6">
            <p class="font-poppins font-bold text-3xl text-[#FFFFFF] pb-9">
              How to improve your Fundraising by 80%
            </p>
            <p class="font-poppins font-normal text-[#F9F9F9] text-lg">
              Ask for Donations. Don’t be afraid to reach out and ask people to
              donate. Ask friends, family, neighbors, and even strangers for
              support. Also Show Gratitude. Lots of it. Express your gratitude
              to your supporters. Send thank you emails or personalized cards to
              show them that you appreciate their help.
            </p>

            <div class="flex justify-end pt-4">
              <div
                class="w-[110px] text-center h-[40px] bg-white border border-[#295F2D] rounded-2xl py-2 px-3"
              >
                Read here
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="">
        <div class="pt-4 pb-10">
          <p class="pb-5 text-xl font-bold pt-9 font-poppins">
            PUT HAND FOR SOMEONE TODAY? 
          </p>
          <!-- flex overflow-x-scroll gap-7 no-scrollbar -->
          <div class="mt-10">
            <ul class="grid grid-cols-1 md:grid-cols-3 gap-7">
              <li v-for="item in buckets" class="">
                <figure class="px-5 py-5 bg-white rounded-2xl">
                  <img
                    :src="assets + item.images[0].image_url"
                    class="object-cover object-center w-full h-44 rounded-2xl"
                    alt=""
                  />
                  <button
                    type="button"
                    class="flex items-center px-2 py-1 my-3 rounded-lg bg-appGreen100"
                  >
                    <span
 
                      class="text-sm font-bold shadow-md text-appGreen200 font-poppins shadow-appGreen100">
                      {{ item.category }}

                    </span>
                    <img src="/Vector.svg" alt="vector" class="px-2" />
                  </button>
                  <p class="text-base font-semibold font-poppins">
                    {{ item.bucket.title }}
                  </p>

                  <p class="mt-5 mb-2 text-sm font-medium font-poppins">
                    {{ item.bucket.description }}
                  </p>

                  <dl class="flex">
                    <div class="flex flex-1 mr-3 rounded-full bg-appGray100">
                      <span class="bg-yellow-500 w-[60%] rounded-full" />
                    </div>
                    <data
                      value="60"
                      class="font-poppins font-medium text-sm text-[#000000]"
                      >60%</data
                    >
                  </dl>

                  <dl class="flex justify-between my-4">
                    <span class="flex">
                      <dt
                        class="font-bold font-poppins text-xs mr-1 text-[#000000]"
                      >
                        Raised:
                      </dt>

                      <dd
 
                        class="font-medium font-poppins text-xs text-[#000000]">
                        {{ item.donated }}
 
                      </dd>
                    </span>
                    <span class="flex">
                      <dt
                        class="font-bold font-poppins text-xs text-[#295F2D] mr-1"
                      >
                        Goals:
                      </dt>
                      <dd
 
                        class="font-medium font-poppins text-xs text-[#295F2D]">
                        {{ item.bucket.goal }}
                      </dd>
                    </span>
                  </dl>

                  <button
                    @click="
                      this.$router.push('/bucket/' + item.bucket.bucket_id)
                    "
                    class="bg-appGreen300 w-full rounded-full py-2 font-semibold font-poppins text-lg text-[#FFFFFF]"
                    type="button">
                    Donate
                  </button>

                </figure>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      assets: "",
      myBuckets: [],
      buckets: [],
      recent: {},
      loading: false,
    };
  },
  async created() {
    this.loading = true;
    const app = import.meta.env.VITE_APP_ENGINE;
    this.assets = import.meta.env.VITE_APP_ASSETS;

    axios.defaults.headers.common["Authorization"] =
      "Bearer " + this.$store.state.token;
    //get categories
    await axios.get(app + "categories").then((res) => {
      this.categories = res.data.data;
    });

    await axios.get(app + "buckets").then((res) => {
      this.buckets = res.data.data;
    });

    //get my buckets
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + this.$store.state.token;
    await axios
      .get(app + "my_bucket/" + this.$store.state.user.user_id)
      .then((res) => {
        this.myBuckets = res.data.data;
      });
    //set recent
    this.recent = this.myBuckets[this.myBuckets.length - 1];
    this.loading = false;
  },
};
</script>
