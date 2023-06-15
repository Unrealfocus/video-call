<template>
  <div class="top-bar w-full bg-[#fff] py-[21px]">
    <div class="w-[90%] md:w-[] mx-auto flex">
      <div class="w-2/3">
        <div
          class="bg-[#F3F3F3] rounded-full p-[12px] flex items-center space-x-[24px]">
          <div class="">
            <img src="/smallCheck.svg" />
          </div>
          <div class="">
            <input
              type="text"
              placeholder="Search"
              class="bg-transparent outline-none font-[600] text-[16px]" />
          </div>
        </div>
      </div>
      <div class="flex">notification</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Topbar",
};
</script>
