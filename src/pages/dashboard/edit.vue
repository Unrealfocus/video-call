<template>
  <div class="lg:w-[85%] mx-auto">
    <div class="px-[10px] md:px-[30px] py-[50px] bg-white">
      <div>
        <button
          @click="this.$router.push('/dashboard/manage')"
          class="flex items-center text-base font-bold font-poppins">
          <img src="/arrow-left.svg" alt="" />
          Back for fundraiser
        </button>
      </div>

      <section class="flex items-center justify-center my-10">
        <button
          class="w-full lg:w-[30%] flex items-center justify-center bg-[#F3F3F3] rounded-full cursor-pointer">
          <div
            class="w-[50%] rounded-full text-xs py-2"
            :class="[edit == true ? 'bg-[#295F2D] text-white' : 'bg-[#F3F3F3]']"
            @click="changeTab()">
            Edit
          </div>

          <div
            class="w-[50%] rounded-full text-xs py-2"
            :class="[
              edit == false ? 'bg-[#295F2D] text-white' : 'bg-[#F3F3F3]',
            ]"
            @click="changeTab()">
            Settings
          </div>
        </button>
      </section>

      <div v-show="edit == true">
        <p class="text-lg font-semibold font-poppins">Fundraiser Title</p>
        <div class="border rounded-2xl w-full border-[#000] p-3">
          <input
            class="w-full bg-transparent border-none outline-none"
            v-model="title"
            placeholder="Support my community with NEPA Light" />
        </div>

        <!-- <p class="py-5 text-lg font-semibold font-poppins">Cover Image</p>

        <div class="">
          <img
            :src="assets + buck.images[0].image_url"
            class="rounded-2xl lg:h-[500px]"
            alt="" />
        </div> -->

        <div>
          <p class="text-lg font-semibold font-poppins text-[#484848] py-5">
            Add a Photo
          </p>
          <div class="flex overflow-x-scroll no-scrollbar">
            <!-- class="border-[#000] border rounded-3xl w-[50%] md:w-[20%] h-[200px]"> -->
            <div
              :class="[images.length > 5 ? 'hidden' : '']"
              class="border-[#000] border rounded-3xl flex justify-center flex-shrink-0 group/item w-[40%] md:w-1/2 lg:w-1/5 p-2 m-2">
              <div class="">
                <label for="postFile1">
                  <!-- <img :src="imageUrls[0]" class="w-full" /> -->
                  <p
                    class="text-[#939393] font-[500] text-[16px] font-poppins cursor-pointer p-[10px]">
                    {{ imageFile.name ? imageFile.name : "Upload image here" }}
                  </p>
                </label>
                <input
                  type="file"
                  id="postFile1"
                  @change="chooseImage"
                  class="hidden" />
              </div>
            </div>
            <!-- class="border-[#000] border rounded-3xl flex justify-center p-2 w-[50%] md:w-[20%] h-[200px] " -->
            <div
              v-for="image in images"
              class="rounded-3xl flex-shrink-0 group/item w-[50%] md:w-1/2 lg:w-1/5 p-2 m-2">
              <div
                class="border-[#000] bg-[#484848] border w-full flex justify-center">
                <img :src="assets + image.image_url" class="h-[200px] w-auto" />
                <div class=""></div>
              </div>
              <div class="py-3">
                <button
                  @click="deleteBucketImage(image.image_id)"
                  class="rounded-md px-3 bg-[#FEC8C8] hover:bg-red-500 text-[#B23737]">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div class="">
            <button
              @click="saveImage"
              :class="[images.length > 5 ? 'hidden' : '']"
              class="mx-auto rounded-md bg-[#295F2D] px-20 text-[#FFFFFF] mt-5 py-3">
              {{ loading == true ? "loading..." : "Save Image" }}
            </button>
          </div>
        </div>

        <p class="text-[#484848] text-[18px] font-[600] font-poppins py-5">
          Your donation amount
        </p>
        <div
          class="w-full border-2 border-[#93939] rounded-2xl p-3 flex space-x-[10px]">
          <div
            class="bg-[#EAF9F0] flex justify-center items-center rounded w-[40px]">
            <p class="text-[#176D3A] font-[800] text-[25px]">₦</p>
          </div>
          <input
            :value="buck.goal"
            type="number"
            pattern="[0-9]*"
            placeholder="500,000"
            disabled
            class="bg-[#fff] w-full border-none bg-transparent outline-none rounded full text-[31px] text-[#939393] font-[600]" />
        </div>
        <div class="space-y-[20px]">
          <p class="font-[600] text-[18px] py-6">Tell your story</p>
          <div class="border rounded-2xl w-full border-[#000] p-3">
            <textarea
              v-model="description"
              class="w-full bg-transparent border-none outline-none"
              rows="4"></textarea>
          </div>
        </div>
      </div>

      <div v-show="edit == false">
        <div class="pb-7">
          <p class="text-[#484848] font-poppins font-semibold text-lg">
            Fundraiser Page
          </p>
          <div class="flex items-center gap-2 pt-3">
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="w-5 h-5 text-[#295F2D] transition duration-150 ease-in-out form-checkbox"
                :checked="checked"
                @change="toggle" />
            </label>
            <p class="text-sm font-medium font-poppins text-[#999999]">
              Allow my fundraiser to accept donations.
            </p>
          </div>
          <div class="flex items-center gap-2 pt-3">
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="w-5 h-5 border-2 rounded form-checkbox text-appGreen300 focus:outline-none focus:border-appGreen300"
                :checked="checked"
                @change="toggle" />
            </label>
            <p class="text-sm font-medium font-poppins text-[#999999]">
              Allow donors to leave words of encouragement
            </p>
          </div>
        </div>
        <div>
          <p class="text-[#484848] font-poppins font-semibold text-lg">
            Notification
          </p>
          <div class="flex items-center gap-2 pt-3">
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="w-5 h-5 text-[#295F2D] transition duration-150 ease-in-out form-checkbox"
                :checked="checked"
                @change="toggle" />
            </label>
            <p class="text-sm font-medium font-poppins text-[#999999]">
              Receive notification on every donation i get
            </p>
          </div>
          <div class="flex items-center gap-2 pt-3">
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="w-5 h-5 border-2 rounded form-checkbox text-appGreen300 focus:outline-none focus:border-appGreen300"
                :checked="checked"
                @change="toggle" />
            </label>
            <p class="text-sm font-medium font-poppins text-[#999999]">
              Receive daily summary of every donation i get
            </p>
          </div>
        </div>
        <div>
          <p class="text-lg font-semibold font-poppins pt-7">
            Delete Fundraiser
          </p>
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium font-poppins text-[#999999]">
              Deleting will remove your donation campaign from people to donate
              to you.
            </p>
            <button
              class="rounded-md bg-[#FEC8C8] px-20 text-[#B23737] mt-5 py-3">
              Delete
            </button>
          </div>
        </div>
      </div>
      <button
        @click="saveChanges"
        class="flex items-center justify-center mx-auto rounded-md bg-[#295F2D] px-20 text-[#FFFFFF] mt-5 py-3">
        {{ loading == true ? "loading..." : "Save changes" }}
      </button>
    </div>
  </div>
</template>

<script>
import bucket from "../../components/manageBucket/bucket.vue";
import manage from "../dashboard/manage.vue";
import SingleBucket from "../buckets/SingleBucket.vue";
import axios from "axios";
import {
  updateBucket,
  deleteImage,
} from "../../hooks/dashboardHooks/manage.ts";

export default {
  name: "edit",
  components: {
    bucket,
    manage,
    SingleBucket,
  },
  data() {
    return {
      loading: false,
      title: "",
      description: "",
      manageCount: 1,
      edit: true,
      params: {},
      buck: {},
      images: [],
      assets: "",
      imageFile: [],
      tabs: ["Edit", "Settings"],
    };
  },
  async created() {
    const app = import.meta.env.VITE_APP_ENGINE;
    this.assets = import.meta.env.VITE_APP_ASSETS;

    //get buckets
    await axios.get(app + "bucket/" + this.$route.params.id).then((res) => {
      this.buck = res.data.data.bucket;
      this.images = res.data.data.images;
      this.title = this.buck.title;
      this.description = this.buck.description;
    });
  },
  mounted() {
    this.assets = import.meta.env.VITE_APP_ASSETS;

    this.title = this.buck.title;
    this.description = this.buck.description;
  },
  methods: {
    async deleteBucketImage(image_id) {
      if (this.images.length < 2) {
        swal("Upload a new image in order to delete this one", {
          icon: "error",
          timer: 3000,
          buttons: {
            cancel: false,
          },
        });
        return;
      }
      const params = {
        user_id: this.$store.state.user.user_id,
        token: this.$store.state.token,
        image_id: image_id,
        bucket_id: this.buck.bucket_id,
        link: import.meta.env.VITE_APP_ENGINE + "delete_image",
      };
      await deleteImage(params).then(() => {
        this.$router.go(0);
      });
    },

    async saveChanges() {
      this.loading = true;
      const params = {
        link: import.meta.env.VITE_APP_ENGINE + "update_bucket",
        user_id: this.$store.state.user.user_id,
        token: this.$store.state.token,
        bucket_id: this.buck.bucket_id,
        title: this.title,
        description: this.description,
      };

      updateBucket(params);
      this.loading = false;
    },

    toggleNext() {
      this.manageCount++;
    },
    changeTab() {
      this.edit = !this.edit;
    },
    togglePrev() {
      this.manageCount--;
    },
    async saveImage() {
      if (this.imageFile.length < 1) {
        swal("select an image file", {
          icon: "error",
          buttons: false,
          timer: 3000,
          class: "font-poppins font-[700] text-[300px]",
        });
        return;
      }
      this.loading = true;
      const uploadLink =
        import.meta.env.VITE_APP_ENGINE + "upload_bucket_image";
      const data = new FormData();

      if (this.imageFile) {
        data.append("image", this.imageFile);
        data.append("bucket_id", this.buck.bucket_id);
      }
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + this.$store.state.token;
      axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
      await axios
        .post(uploadLink, data)
        .then((res) => {
          this.loading = false;
          this.imageFile = [];
          swal("Image added successfully", {
            icon: "success",
            buttons: false,
            timer: 3000,
            class: "font-poppins font-[700] text-[300px]",
          });
          this.$router.go(0);
        })
        .catch((err) => {
          this.loading = false;
          let error = err.response.data.message;
          swal(error, {
            icon: "error",
            buttons: false,
            timer: 3000,
            class: "font-poppins font-[700] text-[300px]",
          });
        });

      await axios.get(app + "bucket/" + this.$route.params.id).then((res) => {
        this.buck = res.data.data.bucket;
        this.images = res.data.data.images;
        this.title = this.buck.title;
        this.description = this.buck.description;
      });
    },

    chooseImage(e) {
      this.imageFile = e.target.files[0];
    },
  },
};
</script>
