<template>
  <div class="bg-[#fafafa]">
    <navabar_test />
    <div
      class="w-[90%] xl:w-[1280px] lg:w-[1125px] mx-auto py-[64px] md:py-[67px] lg:py-[49px]">
      <div class="title md:w-[60%]">
        <p class="font-[800] text-[32px] font-poppins">
          Support my community from NEPA Issues for 10years.
        </p>
        <button
          class="tag bg-[#BDEED1] text-[#022D19] font-[700] text-[15px] p-[7px] rounded-lg flex items-center">
          <p>Emergnecy</p>
          <img src="/Vector.svg" alt="vector" class="px-2" />
        </button>
        <div class="author flex space-x-[12px]">
          <p class="text-[#939393] font-[500]">Created by David Sampson</p>
          <div class="flex space-x-[6px] items-center">
            <img src="/location.svg" class="w-[20px] h-[20px]" />
            <p class="font-poppins text-[14px] font-[800]">Lagos</p>
          </div>
        </div>
      </div>
      <div class="">
        <div class="flex space-x-[20px]">
          <div class="md:w-[70%]">
            <img src="/donateLarge.svg" class="w-full" />
            <div class="">
              <div class="">
                <p class="font-poppins text-[#333333] font-[700] text-[20px]">
                  Full Story
                </p>
              </div>
              <div class="">
                <p class="font-poppins">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor inLorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et labo Read more nim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor inLorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in
                </p>

                <div class="">
                  <p
                    class="text-[#333333] font-poppins font-[700] text-[30px] px-[10px] py-[5px] bg-red">
                    Comments
                  </p>

                  <div class="space-y-[20px]">
                    <div
                      class="comments flex space-x-[10px] items-center"
                      v-for="num in 5">
                      <div
                        class="md:w-[80px] md:h-[80px] w-[20%] h-[50px] rounded-2xl bg-[#BDEED1]"></div>
                      <div class="font-poppins">
                        <p class="text-[20px] font-[600]">David Sampson</p>
                        <p class="text-[#939393] text-[20px] font-[600]">
                          ₦ 5000
                        </p>
                      </div>
                      <!-- <p class="pt-[10px]">
                        We’re so sorry david of just happened to your community i
                        hope this goes a long way to help you
                      </p> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-[30%]">
            <div class="card shadow-lg rounded-2xl p-[30px]">
              <p>Goal amount</p>
              <p>N500,000.00</p>

              <dl class="flex">
                <div class="flex flex-1 bg-[#EAF9F0] rounded-full mr-3">
                  <span class="bg-[#2AC769] w-[60%] rounded-full py-[8px]" />
                </div>
              </dl>
              <p>Total Raised is ₦50,000</p>

              <div class="">
                <button
                  class="w-full bg-[#295F2D] text-white rounded-2xl font-poppins">
                  Donate Now
                </button>
              </div>
              <div class="flex justify-between">
                <button>share</button>
                <button>share</button>
              </div>

              <div class="border w-full"></div>
              <div class="">
                <p>Organizer</p>
                <div class="flex">
                  <div class="image"></div>
                  <div class="user">
                    <p>name</p>
                    <p>location</p>
                  </div>
                </div>
                <div class="flex justify-center">
                  <button>contact</button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    return {};
  },
  methods: {},
};
</script>
