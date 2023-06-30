<template>
  <div class="p-6 pt-12 mb-20 sm:p-6">
    <section class="items-center justify-between md:flex sm:block">
      <p
        class="mb-5 text-2xl font-bold md:text-3xl md:font-medium font-poppins">
        Manage your fundraiser
      </p>
      <button
        @click="this.$router.push('/create-bucket')"
        class="rounded-full bg-[#2A5E2A] border-[1px] text-[#fff] py-3 text-[14px] px-10 font-poppins font-bold text-base">
        Create a bucket
      </button>
    </section>
    <section class="mt-10">
      <ul class="grid grid-cols-1 gap-10 md:grid-cols-3">
        <li v-for="num in 6" class="">
          <div class="bg-white rounded-2xl">
            <figure class="px-5 py-5 rounded-2xl">
              <img
                src="/community.svg"
                class="object-cover object-center w-full h-44 rounded-2xl"
                alt="" />

              <p class="text-base font-semibold font-poppins">
                Help david Community get support
              </p>

              <p class="font-poppins font-extrabold text-xs text-[#939393]">
                by David Sampson
              </p>

              <p class="mb-2 text-sm font-medium font-poppins">
                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus.
              </p>

              <dl class="flex">
                <div class="flex flex-1 mr-3 rounded-full bg-[#EAF9F0]">
                  <span class="bg-[#F6A609] w-[60%] rounded-full" />
                </div>
                <data
                  value="60"
                  class="font-poppins font-medium text-sm text-[#000000]"
                  >60%</data
                >
              </dl>

              <dl class="justify-between">
                <span class="flex">
                  <dt
                    class="font-bold font-poppins text-xs mr-1 text-[#000000]">
                    Raised:
                  </dt>

                  <dd class="font-medium font-poppins text-xs text-[#000000]">
                    50,000
                  </dd>
                </span>
              </dl>
              <div class="flex">
                <img src="/location.svg" alt="" />
                <span class="font-poppins font-extrabold text-xs text-[#000000]"
                  >Lagos</span
                >
              </div>

              <div class="flex justify-end pt-4">
                <button
                  class="flex text-left bg-appGreen300 rounded-md py-2 px-10 font-semibold font-poppins text-sm text-[#FFFFFF]"
                  type="button"
                  @click="toggleSection">
                  Manage
                </button>
              </div>
            </figure>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "bucket",
  emits: ["single-bucket"],
  methods: {
    toggleSection() {
      this.$emit("single-bucket");
    },
  },
};
</script>
