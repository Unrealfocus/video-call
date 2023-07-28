<template>
    <div class="flex items-center justify-center lg:h-screen">
      <div class="bg-[#fff] w-[820px] rounded-lg px-[45px] py-[50px]">
        <div class="form">
          <h1 class="pb-4 font-poppins font-extrabold text-4xl text-[#484848] text-center">
           All Done
          </h1>
          <p class="pb-7 font-inter font-medium text-base text-[#484848] text-center">
           Your password has been reset, Your can now signin
          </p>
          <div>
            <div class="mt-7">
              <div class="mx-auto">
                <button
                  type="button"
                  class="w-full rounded-2xl bg-[#2A5E2A] border-[1px] border-[#fff] text-[#fff] py-3 text-[14px] m-3"
                  @click="this.$router.push('/sign-in/')">
                  <span class="text-base font-bold font-poppins">
                    {{ loading == true ? "loading..." : "sign in" }}</span
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default{
  props: ['loading']
}
</script>