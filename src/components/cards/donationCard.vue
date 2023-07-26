<script>
export default {
  props: ["item", "assets"],
};
</script>
<template>
  <div class="flex-shrink-0 w-full">
    <figure>
      <img
        :src="assets + item.images[0].image_url"
        class="object-cover object-center w-full h-44 rounded-2xl"
        alt="" />

      <button
        type="button"
        class="flex items-center px-2 py-1 my-3 rounded-lg bg-appGreen100">
        <span
          class="text-sm font-bold shadow-md text-appGreen200 font-poppins shadow-appGreen100">
          {{ item.category }}
        </span>
        <img src="/Vector.svg" alt="vector" class="px-2" />
      </button>
      <div class=" ">
        <p class="text-base font-semibold font-poppins">
          {{
            item.bucket.title.length > 24
              ? item.bucket.title.slice(0, 24) + "..."
              : item.bucket.title
          }}
        </p>
        <p class="text-[10px]">by {{ item.author }}</p>
      </div>
      <div class="h-[100px]">
        <p class="mt-5 mb-2 text-sm font-medium font-poppins">
          {{
            item.bucket.description.length > 150
              ? item.bucket.description.substring(120, 0) + "..."
              : item.bucket.description
          }}
        </p>
      </div>

      <dl class="flex py-[10px]">
        <div class="flex flex-1 mr-3 rounded-full bg-appGray100">
          <span
            :style="{ width: item.goal_percent + '%' }"
            class="bg-yellow-500 rounded-full" />
        </div>
        <data value="60" class="font-poppins font-medium text-sm text-[#000000]"
          >{{ item.goal_percent.length < 1 ? "0" : item.goal_percent }}%</data
        >
      </dl>

      <dl class="flex justify-between my-4">
        <span class="flex">
          <dt class="font-bold font-poppins text-xs mr-1 text-[#000000]">
            Raised:
          </dt>

          <dd class="font-medium font-poppins text-xs text-[#000000]">
            ₦{{ item.donated }}
          </dd>
        </span>
        <span class="flex">
          <dt class="font-bold font-poppins text-xs text-[#295F2D] mr-1">
            Goal:
          </dt>
          <dd class="font-medium font-poppins text-xs text-[#295F2D]">
            {{
              Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "NGN",
              }).format(parseInt(item.bucket.goal))
            }}
          </dd>
        </span>
      </dl>
      <button
        @click="this.$router.push('/bucket/' + item.bucket.bucket_id)"
        class="bg-appGreen300 w-full rounded-full py-2 font-semibold font-poppins text-lg text-[#FFFFFF] hover:opacity-70"
        type="button">
        Donate
      </button>
    </figure>
  </div>
</template>
