<script>
import { ref } from 'vue'
// import Modal from '../modal/modal.vue'

// defineProps({
//   msg: String,
// })

const count = ref(0)

export default {
  components: {},
  data() {
    return {
      isDropVisible: false,
    }
  },
  computed: {},

  methods: {},
}
</script>

<template>
  <section class="flex">
    <header
      class="w-5/6 xxl:w-[1280px] mx-auto flex items-center justify-between flex-wrap p-2"
    >
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <img src="/logo1.svg" alt="logo" />
      </div>

      <div class="block lg:hidden">
        <button
          @click="isDropVisible = !isDropVisible"
          class="flex items-center px-3 sm:px-4 md:px-6 lg:px-8 py-2 border rounded text-[#FFFFFF] border-gray-600 bg-[#2D402C] hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <ul v-if="isDropVisible === true">
          <li class="font-poppins text-base font-medium">
            <a href="#">Home</a>
          </li>
          <li class="font-poppins text-base font-medium">
            Fundraiser Category
          </li>
          <li>How it works</li>
          <li class="font-poppins text-base font-medium">About us</li>

          <li
            class="inline-block px-4 py-3 leading-none border rounded-full text-[#333333] border-[#356633] hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
          >
            Sign in
          </li>
          <li
            class="px-4 py-3 border rounded-full bg-[#295F2D] border-[#295F2D] text-[#fff]"
          >
            Let's Put Hands
          </li>
        </ul>
      </div>

      <nav
        class="w-full block flex-grow md:hidden lg:flex lg:items-center lg:w-auto justify-end"
      >
        <ul class="hidden md:flex items-center space-x-9">
          <router-link to="/" class="font-poppins text-base font-medium"
            >Home</router-link
          >
          <router-link to="#" class="font-poppins text-base font-medium"
            >Fundraiser Category</router-link
          >
          <router-link to="#" class="font-poppins text-base font-medium"
            >How it works</router-link
          >
          <router-link to="/aboutUs" class="font-poppins text-base font-medium"
            >About us</router-link
          >

          <router-link
            to="#"
            class="inline-block px-4 py-3 leading-none font-bold text-base border rounded-full text-[#295F2D] border-[#356633] hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
          >
            Sign in
          </router-link>
          <router-link
            to="#"
            class="px-4 py-3 border font-poppins font-bold text-base rounded-full bg-[#295F2D] border-[#295F2D] text-[#FFF]"
            >Let's Put Hands
          </router-link>
        </ul>
      </nav>
    </header>
  </section>
</template>
