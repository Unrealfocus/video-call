<script>
import Navbar from "../../components/layout/navabar_test.vue";

import Footer from "../../components/layout/Footer.vue";
export default {
  name: "index",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      faqs: [
        {
          id: 1,
          question: "What is Puthand",
          answer: "Puthand is a platform for...",
          open: false,
        },
        {
          id: 2,
          question: "What is Puthand",
          answer: "Puthand is a platform for...",
          open: false,
        },
        {
          id: 3,
          question: "What is Puthand",
          answer: "Puthand is a platform for...",
          open: false,
        },
        {
          id: 4,
          question: "What is Puthand",
          answer: "Puthand is a platform for...",
          open: false,
        },
        {
          id: 5,
          question: "What is Puthand",
          answer: "Puthand is a platform for...",
          open: false,
        },
        {
          id: 6,
          question: "What is Puthand",
          answer: "Puthand is a platform for...",
          open: false,
        },
        // Add more FAQ items here
      ],
    };
  },
  methods: {
    toggleDropdown(id) {
      this.faqs = this.faqs.map((item) => {
        if (item.id === id) {
          item.open = !item.open;
        } else {
          item.open = false;
        }
        return item;
      });
    },
  },
};
</script>

<template>
  <main>
    <Navbar />
    <section>
      <section class="relative">
        <section>
          <div class="hidden lg:block">
            <img src="FAQ1.svg" alt="faq" class="w-full" />
          </div>
          <div class="hidden lg:hidden md:block">
            <img src="FAQ2.svg" alt="faq" class="w-full" />
          </div>
          <div class="md:hidden">
            <img src="FAQ3.svg" alt="faq" class="w-full" />
          </div>
        </section>

        <div
          class="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full"
        >
          <!-- Add your search bar here -->
          <p class="pb-5 text-6xl font-extrabold text-white font-inter">
            How can we help you
          </p>
          <div class="relative flex items-center">
            <div class="absolute left-0">
              <img src="search-normal.svg" alt="" class="px-2" />
            </div>
            <input
              type="search"
              placeholder="Search..."
              class="w-[620px] rounded-full py-2 px-8 outline-none"
            />
          </div>
        </div>
      </section>

      <section class="p-8 bg-[#F9F9F9]">
        <p class="text-4xl font-semibold font-poppins text-[#000000]">
          Frequently Asked Questions (FAQs)
        </p>
        <ul class="p-10">
          <li
            v-for="item in faqs"
            :key="item.id"
            class="relative pb-3 text-xl font-semibold font-poppins"
          >
            <div class="px-3 py-3 bg-white rounded-xl">
              <button
                @click="toggleDropdown(item.id)"
                class="flex items-center justify-between w-full"
              >
                <span>{{ item.question }}</span>
                <span
                  :class="{ 'transform rotate-180': item.open }"
                  class="transition-transform duration-300"
                >
                  <svg
                    class="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              <div v-if="item.open" class="p-2 mt-2 rounded shadow">
                <p>{{ item.answer }}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section class="p-8">
        <div
          class="content bg-[#FEF7D6] md:py-[110px] py-[20px] lg:py-[40px] px-[10px] lg:px-[34px] rounded-3xl md:flex items-center"
        >
          <div class="text md:w-1/2">
            <p
              class="md:w-2/3 font-[600] text-[28px] lg:text-[44px] leading-[36px] lg:leading-[48px] font-poppins"
            >
              Become a part of our community today.
            </p>
            <p class="pt-[16px] font-[500]">
              Welcome to PutHand! A community of compassionate and dedicated
              individuals will attend to you shortly. Our mission is simple and
              you are invited to join our network of donors, fundraisers, and
              supporters. As a member, you have the power to transform lives,
              support meaningful projects, and put a smile on people’s faces. It
              doesn’t matter what you are passionate about, there’s someone for
              everyone. <br /><br />Start your journey with PutHand and become a
              catalyst for change. Welcome to the PutHand community.
            </p>
            <div class="md:py-[120px] py-12">
              <router-link to=""
                ><button
                  @click="this.$router.push('/buckets')"
                  class="bg-[#295F2D] text-white px-[23px] py-[12px] rounded-full font-[700]"
                >
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
      </section>
    </section>

    <Footer />
  </main>
</template>
