<template>
  <div
    v-if="loading == true"
    class="loading w-full h-screen flex justify-center items-center">
    <img src="/logo1.svg" class="animate-bounce" />
  </div>
  <div v-if="loading == false" class="pt-12 mb-20 lg:w-[85%] mx-auto">
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
        <li v-for="num in buckets" class="">
          <div class="bg-white rounded-2xl">
            <figure class="px-5 py-5 rounded-2xl space-y-[10px]">
              <img
                :src="assets + num.images[0].image_url"
                class="object-cover object-center w-full h-44 rounded-2xl"
                alt="" />

              <p class="text-base font-semibold font-poppins">
                {{
                  num.bucket.title.length > 150
                    ? num.bucket.title.slice(0, 150) + "..."
                    : num.bucket.title
                }}
              </p>

              <p class="font-poppins font-extrabold text-xs text-[#939393]">
                by {{ num.author }}
              </p>

              <p class="mb-2 text-sm font-medium font-poppins">
                {{
                  num.bucket.description.length > 150
                    ? num.bucket.description.slice(0, 150) + "..."
                    : num.bucket.description
                }}
              </p>

              <dl class="flex">
                <div class="flex flex-1 mr-3 rounded-full bg-[#EAF9F0]">
                  <span
                    :class="'w-[' + num.percentage + '%]'"
                    class="bg-[#F6A609] rounded-full" />
                </div>
                <data
                  value="60"
                  class="font-poppins font-medium text-sm text-[#000000]"
                  >{{ num.percentage }}%</data
                >
              </dl>

              <dl class="justify-between">
                <span class="flex">
                  <dt
                    class="font-bold font-poppins text-xs mr-1 text-[#000000]">
                    Goal:
                  </dt>

                  <dd class="font-medium font-poppins text-xs text-[#000000]">
                    {{ num.bucket.goal }}
                  </dd>
                </span>
              </dl>
              <dl class="justify-between">
                <span class="flex">
                  <dt
                    class="font-bold font-poppins text-xs mr-1 text-[#000000]">
                    Raised:
                  </dt>

                  <dd class="font-medium font-poppins text-xs text-[#000000]">
                    {{ num.donated }}
                  </dd>
                </span>
              </dl>

              <div class="flex justify-end pt-4">
                <button
                  class="flex text-left bg-appGreen300 rounded-md py-2 px-10 font-semibold font-poppins text-sm text-[#FFFFFF]"
                  type="button"
                  @click="toggleSection(num)">
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
import axios from "axios";
export default {
  name: "bucket",
  emits: ["single-bucket"],
  data() {
    return {
      buckets: [],
      categories: [],
      loading: false,
    };
  },
  async mounted() {
    this.loading = true;
    const app = import.meta.env.VITE_APP_ENGINE;
    this.assets = import.meta.env.VITE_APP_ASSETS;
    //get categories
    await axios.get(app + "categories").then((res) => {
      this.categories = res.data.data;
    });

    //get buckets
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + this.$store.state.token;
    await axios
      .get(app + "my_buckets/" + this.$store.state.user.user_id)
      .then((res) => {
        this.buckets = res.data.data;
        this.buckets.forEach((item) => {
          let percentage = Math.floor((item.donated / item.bucket.goal) * 100);
          if (Number.isInteger(percentage / 10)) {
            item.percentage = percentage.toString();
          } else {
            while (Number.isInteger(percentage / 10) == false) {
              percentage--;
            }

            item.percentage = percentage.toString();
          }
        });
      });
    this.loading = false;
  },
  methods: {
    toggleSection(num) {
      this.$emit("singleBucket", num);
    },
  },
};
</script>
