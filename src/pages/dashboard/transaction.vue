<template>
  <main>
    <div class="hidden lg:block">
      <p class="pt-20 pb-12 text-3xl font-semibold font-poppins">
        Transaction History
      </p>

      <div class="relative flex flex-col w-2/3 sm:flex-row ml-9">
        <div
          class="absolute inset-y-0 left-0 flex items-center gap-5 pl-3 pointer-events-none"
        >
          <img src="/clarity_search-line.svg" alt="" />
        </div>
        <input
          type="email"
          id="email-address-icon"
          class="bg-white rounded-full block w-full sm:w-auto py-5 pl-10 p-2.5"
          placeholder="Searching for any donation"
        />
        <button
          class="mt-4 sm:mt-0 sm:ml-2 flex items-center px-5 text-white bg-[#295F2D] rounded-full"
        >
          Search
        </button>
      </div>

      <section class="w-full pt-3 pb-10 bg-white mt-9 rounded-3xl">
        <div>
          <table class="w-5/6 rounded-lg bg-[#C8C8C852]">
            <thead>
              <tr>
                <th class="py-2">#</th>
                <th class="py-2">Bucket Page</th>
                <th class="py-2">Fundraiser</th>
                <th class="py-2">Type</th>
                <th class="py-2">Amount</th>
                <th class="py-2">Date</th>
                <th class="py-2">Status</th>
              </tr>
            </thead>
          </table>
          <table class="w-5/6 mx-auto sm:mx-5">
            <tbody>
              <tr>
                <td>1.</td>
                <td>Help My</td>
                <td>David Sampson</td>
                <td>Type</td>
                <td>Amount</td>
                <td>Date</td>
                <td>Status</td>
              </tr>
              <tr>
                <td colspan="7">
                  <hr class="my-4 border-gray-300" />
                </td>
              </tr>
              <tr>
                <td>1.</td>
                <td>Help My</td>
                <td>David Sampson</td>
                <td>Type</td>
                <td>Amount</td>
                <td>Date</td>
                <td>Status</td>
              </tr>
              <tr>
                <td colspan="7">
                  <hr class="my-4 border-gray-300" />
                </td>
              </tr>
              <tr>
                <td>1.</td>
                <td>Help My</td>
                <td>David Sampson</td>
                <td>Type</td>
                <td>Amount</td>
                <td>Date</td>
                <td>Status</td>
              </tr>
              <tr>
                <td colspan="7">
                  <hr class="my-4 border-gray-300" />
                </td>
              </tr>
              <tr>
                <td>1.</td>
                <td>Help My</td>
                <td>David Sampson</td>
                <td>Type</td>
                <td>Amount</td>
                <td>Date</td>
                <td>Status</td>
              </tr>
              <tr>
                <td colspan="7">
                  <hr class="my-4 border-gray-300" />
                </td>
              </tr>
              <tr>
                <td>1.</td>
                <td>Help My</td>
                <td>David Sampson</td>
                <td>Type</td>
                <td>Amount</td>
                <td>Date</td>
                <td>Status</td>
              </tr>
              <tr>
                <td colspan="7">
                  <hr class="my-4 border-gray-300" />
                </td>
              </tr>
              <tr>
                <td>1.</td>
                <td>Help My</td>
                <td>David Sampson</td>
                <td>Type</td>
                <td>Amount</td>
                <td>Date</td>
                <td>Status</td>
              </tr>
              <tr>
                <td colspan="7">
                  <hr class="my-4 border-gray-300" />
                </td>
              </tr>
              <tr>
                <td>1.</td>
                <td>Help My</td>
                <td>David Sampson</td>
                <td>Type</td>
                <td>Amount</td>
                <td>Date</td>
                <td>Status</td>
              </tr>
              <tr>
                <td colspan="7">
                  <hr class="my-4 border-gray-300" />
                </td>
              </tr>
              <tr>
                <td>1.</td>
                <td>Help My</td>
                <td>David Sampson</td>
                <td>Type</td>
                <td>Amount</td>
                <td>Date</td>
                <td>Status</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div class="flex flex-col items-center justify-between mt-4 sm:flex-row">
        <p class="text-center">Page: {{ currentPage }}</p>

        <div class="flex justify-center mt-4 sm:justify-end">
          <button
            @click="goToPreviousPage"
            :disabled="currentPage === 1"
            class="flex items-center text-gray-700"
            :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
          >
            <svg
              class="w-4 h-4 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Previous</span>
          </button>

          <ul class="flex items-center justify-center mt-4">
            <li v-for="pageNumber in displayedPageNumbers" :key="pageNumber">
              <button
                @click="goToPage(pageNumber)"
                :disabled="pageNumber === currentPage"
                class="px-4 py-2 mr-2 text-gray-700 bg-gray-200 rounded-md"
                :class="{
                  'opacity-50 cursor-not-allowed': pageNumber === currentPage,
                }"
              >
                {{ pageNumber }}
              </button>
            </li>
          </ul>

          <button
            @click="goToNextPage"
            :disabled="currentPage === totalPages"
            class="flex items-center text-gray-700"
            :class="{
              'opacity-50 cursor-not-allowed': currentPage === totalPages,
            }"
          >
            <span>Next</span>
            <svg
              class="w-4 h-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <section class="lg:hidden">
      <section class="">
        <p class="my-10 text-xl font-semibold font-poppins text-[#484848]">
          History
        </p>
        <div
          class="border-[#999999] border pt-3 pb-5 p-8 rounded-3xl w-[100%] md:w-[100%] mb-5"
        >
          <p class="mb-8 text-[#484848] text-sm font-semibold">Today</p>
          <div class="flex gap-5 md:gap-44 mb-9">
            <div
              class="overflow-hidden text-base font-medium text-ellipsis whitespace-nowrap font-poppins"
            >
              Help My Community with NEPA light
              <p class="font-bold font-poppins text-base text-[#999999]">
                Withdraw
              </p>
              <p
                class="text-[#674604] bg-[#FEF6E6] rounded-full px-4 w-[100px] font-poppins font-medium text-sm"
              >
                ...Pending
              </p>
            </div>
            <div>
              <figure class="text-sm font-bold font-poppins">₦500,000</figure>
              <div class="text-sm font-medium font-poppins text-[#939393]">
                26/05/2023
              </div>
            </div>
          </div>

          <div class="flex gap-5 md:gap-44">
            <div
              class="overflow-hidden text-base font-medium text-ellipsis whitespace-nowrap font-poppins"
            >
              Help My Community with NEPA light
              <p class="font-bold font-poppins text-base text-[#999999]">
                Donations
              </p>
              <p
                class="text-[#12542C] bg-[#EAF9F0] rounded-full px-4 w-[100px] font-poppins font-medium text-sm"
              >
                paid
              </p>
            </div>
            <div>
              <figure class="text-sm font-bold font-poppins">₦500,000</figure>
              <div class="text-sm font-medium font-poppins text-[#939393]">
                26/05/2023
              </div>
            </div>
          </div>
        </div>

        <div
          class="border-[#999999] border pt-3 pb-5 p-8 rounded-3xl w-[100%] md:w-[100%] mb-5"
        >
          <p class="mb-8 text-[#484848] text-sm font-semibold">Today</p>
          <div class="flex gap-5 md:gap-48 mb-9">
            <div
              class="overflow-hidden text-base font-medium text-ellipsis whitespace-nowrap font-poppins"
            >
              Help My Community with NEPA light
              <p class="font-bold font-poppins text-base text-[#999999]">
                Withdraw
              </p>
              <p
                class="text-[#674604] bg-[#FEF6E6] rounded-full px-4 w-[100px] font-poppins font-medium text-sm"
              >
                ...Pending
              </p>
            </div>
            <div>
              <figure class="text-sm font-bold font-poppins">₦500,000</figure>
              <div class="text-sm font-medium font-poppins text-[#939393]">
                26/05/2023
              </div>
            </div>
          </div>
          <div class="flex gap-5 md:gap-48">
            <div
              class="overflow-hidden text-base font-medium text-ellipsis whitespace-nowrap font-poppins"
            >
              Help My Community with NEPA light
              <p class="font-bold font-poppins text-base text-[#999999]">
                Donations
              </p>
              <p
                class="text-[#12542C] bg-[#EAF9F0] rounded-full px-4 w-[100px] font-poppins font-medium text-sm"
              >
                paid
              </p>
            </div>
            <div>
              <figure class="text-sm font-bold font-poppins">₦500,000</figure>
              <div class="text-sm font-medium font-poppins text-[#939393]">
                26/05/2023
              </div>
            </div>
          </div>
        </div>
      </section>

      <div></div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 10,
      totalItems: 100,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    displayedPageNumbers() {
      const maxDisplayedPages = 5;
      const middlePage = Math.ceil(maxDisplayedPages / 2);
      const startPage = Math.max(1, this.currentPage - middlePage + 1);
      const endPage = Math.min(
        startPage + maxDisplayedPages - 1,
        this.totalPages
      );
      return Array.from(
        { length: endPage - startPage + 1 },
        (_, index) => startPage + index
      );
    },
  },
  methods: {
    goToPreviousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    goToNextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
    },
  },
};
</script>

<style scoped>
button:disabled {
  pointer-events: none;
}
</style>
