<template>
  <div class="bg-[#B7B7B7] lg:h-screen">
    <div class="flex items-center justify-center lg:h-screen">
      <div class="bg-[#fff] w-[820px] rounded-lg px-[45px] py-[30px]">
        <div :class="[currentStep == 4 ? 'hidden' : '']" class="">
          <button
            @click="prevSlide()"
            class="border-2 border-[#295F2D] text-[#295F2D] rounded-2xl px-[23px] py-[12px] font-[700] text-[16px]"
          >
            Back
          </button>
        </div>

        <div
          :class="[currentStep == 4 ? 'hidden' : '']"
          class="steps py-[30px]"
        >
          <p class="font-[700] text-[18px] font-poppins pb-[10px]">
            Step {{ currentStep }}
          </p>
          <div class="bars flex space-x-[8px]">
            <div
              :class="[currentStep == 1 ? 'bg-[#295F2D]' : 'bg-[#D9D9D9]']"
              class="w-[105px] h-[8px] rounded-full"
            ></div>
            <div
              :class="[currentStep == 2 ? 'bg-[#295F2D]' : 'bg-[#D9D9D9]']"
              class="w-[105px] h-[8px] rounded-full"
            ></div>
            <div
              :class="[currentStep == 3 ? 'bg-[#295F2D]' : 'bg-[#D9D9D9]']"
              class="w-[105px] h-[8px] rounded-full"
            ></div>
          </div>
        </div>

        <div :class="[currentStep == 1 ? '' : 'hidden']" class="form">
          <div class="space-y-[10px]">
            <p class="font-[600] text-[18px]">What are you funding for?</p>

            <div
              class="border border-[#000] rounded-2xl p-3 mt-[20px] md:mt-[0px]"
            >
              <select
                v-model="category"
                class="w-full bg-transparent border-none outline-none"
              >
                <option selected>Choose Category</option>
                <option v-for="cat in Categories" :value="cat.category_id">
                  {{ cat.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="space-y-[20px] py-5">
            <p class="font-[600] text-[18px]">Give your fundraiser a title?</p>
            <input
              v-model="title"
              class="border w-full border-[#000] rounded-2xl p-3"
              placeholder="Ex. Help my friend complete his school feee"
            />
          </div>
          <div class="space-y-[20px]">
            <p class="font-[600] text-[18px]">Tell your story</p>
            <div class="border rounded-2xl w-full border-[#000] p-3">
              <textarea
                v-model="description"
                class="w-full bg-transparent border-none outline-none"
                rows="4"
              ></textarea>
              {{ description.length }}
            </div>
            <p class="text-[10px]">
              Description should not be less than 150 letters*
            </p>
          </div>
          <div class="next-button py-[40px]">
            <div
              :class="[currentStep == 4 ? 'hidden' : '']"
              @click="nextSlide()"
              class="bg-[#295F2D] text-center cursor-pointer font-[700] font-poppins py-[11px] text-[#fff] rounded-2xl mx-auto"
            >
              {{ currentStep > 2 ? "Complete Fundraising" : "Next" }}
            </div>
          </div>
        </div>

        <!-- second slide  -->
        <div :class="[currentStep == 2 ? '' : 'hidden']" class="form">
          <div class="space-y-[10px]">
            <p class="font-poppins font-[600] text-[18px]">
              How much would you like to raise?
            </p>
            <div class="">
              <div class="w-full border-2 border-[#93939] rounded-2xl p-3">
                <input
                  type="number"
                  v-model="goal"
                  placeholder="e.g 50000"
                  class="bg-[#fff] w-full border-none bg-transparent outline-none rounded full"
                />
              </div>
              <p class="text-[#939393] text-[14px] font-[500]">
                Please Know that transaction fees including credit and debit
                charge are deducted from each donation.
              </p>
            </div>
          </div>
          <div class="py-2 space-y-[10px]">
            <p class="font-poppins font-[600] text-[18px]">
              When would you want you bucket to end?
            </p>
            <div class="">
              <div class="w-full border-2 border-[#93939] rounded-2xl p-3">
                <input
                  type="date"
                  v-model="endDate"
                  :min="today"
                  class="bg-[#fff] w-full border-none bg-transparent outline-none rounded full"
                />
              </div>
            </div>
          </div>
          <div class="space-y-[10px]">
            <p class="font-poppins font-[600] text-[18px]">
              Who are you fundraising for?
            </p>
            <div class="space-y-[10px]">
              <div
                @click="setForWho(item.target)"
                :class="[
                  forWho == item.target
                    ? 'bg-[#BDCDBE] border-[#295F2D] text-[#295F2D]'
                    : '',
                ]"
                v-for="item in forWhoList"
                class="cursor-pointer flex border-2 rounded-2xl py-[16px] justify-between px-4"
              >
                <div class="start font-[500] text-[16px]">
                  {{ item.target }}
                </div>
                <div v-if="forWho != item.target" class="check">
                  <img src="/smallCheck.svg" alt="" />
                </div>
                <div v-if="forWho == item.target" class="check">
                  <img src="/smallChecked.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="next-button py-[40px]">
            <div
              @click="submit()"
              class="bg-[#295F2D] text-center cursor-pointer font-[700] font-poppins py-[11px] text-[#fff] rounded-2xl mx-auto"
            >
              {{ loading == true ? "Loading..." : "Proceed" }}
            </div>
          </div>
        </div>

        <!-- third slide  -->
        <div
          :class="[currentStep == 3 ? '' : 'hidden']"
          class="form space-y-[30px]"
        >
          <div class="">
            <p class="text-[32px] font-[800] font-poppins">Add an image</p>
          </div>
          <div
            class="flex justify-center items-center w-full rounded-2xl bg-[#F3F3F3] h-[300px]"
          >
            <div class="space-y-[8px]">
              <div class="flex items-center justify-center w-full">
                <label for="postFile">
                  <img src="/image.svg" />
                </label>
                <input
                  type="file"
                  id="postFile"
                  @change="chooseImage"
                  class="hidden"
                />
              </div>
              <p
                class="text-[#939393] font-[500] text-[16px] font-poppins cursor-pointer"
              >
                {{ imageFile.name ? imageFile.name : "Upload image here" }}
              </p>
            </div>
          </div>
          <div class="next-button py-[40px]">
            <div
              @click="upload()"
              class="bg-[#295F2D] text-center cursor-pointer font-[700] font-poppins py-[11px] text-[#fff] rounded-2xl mx-auto"
            >
              {{ loading == true ? "Loading..." : "Upload" }}
            </div>
          </div>
        </div>

        <!-- success slide  -->
        <div
          :class="[currentStep == 4 ? '' : 'hidden']"
          class="form space-y-[140px] py-[100px]"
        >
          <div class="flex items-center justify-center">
            <img class="" src="/bigCheck.svg" />
          </div>
          <div class="space-y-[30px]">
            <p class="text-center font-poppins font-[700] text-[24px]">
              Successfully Completed
            </p>
            <div
              :class="[currentStep == 4 ? '' : 'hidden']"
              @click="this.$router.push('/dashboard')"
              class="bg-[#295F2D] cursor-pointer text-center font-[700] font-poppins px-[90px] py-[11px] text-[#fff] rounded-2xl mx-auto"
            >
              Done
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "CreateBucket",
  data() {
    return {
      loading: false,
      category: "choose your category",
      today: "",
      goal: "",
      endDate: "",
      description: "",
      title: "",
      Categories: [],
      currentStep: 1,
      imageFile: [],
      bucket_id: "",
      forWho: "",
      forWhoList: [
        { icon: "", target: "Yourself" },
        { icon: "", target: "A Friend" },
        { icon: "", target: "Charity" },
      ],
    };
  },
  async mounted() {
    const today = new Date().toISOString().split("T")[0];
    this.today = today;
    const getCategories = import.meta.env.VITE_APP_ENGINE + "categories";
    axios.get(getCategories).then((res) => {
      this.Categories = res.data.data;
    });
  },
  methods: {
    async submit() {
      //check if description
      if (this.description.length < 150) {
        swal("Description should not be less than 150 letters", {
          icon: "error",
          buttons: false,
          timer: 3000,
          class: "font-poppins font-[700] text-[300px]",
        });
        return;
      }
      this.loading = true;
      const createBucket = import.meta.env.VITE_APP_ENGINE + "buckets";
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + this.$store.state.token;
      await axios
        .post(createBucket, {
          category_id: this.category,
          goal: this.goal,
          user_id: this.$store.state.user.user_id,
          end_date: this.endDate,
          title: this.title,
          description: this.description,
        })
        .then((res) => {
          this.loading = false;
          this.bucket_id = res.data.bucket_id;
          this.currentStep++;
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
    },
    async upload() {
      this.loading = true;
      const uploadLink =
        import.meta.env.VITE_APP_ENGINE + "upload_bucket_image";
      const data = new FormData();

      if (this.imageFile) {
        data.append("image", this.imageFile);
        data.append("bucket_id", this.bucket_id);
      }
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + this.$store.state.token;
      axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
      await axios
        .post(uploadLink, data)
        .then((res) => {
          this.loading = false;
          this.currentStep++;
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
    },
    chooseImage(e) {
      this.imageFile = e.target.files[0];
    },
    setForWho(item) {
      this.forWho = item;
    },
    nextSlide() {
      if (this.currentStep < 4) {
        this.currentStep++;
      }
    },
    prevSlide() {
      if (this.currentStep == 1) {
        this.$router.push("/dashboard");
      }
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
  },
};
</script>
