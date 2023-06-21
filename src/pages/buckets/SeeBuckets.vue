<template>
  <div class="bg-[#fafafa]">
    <navabar_test />
    <div
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
            v-for="item in 12"
            class="bg-[#fff] m-2 rounded-2xl p-1 space-y-[10px]">
            <img
              src="/community.svg"
              class="h-44 w-full object-cover object-center rounded-2xl"
              alt="" />
            <p class="font-poppins font-[700] text-[18px] leading-[20px]">
              Help david Community get support
            </p>
            <p class="font-poppins font-[800] text-[14px]">by David Sampson</p>
            <p class="font-poppins font-[500] text-[12px]">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus...
            </p>

            <dl class="flex">
              <div class="flex flex-1 bg-[#EAF9F0] rounded-full mr-3">
                <span class="bg-[#2AC769] w-[60%] rounded-full py-[8px]" />
              </div>
            </dl>
            <p class="font-poppins text-[14px] font-[500]">
              <span class="font-[800]">Raised:</span>
              N50,000
            </p>
            <div class="flex space-x-[6px] items-center">
              <img src="/location.svg" class="w-[20px] h-[20px]" />
              <p class="font-poppins text-[14px] font-[800]">Lagos</p>
            </div>
            <div class="">
              <button
                @click="singleBucket"
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
export default {
  name: "SeeBuckets",
  components: {
    navabar_test,
  },
  data() {
    return {
      categories: [
        { id: 1, current: true, name: "Trending Now" },
        { id: 2, current: false, name: "Medical" },
        { id: 3, current: false, name: "Academic" },
      ],
    };
  },
  methods: {
    singleBucket() {
      this.$router.push("/bucket");
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
