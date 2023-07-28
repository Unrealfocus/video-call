<template>
    <div class="flex items-center justify-center lg:h-screen">
      <div class="bg-[#fff] w-[820px] rounded-lg px-[45px] py-[50px]">
        <div class="form">
          <h1 class="pb-4 font-poppins font-extrabold text-4xl text-[#484848]">
           Forget Password?
          </h1>
          <p class="pb-7 font-inter font-medium text-base text-[#484848]">
            No worries, we will send you reset instruction
          </p>
          <section>
            <input
              class="mb-4 app-input"
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              placeholder="Email address"
              v-model="inputValue" />

           
          </section>
          <div>
            <span class="flex">
              <span class="flex gap-1 font-medium font-inter text-appGreen400"
                ><p> Do you remember your password?</p>
                <button
                 @click="$emit('setLoginFlow','signin')"
                  class="underline text-appGreen200"
                  type="button">
                  Sign Up
                </button></span
              >
            </span>
            <div class="mt-7">
              <div class="mx-auto">
                <button
                  type="button"
                  class="w-full rounded-2xl bg-[#2A5E2A] border-[1px] border-[#fff] text-[#fff] py-3 text-[14px] m-3"
                  @click="$emit('SendResetEmail')">
                  <span class="text-base font-bold font-poppins">
                    {{ loading == true ? "loading..." : "Reset Password" }}</span
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
export default
{
  props: ['loading', 'setForgetPassWord', 'modelValue'],
  computed: {
    inputValue: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>