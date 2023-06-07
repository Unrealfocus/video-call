<script>
export default {
  name: 'footer',
}
</script>

<template>
  <footer
    class="pt-4 pb-10 bg-bgDarkerGreen mx-3 px-14 rounded-2xl lg:mt-9 sm:mt-5"
  >
    <section
      class="grid lg:grid-cols-2 sm:grid-cols-1 my-5 container justify-between lg:mt-36 sm:mt-20"
    >
      <img src="/Logo.svg" alt="logo" class="mb-5" />
      <section class="lg:flex sm:block gap-6 text-[#fff]">
        <ul class="mb-5">
          <p class="font-poppins font-semibold text-base">Fundraise for</p>
          <li class="font-poppins font-medium text-sm" to="">Medical</li>
          <li class="font-poppins font-medium text-sm" to="">Emergency</li>
          <li class="font-poppins font-medium text-sm" to="">Education</li>
          <li class="font-poppins font-medium text-sm" to="">Non-profit</li>
        </ul>
        <ul>
          <p class="font-poppins font-semibold text-base">Learn</p>
          <li class="font-poppins font-medium text-sm" to="">How Puthands</li>
          <li class="font-poppins font-medium text-sm" to="">Why Puthands</li>
          <li class="font-poppins font-medium text-sm" to="">About</li>
          <li class="font-poppins font-medium text-sm" to="">FAQ</li>
        </ul>
      </section>
    </section>
    <section>
      <ul
        class="block md:flex lg:flex sm:block justify-start gap-11 mt-32 text-[#fff]"
      >
        <li class="font-poppins font-medium text-sm">© 2023</li>
        <li class="font-poppins font-medium text-sm">Put Hand</li>
        <li class="font-poppins font-medium text-sm">Terms</li>
        <li class="font-poppins font-medium text-sm">Private Policy</li>
      </ul>
    </section>
  </footer>
</template>
