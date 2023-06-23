<template>
  <div v-if="manageCount == 1" class="">
    <bucket @single-bucket="togglePage" />
  </div>
  <div v-if="manageCount == 2" class="">
    <button @click="togglePage">toggle page 2</button>
  </div>
  <div v-if="manageCount == 3" class="">
    <button @click="togglePage">toggle page 3</button>
  </div>
</template>

<script>
import bucket from "../../components/manageBucket/bucket.vue";
export default {
  components: {
    bucket,
  },
  data() {
    return {
      manageCount: 1,
    };
  },
  methods: {
    togglePage() {
      this.manageCount++;
    },
  },
};
</script>
