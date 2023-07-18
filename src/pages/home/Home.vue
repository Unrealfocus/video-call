<script>
import Navbar from "../../components/layout/navabar_test.vue";
import Footer from "../../components/layout/Footer.vue";
import axios from "axios";
import DonationCard from "../../components/cards/donationCard.vue";
import Newsletter from "../../components/cards/newsletter.vue";

export default {
  name: "Home",
  components: {
    Footer,
    Navbar,
    DonationCard,
    Newsletter,
  },
  data() {
    return {
      buckets: [],
      assets: "",
      loading: false,
      email: "",
      show: false,
      message: "",
    };
  },
  methods: {
    async submitForm(email) {
      const formData = {
        email_address: this.email,
        status: "subscribed",
      };

      this.email = "";
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 5000);
    },
    hideAlert() {
      this.show = false;
    },
  },
  async mounted() {
    this.loading = true;
    this.assets = import.meta.env.VITE_APP_ASSETS;
    const app = import.meta.env.VITE_APP_ENGINE + "buckets";
    await axios.get(app).then((res) => {
      this.buckets = res.data.data;
      this.loading = false;
    });
  },
};
</script>

<template>
  <section>
    <Navbar />
    <!--Hero Section-->
    <div
      v-if="show"
      class="fixed top-0 right-0 z-40 px-4 py-3 text-teal-900 bg-white border-l-4 border-green-500 rounded-lg rounded-b shadow-md opacity-100"
      role="alert">
      <div class="flex">
        <div class="py-1 pr-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="w-6 h-6 bi bi-check-circle-fill"
            viewBox="0 0 16 16"
            id="IconChangeColor">
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
              id="mainIconPathAttribute"
              fill="green"></path>
          </svg>
        </div>
        <div>
          <p class="font-bold">Thank you</p>
          <p class="text-sm">You have Register successfully.</p>
        </div>
        <div class="relative top-0 right-0">
          <button @click="hideAlert" class="close-btn">&times;</button>
        </div>
      </div>
    </div>
    <div
      v-if="show"
      class="bg-white border-l-4 border-green-500 rounded-b text-teal-900 px-4 py-3 shadow-md rounded-lg fixed top-0 right-0 z-40 opacity-100"
      role="alert">
      <div class="flex">
        <div class="py-1 pr-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-check-circle-fill h-6 w-6"
            viewBox="0 0 16 16"
            id="IconChangeColor">
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
              id="mainIconPathAttribute"
              fill="green"></path>
          </svg>
        </div>
        <div>
          <p class="font-bold">Thank you</p>
          <p class="text-sm">You have Register successfully.</p>
        </div>
        <div class="relative top-0 right-0">
          <button @click="hideAlert" class="close-btn">&times;</button>
        </div>
      </div>
    </div>
    <div
      v-if="loading == true"
      class="flex items-center justify-center w-full h-screen loading">
      <img src="/logo1.svg" class="animate-bounce" />
    </div>
    <section v-if="loading == false" class="bg-[url('/Vector2.svg')]">
      <section class="bg-[#F3F3F3] pb-16 relative">
        <section class="flex items-center justify-center">
          <p
            class="text-center font-poppins md:px-[41px] md:font-[800] md:leading-[56px] leading-[44px] text-[36px] font-bold md:text-[66px] mt-10 md:mt-28">
            MAKE SOMEONE SMILE <br class="hidden md:block" />
            TODAY- PUT HAND IN THEIR <br class="hidden md:block" />

            BUCKET. 
          </p>
        </section>
        <section
          class="flex text-center justify-center my-7 font-poppins md:font-medium md:text-base leading-6 items-center text-[14px] font-[500] md:px-[41px]">
          Build a dream bucket and invite friends and families, strangers to
          donate. 
        </section>

        <div class="flex justify-center">
          <button
            @click="this.$router.push('/buckets')"
            class="gap-2 text-base font-bold font-poppins rounded-full bg-[#2A5E2A] border-[1px] border-[#fff] text-[#fff] md:py-3 px-[12px] py-[8px] text-[14px] md:text-[14px] md:px-10 m-3">
            Let's Put Hands
          </button>
          <button
            @click="this.$router.push('/signup')"
            class="gap-2 text-base font-bold font-poppins rounded-full bg-[#fff] border-[1px] border-[#2A5E2A] text-[#2A5E2A] md:py-3 text-[14px] px-[12px] md:px-10 m-3">
            Create Account
          </button>
        </div>

        <section>
          <div class="hidden lg:block">
            <img
              src="/Group53.svg"
              alt=""
              class="items-center justify-center mx-auto -mt-8" />
            <img
              src="/gradient.svg"
              alt=""
              :draggable="false"
              class="absolute opacity-50 bottom-10" />
          </div>
          <div class="-mt-14 md:hidden">
            <img src="/Group6.svg" alt="" />
            <img
              src="/gradient2.svg"
              alt=""
              :draggable="false"
              class="absolute opacity-50 bottom-10" />
          </div>
        </section>
      </section>

      <!-- How Put Hand Works -->

      <section class="bg-[#FFF] pt-4 pb-10">
        <div class="w-[90%] xl:w-[1280px] mx-auto">
          <div class="">
            <p
              class="md:font-[800] font-[700] text-[20px] md:text-[52px] font-poppins text-[#242424]">
              IT’S NOT ROCKET SCIENCE
            </p>
            <p
              class="font-[500] text-[16px] font-poppins py-[20px] lg:py-[54px] text-[#484848]">
              it takes less than five minutes
            </p>
          </div>
          <!-- cards  -->
          <div
            class="grid-flow-row grid-cols-2 gap-2 md:grid lg:grid-cols-4 auto-rows-max">
            <div
              class="group/item bg-[#F3F3F3] m-2 rounded-lg relative bg-cover">
              <div class="py-[46px]">
                <div class="w-full">
                  <img src="/handStar.svg" class="mx-auto" />
                  <p
                    class="w-[80%] mx-auto text-center font-[600] font-poppins text-[18px]">
                    Create an account
                  </p>
                </div>
              </div>
            </div>
            <div
              class="group/item bg-[#F3F3F3] m-2 rounded-lg relative bg-cover">
              <div class="py-[46px]">
                <div class="w-full">
                  <img src="/Icon02.svg" class="mx-auto" />
                  <p
                    class="w-[80%] mx-auto text-center font-[600] font-poppins text-[18px]">
                    Register attendance
                  </p>
                </div>
              </div>
            </div>
            <div
              class="group/item bg-[#F3F3F3] m-2 rounded-lg relative bg-cover">
              <div class="py-[46px]">
                <div class="w-full">
                  <img src="/Icon01.svg" class="mx-auto" />
                  <p
                    class="w-[80%] mx-auto text-center font-[600] font-poppins text-[18px]">
                    Tell the class why you created a bucket
                  </p>
                </div>
              </div>
            </div>
            <div
              class="group/item m-2 rounded-lg relative bg-[#F3F3F3] bg-cover hover:text-[#F8B83A] hover:bg-[#2A5E2A] transition-all duration-300">
              <div class="py-[46px]">
                <div class="w-full">
                  <img src="/Icon03.svg" class="mx-auto" />
                  <p
                    class="w-[80%] mx-auto text-center font-[600] font-poppins text-[18px]">
                    share the story with everyone
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- bottom texts  -->
          <div
            class="text-[#484848] font-[400] font-poppins text-[18px] py-[40px]">
            <p>
              As soon as the campaign is live, share it with family and friends
              and strangers. Donors can contribute to the bucket using their
              credit or debit card, and when your goal is met, the funds are
              immediately transferred directly to your account. You can also
              request a premature withdrawal, if the goal is taking too long to
              be met.
            </p>
          </div>
        </div>
      </section>

      <section class="bg-appGray100 font-poppins">
        <div
          class="w-[90%] xl:w-[1280px] mx-auto py-[64px] md:py-[67px] lg:py-[49px]">
          <div
            class="content bg-[#FEF7D6] md:py-[110px] py-[20px] lg:py-[40px] px-[10px] lg:px-[34px] rounded-3xl md:flex items-center">
            <div class="text md:w-1/2">
              <p
                class="md:w-2/3 font-[600] text-[28px] lg:text-[44px] leading-[36px] lg:leading-[48px] font-poppins">
                Become a part of our community today.
              </p>
              <p class="pt-[16px] font-[500]">
                Welcome to PutHand! A community of compassionate and dedicated
                individuals will attend to you shortly. Our mission is simple
                and you are invited to join our network of donors, fundraisers,
                and supporters. As a member, you have the power to transform
                lives, support meaningful projects, and put a smile on people’s
                faces. It doesn’t matter what you are passionate about, there’s
                someone for everyone. <br /><br />Start your journey with
                PutHand and become a catalyst for change. Welcome to the PutHand
                community.
              </p>
              <div class="py-[50px]">
                <router-link to="/buckets"
                  ><button
                    class="bg-[#295F2D] text-white px-[23px] py-[12px] rounded-full font-[700]">
                    Let's Put Hands
                  </button></router-link
                >
              </div>
            </div>
            <div class="flex items-center justify-center image md:w-1/2">
              <img src="/hands2.svg" class="hidden md:block" />
              <img src="/hands2mobile.svg" class="md:hidden" />
            </div>
          </div>
        </div>
      </section>

      <section
        class="container p-8 pt-4 pb-10 mx-auto bg-white md:w-5/6 lg:w-4/5">
        <p
          class="justify-start pt-3 mb-8 text-3xl font-extrabold leading-10 font-poppins md:text-4xl">
          DO YOU WANT TO PUT HAND FOR SOMEONE TODAY? 
        </p>
        <p class="mb-4 text-base font-medium leading-4 font-poppins">
          Here are some campaigns you can donate and put a smile on someone’s
          face: 
        </p>

        <ul
          class="flex grid-flow-row grid-cols-2 gap-10 overflow-x-scroll md:grid lg:grid-cols-4 auto-rows-max no-scrollbar">
          <DonationCard
            v-for="item in buckets"
            :key="item.id"
            :item="item"
            :assets="assets" />
        </ul>
      </section>
      <!-- newsletter  -->
      <Newsletter />
      <!-- footer  -->
      <Footer />
    </section>
  </section>
</template>
