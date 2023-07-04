<script>
import Navbar from "../../components/layout/navabar_test.vue";
import Footer from "../../components/layout/footer.vue";
import { ref, computed, onMounted } from "vue";

export default {
  name: "works",
  components: {
    Navbar,
    Footer,
  },
  setup() {
    const words = ref(["you", "a friend", "Charity"]);
    const colors = ref(["#2AC769", "#295F2D ", "#E6D171"]); // Array of colors for each word
    const currentIndex = ref(0);

    const currentWord = computed(() => words.value[currentIndex.value]);
    const currentWordColor = computed(() => colors.value[currentIndex.value]);

    const updateIndex = () => {
      currentIndex.value = (currentIndex.value + 1) % words.value.length;
    };

    onMounted(() => {
      setInterval(updateIndex, 2000);
    });

    return {
      currentWord,
      currentWordColor,
    };
  },
};
</script>

<template>
  <Navbar class="" />

  <main class="bg-[##ffffff] mt-10">
    <section
      class="w-[90%] xl:w-[1280px] mb-10 mx-auto grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 items-center ]"
    >
      <section class="py-10 md:mt-20">
        <h1
          class="flex px-4 py-2 font-bold bg-appGreen100 text-appGreen200 w-max rounded-xl font-poppins"
        >
          How it works
        </h1>
        <h2
          class="my-12 mt-4 text-4xl font-extrabold font-poppins md:text-5xl lg:text-6xl"
        >
          A place for <br />

          <span class="flex mt-3">
            <div class="animate-container">
              <transition name="fade" mode="out-in">
                <div
                  :key="currentWord"
                  class="animate-word animate-bounce"
                  v-slide-y-transition
                >
                  <span
                    :style="`color: ${currentWordColor}; animation: bounce 0.5s infinite`"
                    >{{ currentWord }}</span
                  >
                </div>
              </transition>
            </div>
          </span>
        </h2>
        <button
          type="button"
          class="flex gap-2 rounded-full bg-[#2A5E2A] border-[1px] border-[#fff] text-[#fff] py-3 text-[14px] px-10 m-3"
        >
          <img src="/puthand.svg" alt="" />
          <!-- <span class="text-base font-bold font-poppins">Let's Put Hands</span> -->
          <router-link to=""
            ><button
              @click="this.$router.push('/buckets')"
              class="text-base font-bold font-poppins"
            >
              Let's Put Hands
            </button></router-link
          >
        </button>
      </section>
      <figure class="relative">
        <img src="/works.svg" alt="hero" />
      </figure>
    </section>
    <section class="pt-4 pb-12 bg-[#F3F3F3] lg:relative">
      <section class="bg-[#FFF] pt-4 pb-10">
        <div class="w-[90%] xl:w-[1280px] mx-auto">
          <div class="">
            <p
              class="font-[800] text-[26px] lg:text-[52px] font-poppins text-[#242424]"
            >
              How PutHand Works
            </p>
            <p
              class="font-[500] text-[16px] font-poppins py-[20px] lg:py-[54px] text-[#484848]"
            >
              To create a bucket for people to PutHand, here is a step by step
              easy process that won’t stress you.
            </p>
          </div>
          <!-- cards  -->
          <div
            class="grid-flow-row grid-cols-2 gap-2 md:grid lg:grid-cols-4 auto-rows-max"
          >
            <div
              class="group/item m-2 rounded-lg relative bg-[#F3F3F3] bg-cover hover:text-[#F8B83A] hover:bg-[#2A5E2A] transition-all duration-300"
            >
              <div class="py-[46px]">
                <div class="w-full">
                  <img src="/handStar.svg" class="mx-auto" />
                  <p class="w-[80%] mx-auto text-center font-semibold text-lg">
                    Create an account
                  </p>
                </div>
              </div>
            </div>
            <div
              class="group/item m-2 rounded-lg relative bg-[#F3F3F3] bg-cover hover:text-[#F8B83A] hover:bg-[#2A5E2A] transition-all duration-300"
            >
              <div class="py-[46px]">
                <div class="w-full">
                  <img src="/Icon02.svg" class="mx-auto" />
                  <p
                    class="w-[80%] mx-auto text-center font-[600] font-poppins text-[18px]"
                  >
                    Register attendance
                  </p>
                </div>
              </div>
            </div>

            <div
              class="group/item m-2 rounded-lg relative bg-[#F3F3F3] bg-cover hover:text-[#F8B83A] hover:bg-[#2A5E2A] transition-all duration-300"
            >
              <div class="py-[46px]">
                <div class="w-full">
                  <img src="/Icon01.svg" class="mx-auto" />
                  <p
                    class="w-[80%] mx-auto text-center font-[600] font-poppins text-[18px]"
                  >
                    Tell the class why you created a bucket
                  </p>
                </div>
              </div>
            </div>
            <div
              class="group/item m-2 rounded-lg relative bg-[#F3F3F3] bg-cover hover:text-[#F8B83A] hover:bg-[#2A5E2A] transition-all duration-300"
            >
              <div class="py-[46px]">
                <div class="w-full">
                  <img src="/Icon03.svg" class="mx-auto" />
                  <p
                    class="w-[80%] mx-auto text-center font-[600] font-poppins text-[18px]"
                  >
                    share the story with everyone
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- bottom texts  -->
          <div
            class="text-[#484848] font-[400] font-poppins text-[18px] py-[40px]"
          >
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
      <Footer></Footer>
    </section>
  </main>
</template>
