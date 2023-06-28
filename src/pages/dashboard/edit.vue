<template>
  <div class="pt-4 pb-10 bg-white">
    <div v-if="manageCount == 1" class="">
      <manage @edit="toggleNext" />
    </div>
    <div v-if="manageCount == 2">
      <button
        @click="togglePrev"
        class="flex items-center text-base font-bold font-poppins"
      >
        <img src="/arrow-left.svg" alt="" />
        Back for fundraiser
      </button>
    </div>

    <section class="flex items-center mt-20 mb-20">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="[
          'rounded-full px-10 text-xs py-2',
          {
            'bg-appGreen300 text-white': activeTab === index,
            'text-appGreen300 cursor-pointer': activeTab !== index,
          },
        ]"
        @click="changeTab(index)"
      >
        {{ tab }}
      </div>
    </section>
    <div v-show="activeTab === 0">
      <p>Fundraiser Title</p>
      <div class="border rounded-2xl w-full border-[#000] p-3">
        <textarea
          class="w-full bg-transparent border-none outline-none"
          rows="4"
          placeholder="Support my community with NEPA Light "
        ></textarea>
      </div>

      <p>Cover Image</p>
    </div>
  </div>
</template>

<script>
import bucket from "../../components/manageBucket/bucket.vue";
import manage from "../dashboard/manage.vue";
export default {
  components: {
    bucket,
    manage,
  },
  data() {
    return {
      manageCount: 1,
      activeTab: 0,
      tabs: ["Edit", "Settings"],
    };
  },
  methods: {
    toggleNext() {
      this.manageCount++;
    },
    changeTab(index) {
      this.activeTab = index;
    },
    togglePrev() {
      this.manageCount--;
    },
  },
};
</script>
