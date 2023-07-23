<template>
  <div class="bg-[#fafafa]">
    <navabar_test />
    <div
      v-if="loading == true"
      class="loading w-full h-screen flex justify-center items-center">
      <img src="/logo1.svg" class="animate-bounce" />
    </div>
    <div
      v-if="loading == false"
      class="w-[90%] xl:w-[1280px] lg:w-[1125px] mx-auto py-[64px] md:py-[67px] lg:py-[49px]">
      <div class="serch-filter flex justify-center">
        <!-- filter by categories  -->
        <!-- <div class="categories flex space-x-[20px] overflow-hidden">
          <div
            @click="toggleCategory(cat)"
            class="border cursor-pointer rounded-lg py-[8px] px-[24px] font-[500] font-poppins text-[16px]"
            :class="[
              cat.current == true ? 'bg-[#242424] text-white' : 'bg-[#fff] ',
            ]"
            v-for="cat in categories">
            {{ cat.name }}
          </div>
        </div> -->
      </div>

      <div class="content-list">
        <div
          class="md:grid lg:grid-cols-4 grid-cols-2 grid-flow-row auto-rows-max gap-10">
          <DonationCard
            v-for="item in buckets"
            :key="item.id"
            :item="item"
            :assets="assets" />
        </div>
      </div>
      <div class="flex justify-center py-52">
        <button
          class="bg-[#fff] border rounded-lg py-[8px] px-[91px] font-[500] font-poppins text-[16px]">
          View more
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import navabar_test from "../../components/layout/navabar_test.vue";
import DonationCard from "../../components/cards/donationCard.vue";
import axios from "axios";
export default {
  name: "SeeBuckets",
  components: {
    navabar_test,
    DonationCard,
  },
  data() {
    return {
      loading: false,
      buckets: [],
      categories: [],
      assets: "",
    };
  },
  async mounted() {
    this.loading = true;
    const app = import.meta.env.VITE_APP_ENGINE;
    this.assets = import.meta.env.VITE_APP_ASSETS;
    //get categories
    await axios.get(app + "categories").then((res) => {
      this.categories = res.data.data;
      console.log(this.categories);
    });

    //get buckets
    await axios.get(app + "buckets").then((res) => {
      this.buckets = res.data.data;

      console.log(this.buckets);
    });
    this.loading = false;

    this.buckets.forEach((item) => {
      let percentage = Math.floor((item.donated / item.bucket.goal) * 100);
      if (Number.isInteger(percentage / 10)) {
        item.percentage = percentage.toString();
      } else {
        while (Number.isInteger(percentage / 10) == false) {
          percentage--;
        }

        item.percentage = percentage.toString();
      }
    });
  },
  methods: {
    // singleBucket(item) {
    //   this.$router.push("/bucket/" + item.bucket.bucket_id);
    // },
    toggleCategory(item) {
      let arr = [];
      this.categories.forEach((i) => {
        if (i == item) {
          i.current = true;
          arr.push(i);
        } else {
          i.current = false;
          arr.push(i);
        }
      });
      this.categories = arr;
    },
  },
};
</script>
