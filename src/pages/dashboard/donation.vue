<template>
  <div class="bg-[#B7B7B7] lg:h-screen">
    <div class="flex items-center justify-center lg:h-screen">
      <div class="bg-[#fff] w-[820px] rounded-lg px-[45px] py-[50px]">
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
          <p class="pt-10 pb-16 text-4xl font-extrabold font-poppins">
            Bank Details
          </p>

          <div>
            <p class="text-base font-semibold font-poppins">Bank Names</p>
            <div class="border border-[#000] rounded-2xl p-3">
              <select
                v-model="currentBank"
                class="w-full bg-transparent border-none outline-none"
              >
                <option>Select your Bank</option>
                <option
                  :value="bank"
                  v-for="bank in nigeriaBanks"
                  :key="bank.name"
                >
                  {{ bank.name }}
                </option>
              </select>
            </div>
          </div>

          <div>
            <p class="text-base font-semibold font-poppins">Account Number</p>
            <input
              class="mb-4 app-input"
              type="number"
              name="account number"
              id="account number"
              placeholder="123456789"
              v-model="accountnumber"
              @input="handleInputChange"
            />
          </div>
          <div>
            <p class="text-base font-semibold font-poppins">Account Names</p>
            <input
              class="mb-4 app-input"
              type="name"
              name="account name "
              id="account name"
              placeholder="Anietie David Sampson"
              v-model="accountname"
            />
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
              By accepting, I agree to comply with data regulations as outlined
              in the Puthand Privacy Policy, granting my consent for the
              collection and processing of my personal data.
            </p>
          </div>
        </div>

        <!-- third slide  -->

        <!-- success slide  -->
        <div :class="[currentStep == 3 ? '' : 'hidden']" class="form py-[30px]">
          <div class="flex items-center justify-center">
            <img class="" src="/withdrawal.svg" />
          </div>

          <div>
            <p
              class="flex justify-center mx-auto font-extrabold sm:text-2xl md:text-3xl font-poppins"
            >
              Your Withdrawal request
            </p>

            <span
              class="flex justify-center pb-5 mx-auto font-extrabold sm:text-2xl md:text-3xl font-poppins"
            >
              has been submitted</span
            >
            <p
              class="flex justify-center mx-auto text-sm md:text-base font-medium font-poppins text-[#242424]"
            >
              you can track your withdrawal on your
              <br class="flex justify-center md:hidden sm:justify-center" />
              transaction history
            </p>

            <div>
              <p class="text-lg font-bold my-7 font-poppins">Bank Details</p>
              <div
                class="flex justify-between my-4 text-base font-medium font-poppins"
              >
                <p>Bank Name</p>
                <div class="flex items-center">
                  <!-- <p>GT Bank</p> -->
                  <p>{{ currentBank }}</p>
                </div>
              </div>
              <div
                class="flex justify-between text-base font-medium font-poppins"
              >
                <p>Accoun Number</p>
                <p>{{ accountnumber }}</p>
              </div>
              <div
                class="flex justify-between my-4 text-base font-medium font-poppins"
              >
                <p>Account Holder Name</p>
                <p>{{ accountname }}</p>
              </div>
              <div
                class="flex justify-between text-base font-medium font-poppins"
              >
                <p>Amount Withdrawal</p>
                <p class="text-base font-bold">₦500,000</p>
              </div>
              <div
                class="flex justify-between my-4 text-base font-medium font-poppins"
              >
                <p>Processed On</p>
                <p class="text-base font-bold">Feb 2, 2023. 03:55pm</p>
              </div>
            </div>
          </div>
          <div class="space-y-[30px]">
            <!-- <p class="text-center font-poppins font-[700] text-[24px]">
              Successfully Completed
            </p> -->
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
import banks from "../../assets/banks.js";
export default {
  name: "CreateBucket",
  components: {
    banks,
  },
  data() {
    return {
      currentStep: 1,
      nigeriaBanks: banks,
      currentBank: "select you bank",
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
    setBank(bank) {
      this.currentBank = bank;
    },
  },
};
</script>
