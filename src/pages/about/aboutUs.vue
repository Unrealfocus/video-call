<script setup>
import Navbar from "../../components/layout/navabar_test.vue";
import Footer from "../../components/layout/footer.vue";
import { ref } from "vue";

const images = ref([
  {
    img: "/Component9.svg",
    title: "Transparency",
    subtitle:
      "We are honest and open in every decision regarding your  money and other operations.",
  },
  {
    img: "/Component7.svg",
    title: "Inclusivity",
    subtitle: "This is home. Everyone is welcome.",
  },
  {
    img: "/Component8.svg",
    title: "Responsiveness",
    subtitle: "We’ll listen and respond to you anytime and any day",
  },
]);
</script>

<template>
  <Navbar />

  <main class="mt-5">
    <!-- HERO SECTION STARTS -->
    <section
      class="grid items-center grid-cols-1 gap-5 p-8 md:grid-cols-2 w-[100%] xl:w-[1380px] mx-auto"
    >
      <section class="py-10 md:mt-20">
        <h1
          class="flex px-4 py-2 font-bold bg-appGreen100 text-appGreen200 w-max rounded-xl font-poppins"
        >
          Our Mission
        </h1>
        <h2
          class="my-12 text-3xl font-extrabold font-inter md:text-5xl lg:text-6xl"
        >
          Empowering you <br class="hidden lg:block" />
          and people you<br class="hidden lg:block" />
          may know through <br class="hidden lg:block" />
          fundraising.
        </h2>
        <p class="text-sm font-medium font-poppins sm:text-base">
          YOU MATTER. The need to create a crowdfunding platform that caters to
          transparency and accessibility of funds is why PutHand was created. 
        </p>
      </section>

      <figure class="relative">
        <img class="" src="/Frame.svg" alt="hero" />
      </figure>
    </section>
    <!-- HERO SECTION ENDS -->

    <!-- ABOUT US SECTION STARTS -->
    <section class="bg-[#F3F3F3] pt-4 pb-10">
      <section class="p-8 w-[90%] xl:w-[1280px] mx-auto">
        <!-- TODO ADD THE Clash Grotesk FONT HERE -->
        <h2
          class="font-[800] lg:text-4xl md:text-[52px] text-[36px] text-center pt-10"
        >
          About Us
        </h2>
        <p
          class="text-base font-poppins text-[16px] font-[500] text-appDarkGray100 mt-5 mb-14"
        >
          Everyone should be able to have enough funds to achieve their goals,
          right? That is what we believe. And if you believe in the same thing,
          you are on the right platform. Whether you want to donate or ask for
          donations, PutHand has created a platform which is easy to use with a
          giant focus on the connections we create with our donors and
          fundraisers. Buckets are the campaigns and one thing you need to know
          is that this platform is for- and about- YOU. 
        </p>

        <div
          class="lg:grid grid-cols-2 bg-bgDarkerGreen mx-auto px-[20px] rounded-3xl py-16 gap-28"
        >
          <article class="my-10 text-white">
            <h3
              class="pb-12 text-4xl font-semibold text-center font-poppins font"
            >
              OUR VALUES
            </h3>

            <ul class="flex flex-col gap-2">
              <li
                v-for="value in images"
                :key="value.title"
                class="flex gap-4 p-4 transition-all duration-300 bg-appGreen300 rounded-2xl hover:scale-105 hover:animate-pulse"
              >
                <span
                  ><img
                    :src="value.img"
                    class="h-14 w-14"
                    :draggable="false"
                    alt=""
                /></span>

                <span class="text-sm font-inter">
                  <p class="font-semibold">{{ value.title }}</p>
                  <span>{{ value.subtitle }}</span>
                </span>
              </li>
            </ul>
          </article>
          <div class="flex items-center justify-center md:w-1/2">
            <img src="/together.svg" class="w-full h-full rounded-2xl" alt="" />
          </div>
        </div>
        <section class="bg-appGray100 font-poppins">
          <div
            class="w-[90%] xl:w-[1280px] mx-auto py-[64px] md:py-[67px] lg:py-[49px]"
          >
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
                  individuals will attend to you shortly. Our mission is simple
                  and you are invited to join our network of donors,
                  fundraisers, and supporters. As a member, you have the power
                  to transform lives, support meaningful projects, and put a
                  smile on people’s faces. It doesn’t matter what you are
                  passionate about, there’s someone for everyone. <br /><br />Start
                  your journey with PutHand and become a catalyst for change.
                  Welcome to the PutHand community.
                </p>
                <div class="py-[50px]">
                  <router-link to="/buckets"
                    ><button
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
          </div>
        </section>
      </section>

      <Footer></Footer>
    </section>
    <!-- ABOUT US SECTION ENDS -->
  </main>
</template>
