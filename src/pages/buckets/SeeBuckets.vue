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
        <div class="categories flex space-x-[20px] overflow-hidden">
          <div
            @click="toggleCategory(cat)"
            class="border cursor-pointer rounded-lg py-[8px] px-[24px] font-[500] font-poppins text-[16px]"
            :class="[
              cat.current == true ? 'bg-[#242424] text-white' : 'bg-[#fff] ',
            ]"
            v-for="cat in categories">
            {{ cat.name }}
          </div>
        </div>
      </div>

      <div class="content-list">
        <div
          class="md:grid lg:grid-cols-4 grid-cols-2 grid-flow-row auto-rows-max gap-2">
          <div
            v-for="item in buckets"
            class="bg-[#fff] m-2 rounded-2xl p-1 space-y-[10px]">
            <img
              :src="assets + item.images[0].image_url"
              class="h-[300px] w-full object-cover object-center rounded-2xl"
              alt="" />
            <p class="font-poppins font-[700] text-[18px] leading-[20px]">
              {{
                item.bucket.title.length > 24
                  ? item.bucket.title.slice(0, 24) + "..."
                  : item.bucket.title
              }}
            </p>
            <p class="font-poppins font-[800] text-[14px]">
              by {{ item.author }}
            </p>
            <div class=" ">
              <p class="font-poppins font-[500] text-[12px]">
                {{
                  item.bucket.description.length > 150
                    ? item.bucket.description.slice(0, 150) + "..."
                    : item.bucket.description
                }}
              </p>
            </div>

            <dl class="flex">
              <div class="flex flex-1 bg-[#EAF9F0] rounded-full mr-3">
                <span
                  :class="'w-[' + item.percentage + '%]'"
                  class="bg-[#f6a609] w-[60%] rounded-full py-[8px]" />
              </div>
              <p>{{ item.percentage }}%</p>
            </dl>
            <p class="font-poppins text-[14px] font-[500]">
              <span class="font-[800]">Goal:</span> ₦{{ item.bucket.goal }}
            </p>
            <p class="font-poppins text-[14px] font-[500]">
              <span class="font-[800]">Raised:</span>
              ₦ {{ item.donated }}
            </p>
            <!-- <div class="flex space-x-[6px] items-center">
              <img src="/location.svg" class="w-[20px] h-[20px]" />
              <p class="font-poppins text-[14px] font-[800]">Lagos</p>
            </div> -->
            <div class="">
              <button
                @click="singleBucket(item)"
                class="bg-[#295F2D] py-[8px] w-full text-white rounded-2xl font-poppins font-[600] text-[20px]">
                Donate
              </button>
            </div>
          </div>
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
import axios from "axios";
export default {
  name: "SeeBuckets",
  components: {
    navabar_test,
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
    singleBucket(item) {
      this.$router.push("/bucket/" + item.bucket.bucket_id);
    },
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
