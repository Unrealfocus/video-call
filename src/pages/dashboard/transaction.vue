<template>
  <main>
    <p class="pt-20 pb-12 text-3xl font-semibold font-poppins">
      Transaction History
    </p>

    <div class="relative flex w-2/3 ml-9">
      <div
        class="absolute inset-y-0 left-0 flex items-center gap-5 pl-3 pointer-events-none"
      >
        <img src="/clarity_search-line.svg" alt="" />
      </div>
      <input
        type="email"
        id="email-address-icon"
        class="bg-white rounded-full block w-full py-5 pl-10 p-2.5"
        placeholder="Searching for any donation"
      />
      <button
        class="absolute inset-y-2 right-0 flex items-center px-5 text-white w-[90px] mr-2 pointer-events-none bg-[#295F2D] rounded-full"
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
        <table class="w-5/6 mx-5">
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
    <div class="flex justify-end">
      <!-- Display the current page number -->
      <p class="text-center">Page: {{ currentPage }}</p>

      <!-- Display the previous and next arrows with text -->
      <div class="flex items-center justify-center mt-4">
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

      <!-- Display the page numbers -->
    </div>
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
