<template>
  <div class="lg:h-screen">
    <div class="flex items-center justify-center p-32">
      <div class="bg-[#fff] w-[920px] rounded-lg px-[45px] py-[50px]">
        <div :class="[currentStep == 3 ? 'hidden' : '']" class="">
          <button
            @click="prevSlide()"
            class="border-2 border-[#295F2D] text-[#295F2D] rounded-2xl px-[23px] py-[12px] font-[700] text-[16px]"
          >
            Back
          </button>
        </div>

        <div :class="[currentStep == 1 ? '' : 'hidden']" class="form">
          <p class="mt-12 text-4xl font-extrabold font-poppins">Withdrawal</p>
          <p class="text-lg font-semibold my-7 font-poppins text-[#939393]">
            Total raised from this donation (fee)
          </p>
          <figure
            class="flex items-center gap-2 pb-12 text-4xl font-extrabold font-poppins"
          >
            <img src="/Naria-Icon.svg" alt="" />
            500,000
          </figure>

          <div>
            <p class="text-xl font-bold font-poppins">
              Take a minute to review this important details
            </p>
            <ul class="text-base font-medium font-poppins text-[#484848]">
              <li>
                ✔ if you don’t set-up withdrawals within 90days of your
                donation, all donation will be refunded.
              </li>
              <li>
                ✔ Setting up withdrawals will not end your campaign will
                continue to accept donations.
              </li>
              <li>
                ✔ Withdrawals to a bank account will start arriving in 2-5
                business days after setup.
              </li>
              <li>
                ✔ Need someone else to withdraw the money? No problem! you can
                grant them sole access part of this process.
              </li>
            </ul>
          </div>
        </div>

        <!-- second slide  -->
        <div :class="[currentStep == 2 ? '' : 'hidden']" class="form">
          hello2s
        </div>

        <!-- third slide  -->

        <!-- success slide  -->
        <div
          :class="[currentStep == 3 ? '' : 'hidden']"
          class="form space-y-[140px] py-[100px]"
        >
          <div class="flex items-center justify-center">
            <img class="" src="/bigCheck.svg" />
          </div>
          <div class="space-y-[30px]">
            <p class="text-center font-poppins font-[700] text-[24px]">
              Successfully Completed
            </p>
            <div
              :class="[currentStep == 3 ? '' : 'hidden']"
              class="bg-[#295F2D] cursor-pointer text-center font-[700] font-poppins px-[90px] py-[11px] text-[#fff] rounded-2xl mx-auto"
            >
              Close
            </div>
          </div>
        </div>

        <div class="next-button py-[40px]">
          <div
            :class="[currentStep == 3 ? 'hidden' : '']"
            @click="nextSlide()"
            class="bg-[#295F2D] text-center cursor-pointer font-[700] font-poppins py-[11px] text-[#fff] rounded-2xl mx-auto"
          >
            {{ currentStep > 1 ? "Complete withdrawals" : "Make withdrawal" }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import states from "../../data/states.js";
export default {
  name: "CreateBucket",
  data() {
    return {
      currentStep: 1,
    };
  },
  methods: {
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
