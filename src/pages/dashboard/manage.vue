<template>
  <div class="pt-12 mb-20">
    <section class="lg:flex sm:block justify-between items-center">
      <p class="font-poppins font-medium text-3xl">Manage your fundraiser</p>
      <button
        class="rounded-full bg-[#2A5E2A] border-[1px] text-[#fff] py-3 text-[14px] px-10 font-poppins font-bold text-base"
      >
        Create a bucket
      </button>
    </section>
    <section class="mt-10">
      <ul class="md:grid grid-cols-3 gap-7">
        <li v-for="num in 15" class="">
          <div class="bg-white rounded-2xl">
            <figure class="py-5 px-5 rounded-2xl">
              <img
                src="/community.svg"
                class="h-44 w-full object-cover object-center rounded-2xl"
                alt=""
              />

              <p class="font-poppins font-semibold text-base">
                Help david Community get support
              </p>

              <p class="font-poppins font-extrabold text-xs text-[#939393]">
                by David Sampson
              </p>

              <p class="text-sm mb-2 font-poppins font-medium">
                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus.
              </p>

              <dl class="flex">
                <div class="flex flex-1 bg-appGray100 rounded-full mr-3">
                  <span class="bg-[#2AC769] w-[60%] rounded-full" />
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
                    class="font-bold font-poppins text-xs mr-1 text-[#000000]"
                  >
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

              <button
                class="flex text-left bg-appGreen300 rounded-md py-2 px-10 font-semibold font-poppins text-sm text-[#FFFFFF]"
                type="button"
              >
                Donate
              </button>
            </figure>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup></script>
