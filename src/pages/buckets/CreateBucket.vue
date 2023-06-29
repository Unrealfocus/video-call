<template>
  <div class="bg-[#B7B7B7] lg:h-screen">
    <div class="flex items-center justify-center lg:h-screen">
      <div class="bg-[#fff] w-[820px] rounded-lg px-[45px] py-[50px]">
        <div :class="[currentStep == 4 ? 'hidden' : '']" class="">
          <button
            @click="prevSlide()"
            class="border-2 border-[#295F2D] text-[#295F2D] rounded-2xl px-[23px] py-[12px] font-[700] text-[16px]">
            Back
          </button>
        </div>

        <div
          :class="[currentStep == 4 ? 'hidden' : '']"
          class="steps py-[30px]">
          <p class="font-[700] text-[18px] font-poppins pb-[10px]">
            Steps {{ currentStep }}
          </p>
          <div class="bars flex space-x-[8px]">
            <div
              :class="[currentStep == 1 ? 'bg-[#295F2D]' : 'bg-[#D9D9D9]']"
              class="w-[105px] h-[8px] rounded-full"></div>
            <div
              :class="[currentStep == 2 ? 'bg-[#295F2D]' : 'bg-[#D9D9D9]']"
              class="w-[105px] h-[8px] rounded-full"></div>
            <div
              :class="[currentStep == 3 ? 'bg-[#295F2D]' : 'bg-[#D9D9D9]']"
              class="w-[105px] h-[8px] rounded-full"></div>
          </div>
        </div>

        <div :class="[currentStep == 1 ? '' : 'hidden']" class="form">
          <div class="py-[25px] space-y-[20px]">
            <p class="font-[600] text-[18px]">What are you funding for?</p>

            <div
              class="border border-[#000] rounded-2xl p-3 mt-[20px] md:mt-[0px]">
              <select
                v-model="category"
                class="w-full bg-transparent border-none outline-none">
                <option selected>Choose Category</option>
                <option v-for="cat in Categories" :value="cat">
                  {{ cat.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="space-y-[20px] py-5">
            <p class="font-[600] text-[18px]">Give your fundraiser a title?</p>
            <input
              class="border w-full border-[#000] rounded-2xl p-3"
              placeholder="Ex. Help my friend complete his school feee" />
          </div>
          <div class="space-y-[20px]">
            <p class="font-[600] text-[18px]">Tell your story</p>
            <div class="border rounded-2xl w-full border-[#000] p-3">
              <textarea
                class="w-full bg-transparent border-none outline-none"
                rows="4"></textarea>
            </div>
          </div>
        </div>

        <!-- second slide  -->
        <div :class="[currentStep == 2 ? '' : 'hidden']" class="form">
          <div class="">
            <p class="text-[32px] font-[800] font-poppins">
              what is your fundraising goal
            </p>
          </div>
          <div class="py-4 space-y-[20px]">
            <p class="font-poppins font-[600] text-[18px]">
              How much would you like to raise?
            </p>
            <div class="">
              <div class="w-full border-2 border-[#93939] rounded-2xl p-3">
                <input
                  class="bg-[#fff] w-full border-none bg-transparent outline-none rounded full" />
              </div>
              <p class="text-[#939393] text-[14px] font-[500]">
                Please Know that transaction fees including credit and debit
                charge are deducted from each donation.
              </p>
            </div>
          </div>
          <div class="space-y-[20px]">
            <p class="font-poppins font-[600] text-[18px]">
              Who are you fundraising for?
            </p>
            <div class="space-y-[30px]">
              <div
                @click="setForWho(item.target)"
                :class="[
                  forWho == item.target
                    ? 'bg-[#BDCDBE] border-[#295F2D] text-[#295F2D]'
                    : '',
                ]"
                v-for="item in forWhoList"
                class="cursor-pointer flex border-2 rounded-2xl py-[16px] justify-between px-4">
                <div class="start font-[500] text-[16px]">
                  {{ item.target }}
                </div>
                <div v-if="forWho != item.target" class="check">
                  <img src="/smallCheck.svg" alt="" />
                </div>
                <div v-if="forWho == item.target" class="check">
                  <img src="/smallChecked.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- third slide  -->
        <div
          :class="[currentStep == 3 ? '' : 'hidden']"
          class="form space-y-[30px]">
          <div class="">
            <p class="text-[32px] font-[800] font-poppins">Add an image</p>
          </div>
          <div
            class="flex justify-center items-center w-full rounded-2xl bg-[#F3F3F3] h-[300px]">
            <div class="space-y-[8px]">
              <div class="flex items-center justify-center w-full cursor-none">
                <img class="" src="/image.svg" />
              </div>
              <p
                class="text-[#939393] font-[500] text-[16px] font-poppins cursor-pointer">
                Upload image here
              </p>
            </div>
          </div>
        </div>

        <!-- success slide  -->
        <div
          :class="[currentStep == 4 ? '' : 'hidden']"
          class="form space-y-[140px] py-[100px]">
          <div class="flex items-center justify-center">
            <img class="" src="/bigCheck.svg" />
          </div>
          <div class="space-y-[30px]">
            <p class="text-center font-poppins font-[700] text-[24px]">
              Successfully Completed
            </p>
            <div
              :class="[currentStep == 4 ? '' : 'hidden']"
              class="bg-[#295F2D] cursor-pointer text-center font-[700] font-poppins px-[90px] py-[11px] text-[#fff] rounded-2xl mx-auto">
              Done
            </div>
          </div>
        </div>

        <div class="next-button py-[40px]">
          <div
            :class="[currentStep == 4 ? 'hidden' : '']"
            @click="nextSlide()"
            class="bg-[#295F2D] text-center cursor-pointer font-[700] font-poppins py-[11px] text-[#fff] rounded-2xl mx-auto">
            {{ currentStep > 2 ? "Complete Fundraising" : "Next" }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import states from "../../data/states.js";
import axios from "axios";

export default {
  name: "CreateBucket",
  data() {
    return {
      category: "choose your category",
      Categories: [],
      currentStep: 1,
      states: states,
      currentState: "select your state",
      currentCity: "",
      forWho: "",
      forWhoList: [
        { icon: "", target: "Yourself" },
        { icon: "", target: "A Friend" },
        { icon: "", target: "Charity" },
      ],
    };
  },
  async mounted() {
    axios
      .get("https://backend.puthand.com/public/api/categories")
      .then((res) => {
        this.Categories = res.data.data;
      });
  },

  methods: {
    setState(state) {
      this.currentState = state;
    },
    setCity(city) {
      this.currentCity = city;
    },
    setForWho(item) {
      this.forWho = item;
    },
    nextSlide() {
      if (this.currentStep < 4) {
        this.currentStep++;
      }
    },
    prevSlide() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
  },
};
</script>
