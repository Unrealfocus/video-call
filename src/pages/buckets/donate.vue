<template>
  <div class="bg-[#B7B7B7] lg:h-screen">
    <div class="flex lg:h-screen items-center justify-center">
      <div class="bg-[#fff] w-[820px] rounded-lg px-[45px] py-[50px]">
        <div class="">
          <button
            class="border-2 border-[#295F2D] text-[#295F2D] rounded-2xl px-[23px] py-[12px] font-[700] text-[16px]">
            Back to fund raiser
          </button>
        </div>
        <div class="steps py-[30px]">
          <div class="flex items-center space-x-[20px]">
            <div class="rounded-2xl w-[30%]">
              <img src="/donateLarge.svg" alt="" />
            </div>
            <div class="">
              <p class="text-[20px] font-[700] text-[#161616] font-poppins">
                you’re supporting David community with NEPA Light
              </p>
            </div>
          </div>
        </div>

        <!-- second slide  -->
        <div class="form">
          <div class="py-4 space-y-[20px]">
            <p class="font-poppins font-[600] text-[18px]">
              Tip Puthand services
            </p>

            <div class="">
              <p class="text-[#484848] text-[18px] font-[600] font-poppins">
                Enter your donation amount:
              </p>
              <div
                class="w-full border-2 border-[#93939] rounded-2xl p-3 flex space-x-[10px]">
                <div
                  class="bg-[#EAF9F0] flex justify-center items-center rounded w-[40px]">
                  <p class="text-[#176D3A] font-[800] text-[25px]">₦</p>
                </div>
                <input
                  v-model="amount"
                  type="number"
                  pattern="[0-9]*"
                  class="bg-[#fff] w-full border-none bg-transparent outline-none rounded full text-[31px] text-[#939393] font-[600]" />
              </div>
            </div>
            <div class="">
              <p class="text-[#484848] text-[18px] font-[600] font-poppins">
                Enter tip amount:
              </p>
              <div
                class="w-full border-2 border-[#93939] rounded-2xl p-3 flex space-x-[10px]">
                <div
                  class="bg-[#EAF9F0] flex justify-center items-center rounded w-[40px]">
                  <p class="text-[#176D3A] font-[800] text-[25px]">₦</p>
                </div>
                <input
                  v-model="tip"
                  type="number"
                  pattern="[0-9]*"
                  class="bg-[#fff] w-full border-none bg-transparent outline-none rounded full text-[31px] text-[#939393] font-[600]" />
              </div>
              <p class="text-[#939393] text-[14px] font-[500]">
                * Puthand will continue offering its services thanks to donors
                who will leave an optional amount here:
              </p>
            </div>
            <div class="">
              <p class="text-[#484848] text-[18px] font-[600] font-poppins">
                Payment Method
              </p>
              <div
                class="w-full border-2 border-[#93939] rounded-2xl p-3 flex space-x-[10px]">
                <div class="flex justify-center items-center rounded">
                  <div class="border border-[#295F2D] rounded-full p-1">
                    <div
                      class="bg-[#295F2D] w-[10px] h-[10px] rounded-full"></div>
                  </div>
                </div>
                <div
                  class="bg-[#fff] w-full border-none bg-transparent outline-none rounded full text-[21px] text-[#939393] font-[600]">
                  Paystack
                </div>
              </div>
            </div>
            <div class="">
              <p class="text-[#242424] text-[18px] font-[600] font-poppins">
                Your donation
              </p>

              <div class="w-full border-t-2 border-b-2 border-[#000] py-3">
                <div class="flex justify-between">
                  <p class="text-[#939393] font-poppins font-[600]">
                    Your donation
                  </p>
                  <p class="font-poppins text-[21px] font-[700] text-[#242424]">
                    ₦{{ amount == "" ? 0 : parseInt(amount) }}
                  </p>
                </div>
                <div class="flex justify-between">
                  <p class="text-[#939393] font-poppins font-[600]">
                    Puthand Tip
                  </p>
                  <p class="font-poppins text-[21px] font-[700] text-[#242424]">
                    ₦{{ tip == "" ? 0 : parseInt(tip) }}
                  </p>
                </div>
              </div>
              <div class="flex justify-between">
                <p class="text-[#939393] font-poppins font-[600]">Total due</p>
                <p class="font-poppins text-[21px] font-[700] text-[#242424]">
                  ₦{{ parseInt(amount) + parseInt(tip) || 0 }}
                </p>
              </div>
            </div>
            <div class="">
              <p class="text-[#242424] text-[18px] font-[600] font-poppins">
                Donation Details (Optional)
              </p>

              <div class="w-full py-3">
                <div class="flex items-center space-x-[10px]">
                  <div class="cursor-pointer">
                    <div class="w-[20px] h-[20px] border rounded"></div>
                  </div>
                  <p class="font-poppins font-[500] text-[#999999]">
                    Don’t display my name publicly on campaign
                  </p>
                </div>
              </div>
            </div>
            <div class="">
              <button
                class="w-full bg-[#295F2D] text-white rounded-2xl py-[12px] font-poppins font-[600]">
                Donate Now
              </button>
            </div>
            <div class="">
              <p class="text-center text-[#999999]">
                By continue, you agree with Puthand terms and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "donate",
  data() {
    return {
      amount: 0,
      tip: 0,
      total: 0,
    };
  },
  methods: {},
};
</script>
