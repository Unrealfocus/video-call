<template>
  <div
    v-if="loading == true"
    class="loading w-full h-screen flex justify-center items-center">
    <img src="/logo1.svg" class="animate-bounce" />
  </div>
  <div v-if="loading == false" class="bg-[#B7B7B7] lg:h-screen">
    <div class="flex lg:h-screen items-center justify-center">
      <div
        class="bg-[#fff] w-[820px] rounded-lg px-[12px] md:px-[45px] py-[50px]">
        <div class="py-[10px]">
          <button
            @click="prevSlide"
            class="border-2 font-poppins text-[#242424] rounded-2xl px-[23px] py-[12px] font-[700] text-[16px]">
            Back to fund raiser
          </button>
        </div>
        <div class="steps py-[30px]">
          <div class="md:flex items-center space-x-[20px]">
            <div class="rounded-2xl md:w-[30%]">
              <img
                :src="assets + bucket.images[0].image_url"
                class="md:w-[150px]"
                alt="" />
            </div>
            <div class="">
              <p class="text-[20px] font-[700] text-[#161616] font-poppins">
                {{ bucket.bucket.title }}
              </p>
              <p class="font-poppins">
                Your donation will benefit {{ bucket.author }}
              </p>
            </div>
          </div>
        </div>

        <div class="form">
          <div class="py-4 space-y-[20px]">
            <!-- first slide  -->
            <div class="" :class="[currentPage == 1 ? '' : 'hidden']">
              <p class="font-poppins font-[600] text-[18px]">
                Tip Puthand services
              </p>
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
            </div>

            <!-- page 2  -->
            <div class="" :class="[currentPage == 2 ? '' : 'hidden']">
              <div class="space-y-[10px]">
                <p class="text-[#484848] text-[18px] font-[600] font-poppins">
                  Tell us about yourself
                </p>
                <div
                  class="w-full border-2 border-[#93939] rounded-2xl p-3 flex space-x-[10px]">
                  <div class="flex justify-center items-center rounded">
                    <div class="border border-[#295F2D] rounded-full p-1">
                      <div
                        class="bg-[#295F2D] w-[10px] h-[10px] rounded-full"></div>
                    </div>
                  </div>
                  <input
                    class="bg-[#fff] w-full border-none bg-transparent outline-none rounded full text-[21px] text-[#939393] font-[600]/"
                    placeholder="Email"
                    v-model="email" />
                </div>
                <div
                  class="w-full border-2 border-[#93939] rounded-2xl p-3 flex space-x-[10px]">
                  <div class="flex justify-center items-center rounded">
                    <div class="border border-[#295F2D] rounded-full p-1">
                      <div
                        class="bg-[#295F2D] w-[10px] h-[10px] rounded-full"></div>
                    </div>
                  </div>
                  <input
                    class="bg-[#fff] w-full border-none bg-transparent outline-none rounded full text-[21px] text-[#939393] font-[600]/"
                    placeholder="Full Name"
                    v-model="name" />
                </div>
                <div
                  class="w-full border-2 border-[#93939] rounded-2xl p-3 flex space-x-[10px]">
                  <div class="flex justify-center items-center rounded">
                    <div class="border border-[#295F2D] rounded-full p-1">
                      <div
                        class="bg-[#295F2D] w-[10px] h-[10px] rounded-full"></div>
                    </div>
                  </div>
                  <input
                    class="bg-[#fff] w-full border-none bg-transparent outline-none rounded full text-[21px] text-[#939393] font-[600]/"
                    placeholder="Phone Number"
                    v-model="phone" />
                </div>
              </div>
            </div>
            <!-- third slide  -->
            <div class="" :class="[currentPage == 3 ? '' : 'hidden']">
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
                <p
                  class="text-[#242424] text-[18px] font-[600] font-poppins py-2">
                  Overview
                </p>
                <div class="w-full border-t-2 border-b-2 border-[#000] py-3">
                  <div class="flex justify-between">
                    <p class="text-[#939393] font-poppins font-[600]">
                      Your donation
                    </p>
                    <p
                      class="font-poppins text-[21px] font-[700] text-[#242424]">
                      ₦{{ amount == "" ? 0 : parseInt(amount) }}
                    </p>
                  </div>
                  <div class="flex justify-between">
                    <p class="text-[#939393] font-poppins font-[600]">
                      Puthand Tip
                    </p>
                    <p
                      class="font-poppins text-[21px] font-[700] text-[#242424]">
                      ₦{{ tip == "" ? 0 : parseInt(tip) }}
                    </p>
                  </div>
                </div>
                <div class="flex justify-between">
                  <p class="text-[#939393] font-poppins font-[600]">
                    Total due
                  </p>
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
                      <div
                        @click="hide_donor = !hide_donor"
                        :class="[
                          hide_donor == false ? 'border' : 'bg-blue-300',
                        ]"
                        class="w-[20px] h-[20px] border rounded"></div>
                    </div>
                    <p class="font-poppins font-[500] text-[#999999]">
                      Don’t display my name publicly on campaign
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <button
                v-if="currentPage === 3"
                @click="payWithPaystack"
                class="w-full text-white rounded-2xl py-[12px] font-poppins font-[600] bg-[#295F2D]">
                Donate Now
              </button>
              <div v-if="currentPage !== 3" class="flex justify-between">
                <button
                  @click="prevSlide"
                  class="text-[#295F2D] rounded-2xl py-[12px] font-poppins font-[600] border border-[#295F2D] px-5">
                  previous
                </button>
                <button
                  @click="nextSlide"
                  class="text-white rounded-2xl py-[12px] font-poppins font-[600] bg-[#295F2D] px-5">
                  Next
                </button>
              </div>
            </div>

            <div class="">
              <!-- <p class="text-center text-[#999999]">
                By continue, you agree with Puthand terms and Privacy Policy.
              </p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import swal from "sweetalert";
import axios from "axios";
export default {
  name: "donate",
  components: {},
  data() {
    return {
      loading: false,
      currentPage: 1,
      complete: false,
      amount: "",
      tip: "",
      total: 0,
      email: "",
      name: "",
      phone: "",
      error: true,
      bucket: "",
      assets: "",
      hide_donor: false,
    };
  },
  async created() {
    this.loading = true;

    const app = import.meta.env.VITE_APP_ENGINE;
    this.assets = import.meta.env.VITE_APP_ASSETS;

    //get buckets
    await axios.get(app + "bucket/" + this.$route.params.id).then((res) => {
      this.bucket = res.data.data;
      console.log(this.bucket);
    });
    this.loading = false;
  },
  methods: {
    nextSlide() {
      this.currentPage++;
    },
    prevSlide() {
      if(this.currentPage ==1 ){
        this.$router.push('/bucket/' + this.$route.params.id)
      }
      this.currentPage--;
    },
    payWithPaystack() {
      //validate inputs
      if (this.email == "") {
        swal(
          "Enter a valid email address",

          {
            icon: "error",
            buttons: false,
            timer: 3000,
            class: "font-poppins font-[700] text-[300px]",
          }
        );
        return;
      }

      var handler = PaystackPop.setup({
        key: import.meta.env.VITE_PAYSTACK_KEY,
        firstname: this.name,
        email: this.email,

        amount: parseInt(this.amount + this.tip) * 100,

        currency: "NGN", // Use GHS for Ghana Cedis or USD for US Dollars

        metadata: {
          custom_fields: [
            {
              bucket_id: this.$route.params.id,
              amount: this.amount,
              tip: this.tip,
              hide_donor: true,
            },
          ],
        },

        callback: function (response) {
          //this happens after the payment is completed successfully

          var reference = response.reference;

          swal(
            "Yay! your donation has been recieved with love. Please feel free to tell others about my need :) Thank you.",
            {
              buttons: false,
              timer: 3000,
              class: "font-poppins font-[700] text-[300px]",
            }
          );

          //call backend and confirm the transaction

          //redirect to dashboard
          // this.$router.push("/dashboard");
        },

        onClose: function () {
          // alert("Transaction was not completed, window closed.");
          swal("Transaction was not completed, Please try again.", {
            buttons: false,
            timer: 3000,
            class: "font-poppins font-[700] text-[300px]",
          });
        },
      });

      handler.openIframe();
      this.$router.push("/bucket/" + this.$route.params.id);
    },
  },
};
</script>
