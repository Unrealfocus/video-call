<script>
import axios from "axios";
import navabar_test from "../../components/layout/navabar_test.vue";
export default {
  name: "SeeBuckets",
  components: {
    navabar_test,
  },
  data() {
    return {
      bucket: {},
      loading: false,
      assets: "",
      percentage: "",
      showModal1: false,
      showCopyFeedback: false,
      copyButtonLabel: "Copy",
    };
  },
  beforeUnmount() {
    window.removeEventListener("click", this.handleClickOutside);
  },
  async created() {
    this.loading = true;

    const app = import.meta.env.VITE_APP_ENGINE;
    this.assets = import.meta.env.VITE_APP_ASSETS;

    //get buckets
    await axios.get(app + "bucket/" + this.$route.params.id).then((res) => {
      this.bucket = res.data.data;

      let percentage = Math.floor(
        (this.bucket.donated / this.bucket.bucket.goal) * 100
      );
      if (Number.isInteger(percentage / 10)) {
        this.percentage = percentage.toString();
      } else {
        while (Number.isInteger(percentage / 10) == false) {
          percentage--;
        }

        this.percentage = percentage.toString();
      }
    });
    this.bgImage =
      "bg-[url('" + this.assets + this.bucket.images[0].image_url + "')]";
    this.loading = false;
  },
  methods: {
    copyLinkAndCloseModal() {
      const linkText = this.currentUrl;
      navigator.clipboard
        .writeText(linkText)
        .then(() => {
          console.log("Link copied to clipboard!");
          this.showCopyFeedback = true;
          this.copyButtonLabel = "Copied!";
          setTimeout(() => {
            this.showCopyFeedback = false;
            this.copyButtonLabel = "Copy";
          }, 2000);
          this.showModal1 = false; // Close the modal
        })
        .catch((error) => {
          console.error("Failed to copy link:", error);
        });
    },
    showConfirmationModal1() {
      this.showModal1 = true;
    },
  },
  computed: {
    currentUrl() {
      return window.location.href;
    },
  },
};
</script>

<template>
  <div class="bg-[#fafafa]">
    <navabar_test />
    <div
      v-if="loading == true"
      class="flex items-center justify-center w-full h-screen loading">
      <img src="/logo1.svg" class="animate-bounce" />
    </div>

    <div
      v-if="loading == false"
      class="w-[90%] xl:w-[1280px] lg:w-[1125px] mx-auto py-[64px] md:py-[67px] lg:py-[49px]">
      <div class="title py-3">
        class="w-[90%] xl:w-[1280px] lg:w-[1125px] mx-auto py-[64px]
        md:py-[67px] lg:py-[49px]" >
        <div class="title md:">
          <p class="font-[800] text-[32px] font-poppins">
            {{ bucket.bucket.title }}
          </p>
          <button
            class="tag bg-[#BDEED1] text-[#022D19] font-[700] text-[15px] p-[7px] rounded-lg flex items-center">
            <p>{{ bucket.category }}</p>
            <img src="/Vector.svg" alt="vector" class="px-2" />
          </button>
          <div class="author flex space-x-[12px]">
            <p class="text-[#939393] font-[500]">
              Created by {{ bucket.author }}
            </p>
          </div>
        </div>
        <div class="">
          <div class="flex space-x-[20px]">
            <div class="w-full">
              <div class="lg:flex justify-between space-x-[10px]">
                <div
                  class="lg:w-[68%] bg-[#939393] h-[500px] w-auto flex justify-center items-center">
                  class="lg:w-[68%] bg-[#000] w-full flex justify-center
                  items-center" >
                  <img
                    :src="assets + bucket.images[0].image_url"
                    class="lg:h-[500px]" />
                  class="lg:h-[500px] w-full" />
                </div>
                <div class="lg:w-[30%]">
                  <div
                    class="card lg:shadow-lg rounded-2xl lg:p-[30px] space-y-[10px]">
                    <p
                      class="text-[#939393] text-[14px] font-poppins font-[700]">
                      Goal amount
                    </p>
                    <p class="font-poppins font-[700] text-[32px]">
                      {{
                        Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "NGN",
                        }).format(parseInt(bucket.bucket.goal))
                      }}
                    </p>

                    <dl class="flex">
                      <div class="flex flex-1 bg-[#EAF9F0] rounded-full mr-3">
                        <span
                          :class="'w-[' + percentage.toString() + '%]'"
                          class="bg-[#f6a609] rounded-full py-[8px]" />
                      </div>
                    </dl>
                    <p class="text-[#939393] font-poppins text-[12px]">
                      Total Raised is ₦{{ bucket.donated }}
                    </p>

                    <div class="">
                      <button
                        @click="
                          this.$router.push(
                            '/donate/' + bucket.bucket.bucket_id
                          )
                        "
                        class="w-full py-[9px] bg-[#295F2D] font-[700] text-white rounded-xl font-poppins">
                        Donate Now
                      </button>
                    </div>
                    <div class="flex justify-between py-[24px]">
                      <div class="justify-center text-[10px] font-[700]">
                        <div class="flex justify-center">
                          <img src="/donations.svg" />
                        </div>
                        {{ bucket.donor_count }} donations
                      </div>
                      <button
                        @click="showConfirmationModal1"
                        class="border border-[#295F2D] text-[16px] font-[700] py-[9px] px-[30px] text-[#295F2D] rounded-xl flex items-center space-x-[4px]">
                        share
                        <img src="/share.svg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                v-if="showModal1"
                class="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-gray-800 bg-opacity-50">
                <div
                  ref="modalContainer"
                  class="p-5 bg-white shadow rounded-3xl w-[40%] h-[38%] modal-container">
                  <div class="p-8">
                    <h3 class="text-3xl font-bold font-poppins">By Sharing</h3>
                    <p class="pt-5 text-base font-medium font-poppins">
                      Sharing fundraisers on social media can increase your
                      donations by up to 8 times.
                    </p>
                    <div class="relative">
                      <div
                        class="border rounded-3xl py-8 mt-10 border-[#484848]">
                        <p>{{ currentUrl }}</p>
                        <button
                          @click="copyLinkAndCloseModal"
                          class="inset-y-2 right-0 flex md:mx-0 mx-auto items-center justify-center px-5 py-6 text-[white] w-[90px] md:mr-2 bg-[#295F2D] rounded-3xl h-[36px] lg:absolute mt-3 lg:mt-0"
                          action="input">
                          {{ copyButtonLabel }}
                        </button>
                        <div
                          v-if="showCopyFeedback"
                          class="mt-2 text-sm text-green-500">
                          Link copied!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="">
                <div class="">
                  <p class="font-poppins text-[#333333] font-[700] text-[20px]">
                    Full Story
                  </p>
                </div>
                <div class="">
                  <p class="font-poppins">
                    {{ bucket.bucket.description }}
                  </p>

                  <div class="">
                    <p
                      class="text-[#333333] font-poppins font-[700] text-[30px] px-[10px] py-[5px] bg-red">
                      Comments
                    </p>

                    <div
                      v-if="bucket.comments.length > 0"
                      class="space-y-[20px]">
                      <div
                        class="comments flex space-x-[10px] items-center"
                        v-for="num in 5">
                        <div
                          class="md:w-[80px] md:h-[80px] w-[20%] h-[50px] rounded-2xl bg-[#BDEED1]"></div>
                        <div class="font-poppins">
                          <p class="text-[20px] font-[600]">David Sampson</p>
                          <p class="text-[#939393] text-[20px] font-[600]">
                            ₦ 5000
                          </p>
                        </div>
                        <!-- <p class="pt-[10px]">
                        We’re so sorry david of just happened to your community i
                        hope this goes a long way to help you
                      </p> -->
                      </div>
                    </div>
                    <div v-if="bucket.comments.length == 0">
                      This bucket has no comments yet
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
