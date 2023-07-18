<!-- <script>
export default {
  name: "footer",
};
</script> -->

<template>
  <footer class="pt-3 pb-5 mx-3 bg-bgDarkerGreen px-14 rounded-3xl">
    <section
      class="container grid justify-center mx-auto my-3 lg:grid-cols-2 sm:grid-cols-1 lg:items-center lg:mt-20 sm:mt-20"
    >
      <div class="">
        <img src="/Logo.svg" alt="logo" class="mb-5" />
      </div>
      <section class="lg:flex sm:block gap-10 text-[#fff]">
        <ul class="mb-5">
          <p class="pb-2 text-base font-semibold font-poppins">Fundraise for</p>
          <ul class="gap-6">
            <li
              v-for="category in categories"
              :key="category"
              class="pb-2 text-sm font-medium font-poppins"
            >
              <router-link to="/buckets">
                {{ category.name }}
              </router-link>
            </li>
          </ul>
          <!-- <li class="pb-2 text-sm font-medium font-poppins" to="">Medical</li>
          <li class="pb-2 text-sm font-medium font-poppins" to="">Emergency</li>
          <li class="pb-2 text-sm font-medium font-poppins" to="">Education</li>
          <li class="pb-2 text-sm font-medium font-poppins" to="">
            Non-profit
          </li> -->
        </ul>
        <ul>
          <p class="pb-2 text-base font-semibold font-poppins">Learn</p>
          <router-link to="/works"
            ><li class="pb-2 text-sm font-medium font-poppins" to="">
              How Puthand works
            </li></router-link
          >
          <router-link to="/about-us"
            ><li class="pb-2 text-sm font-medium font-poppins" to="">
              About
            </li></router-link
          >
          <router-link to="/contact-us"
            ><li class="pb-2 text-sm font-medium font-poppins" to="">
              Contact
            </li></router-link
          >
          <router-link to="/faq"
            ><li class="pb-2 text-sm font-medium font-poppins">
              FAQ
            </li></router-link
          >
        </ul>
      </section>
    </section>
    <div
      class="flex flex-col-reverse justify-between w-full lg:px-24 lg:flex-row"
    >
      <div>
        <ul
          class="md:flex lg:flex sm:block gap-11 mt-20 text-[#fff] items-center"
        >
          <li class="text-sm font-medium font-poppins">© 2023</li>
          <li class="text-sm font-medium font-poppins">Put Hand</li>
          <li class="text-sm font-medium font-poppins">Terms</li>
          <li class="text-sm font-medium font-poppins">Private Policy</li>
        </ul>
      </div>
      <div class="">
        <ul class="flex gap-5 mt-20">
          <a
            href="https://www.facebook.com/profile.php?id=100093105743171&mibextid=LQQJ4d"
            ><img src="/facebook.svg" alt="facebook"
          /></a>
          <a
            href="https://instagram.com/puthand_nigeria?igshid=MzRlODBiNWFlZA=="
            ><img src="/instagram.svg" alt="instagram"
          /></a>
          <a href="https://twitter.com/puthand_nigeria?s=21"
            ><img src="/twitter.svg" alt="twitter"
          /></a>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import axios from "axios";
export default {
  name: "footer",
  data() {
    return {
      categories: [],
    };
  },
  async mounted() {
    const getCategories = import.meta.env.VITE_APP_ENGINE + "categories";
    await axios.get(getCategories).then((res) => {
      this.categories = res.data.data;
    });

    await axios.get(getCategories).then((res) => {
      this.categories = res.data.data;
    });
  },
  methods: {
    navDrop() {
      this.toggleNav = !this.toggleNav;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>
