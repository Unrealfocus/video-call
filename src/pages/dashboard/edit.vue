<template>
  <div class="mx-auto w-full md:w-[90%]">
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
          <div class="flex gap-5">
            <div class="border-[#000] border rounded-3xl md:w-[20%]">
              <div class="space-y-[10px]">
                <div
                  class="flex items-center justify-center w-full py-10 mx-auto">
                  <label for="postFile1">
                    <img :src="imageUrls[0]" class="w-full" />
                    <p
                      class="text-[#939393] font-[500] text-[16px] font-poppins cursor-pointer p-[10px]">
                      {{
                        imageFileNames[0]
                          ? imageFileNames[0]
                          : "Upload your image here"
                      }}
                    </p>
                  </label>
                  <input
                    type="file"
                    id="postFile1"
                    @change="chooseImage(0)"
                    class="hidden" />
                </div>
              </div>
            </div>
            <div class="border-[#000] border rounded-3xl md:w-[20%]">
              <div class="space-y-[10px]">
                <div
                  class="flex items-center justify-center w-full py-10 mx-auto">
                  <label for="postFile1">
                    <img :src="imageUrls[0]" class="w-full" />
                    <p
                      class="text-[#939393] font-[500] text-[16px] font-poppins cursor-pointer p-[10px]">
                      {{
                        imageFileNames[0]
                          ? imageFileNames[0]
                          : "Upload your image here"
                      }}
                    </p>
                  </label>
                  <input
                    type="file"
                    id="postFile1"
                    @change="chooseImage(0)"
                    class="hidden" />
                </div>
              </div>
            </div>
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
import { updateBucket } from "../../hooks/dashboardHooks/manage.ts";

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
      assets: "",
      imageFileNames: [], // Array to hold the filenames of the selected images
      imageUrls: [],
      tabs: ["Edit", "Settings"],
    };
  },
  async created() {
    const app = import.meta.env.VITE_APP_ENGINE;
    this.assets = import.meta.env.VITE_APP_ASSETS;

    //get buckets
    await axios.get(app + "bucket/" + this.$route.params.id).then((res) => {
      this.buck = res.data.data.bucket;
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
    // async updateBucketContent() {
    //   try {
    //     const updateLink = import.meta.env.VITE_APP_ENGINE + "update_bucket"; // Replace with your backend API endpoint to update the database
    //     const payload = {
    //       bucketId: "your_bucket_id", // Replace with the actual bucket ID for which you want to update the content
    //       content: this.bucketContent,
    //     };
    //     await axios.post(updateLink, payload);
    //     // If the update is successful, you can optionally show a success message or perform additional actions.
    //     // For example: this.showSuccessMessage = true;
    //   } catch (error) {
    //     console.error("Error updating bucket content:", error);
    //     // Handle the error or show an error message to the user.
    //   }
    // },

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

      // if (this.imageFileNames.length > 0) {
      //   const uploadLink =
      //     import.meta.env.VITE_APP_ENGINE + "upload_bucket_image";
      //   const data = new FormData();

      //   if (this.imageFile) {
      //     data.append("image", this.imageFile);
      //     data.append("bucket_id", this.buck.bucket_id);
      //   }
      //   axios.defaults.headers.common["Authorization"] =
      //     "Bearer " + this.$store.state.token;
      //   axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
      //   await axios
      //     .post(uploadLink, data)
      //     .then((res) => {})
      //     .catch((err) => {
      //       this.loading = false;
      //       let error = err.response.data.message;
      //       swal(error, {
      //         icon: "error",
      //         buttons: false,
      //         timer: 3000,
      //         class: "font-poppins font-[700] text-[300px]",
      //       });
      //     });

      //   alert("image uploaded");
      // }
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

    chooseImage(index) {
      const file = event.target.files[0];
      if (file) {
        this.imageFileNames[index] = file.name;

        // Read the file and generate a URL for the preview
        const reader = new FileReader();
        reader.onload = () => {
          this.imageUrls[index] = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>
