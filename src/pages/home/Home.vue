<script>
import Navbar from "../../components/layout/navabar_test.vue";

import Footer from "../../components/layout/Footer.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Footer,
    Navbar,
  },
  data() {
    return {
      buckets: [],
      assets: "",
      loading: false,
    };
  },
  async mounted() {
    this.loading = true;
    this.assets = import.meta.env.VITE_APP_ASSETS;
    const app = import.meta.env.VITE_APP_ENGINE + "buckets";
    await axios.get(app).then((res) => {
      this.buckets = res.data.data;
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

      <section class="bg-[#FFF] pt-4 pb-10 p-8">
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
                <router-link to=""
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
        <ul class="flex overflow-x-scroll gap-7 no-scrollbar">
          <li v-for="item in buckets" class="flex-shrink-0 w-72">
            <figure>
              <img
                :src="assets + item.images[0].image_url"
                class="object-cover object-center w-full h-44 rounded-2xl"
                alt="" />
              <button
                type="button"
                class="flex items-center px-2 py-1 my-3 rounded-lg bg-appGreen100">
                <span
                  class="text-sm font-bold shadow-md text-appGreen200 font-poppins shadow-appGreen100">
                  {{ item.category }}
                </span>
                <img src="/Vector.svg" alt="vector" class="px-2" />
              </button>
              <div class=" ">
                <p class="text-base font-semibold font-poppins">
                  {{
                    item.bucket.title.length > 24
                      ? item.bucket.title.slice(0, 24) + "..."
                      : item.bucket.title
                  }}
                </p>
                <p class="text-[10px]">by {{ item.author }}</p>
              </div>
              <div class=" ">
                <p class="mt-5 mb-2 text-sm font-medium font-poppins">
                  {{
                    item.bucket.description.length > 150
                      ? item.bucket.description.slice(0, 150) + "..."
                      : item.bucket.description
                  }}
                </p>
              </div>

              <dl class="flex py-[10px]">
                <div class="flex flex-1 mr-3 rounded-full bg-appGray100">
                  <span
                    :class="'w-[' + item.percentage + '%]'"
                    class="bg-yellow-500 w-[60%] rounded-full" />
                </div>
                <data
                  value="60"
                  class="font-poppins font-medium text-sm text-[#000000]"
                  >{{ item.percentage }}%</data
                >
              </dl>

              <dl class="flex justify-between my-4">
                <span class="flex">
                  <dt
                    class="font-bold font-poppins text-xs mr-1 text-[#000000]">
                    Raised:
                  </dt>

                  <dd class="font-medium font-poppins text-xs text-[#000000]">
                    ₦{{ item.donated }}
                  </dd>
                </span>
                <span class="flex">
                  <dt
                    class="font-bold font-poppins text-xs text-[#295F2D] mr-1">
                    Goal:
                  </dt>
                  <dd class="font-medium font-poppins text-xs text-[#295F2D]">
                    ₦{{ item.bucket.goal }}
                  </dd>
                </span>
              </dl>
              <button
                @click="this.$router.push('/bucket/' + item.bucket.bucket_id)"
                class="bg-appGreen300 w-full rounded-full py-2 font-semibold font-poppins text-lg text-[#FFFFFF]"
                type="button">
                Donate
              </button>
            </figure>
          </li>
        </ul>
      </section>

      <section class="p-8 pt-4 pb-10 bg-appGray100 lg:relative">
        <section class="items-center justify-center pb-10 mx-auto">
          <section
            class="bg-[#FEF4C3] p-9 w-[90%] md:w-2/3 mx-auto rounded-2xl inset-x-0 top-0 mt-6 space-y-5">
            <p
              class="text-center font-poppins font-extrabold text-3xl text-[#333333]">
              We Would Like To Send You Emails
            </p>
            <p
              class="text-center font-poppins font-normal text-base text-[#242424] pt-2">
              Sign up to our newsletters to know what we are up to and what’
              trending
            </p>

            <!-- <form
              @submit.prevent="submitForm"
              action="input"
              class="border-2 h-[200px] relative"
            >
              <div class="relative flex border-2">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <img src="/sms.svg" alt="" />
                </div>
                <input
                  type="email"
                  id="email-address-icon"
                  class="bg-[#FFFFFF] rounded-lg block w-full pl-10 p-2.5"
                  placeholder="Enter your email"
                />
                <button
                  class="absolute inset-y-1 right-0 flex items-center px-5 text-[white] w-[90px] mr-2 pointer-events-none bg-[#939393] rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form> -->
            <div class="relative">
              <div class="absolute top-[0.9rem] left-3">
                <img src="/sms.svg" alt="" />
              </div>
              <input
                type="email"
                id="email-address-icon"
                class="bg-[#FFFFFF] rounded-lg block w-full pl-10 p-2.5 outline-none"
                placeholder="Enter your email" />
              <button
                class="inset-y-1 right-0 flex md:mx-0 mx-auto items-center px-5 text-[white] w-[90px] md:mr-2 bg-[#939393] rounded-lg h-[36px] lg:absolute mt-3 lg:mt-0"
                @submit.prevent="submitForm"
                action="input">
                Submit
              </button>
            </div>
          </section>
        </section>
        <Footer></Footer>
      </section>
    </section>
  </section>
</template>
