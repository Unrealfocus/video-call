<script>
export default {
  name: "footer",
};
</script>

<template>
  <footer class="pt-3 pb-5 mx-3 bg-bgDarkerGreen px-14 rounded-3xl">
    <section
      class="container grid mx-auto my-3 lg:grid-cols-2 sm:grid-cols-1 lg:items-center lg:mt-20 sm:mt-20"
    >
      <div class="">
        <img src="/Logo.svg" alt="logo" class="mb-5" />
      </div>
      <section class="lg:flex sm:block gap-10 text-[#fff]">
        <ul class="mb-5">
          <p class="pb-2 text-base font-semibold font-poppins">Fundraise for</p>
          <li class="pb-2 text-sm font-medium font-poppins" to="">Medical</li>
          <li class="pb-2 text-sm font-medium font-poppins" to="">Emergency</li>
          <li class="pb-2 text-sm font-medium font-poppins" to="">Education</li>
          <li class="pb-2 text-sm font-medium font-poppins" to="">
            Non-profit
          </li>
        </ul>
        <ul>
          <p class="pb-2 text-base font-semibold font-poppins">Learn</p>
          <li class="pb-2 text-sm font-medium font-poppins" to="">
            How Puthands
          </li>
          <li class="pb-2 text-sm font-medium font-poppins" to="">
            Why Puthands
          </li>
          <li class="pb-2 text-sm font-medium font-poppins" to="">About</li>
          <li class="pb-2 text-sm font-medium font-poppins" to="">FAQ</li>
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
          <a href=""><img src="/facebook.svg" alt="facebook" /></a>
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
