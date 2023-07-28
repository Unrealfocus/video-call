<template>
    <div class="flex items-center justify-center lg:h-screen">
      <div class="bg-[#fff] w-[820px] rounded-lg px-[45px] py-[50px]">
        <div class="form">
          <h1 class="pb-4 font-poppins font-extrabold text-4xl text-[#484848]">
           Re-enter your Email?
          </h1>
          <p class="pb-7 font-inter font-medium text-base text-[#484848]">
            Please,Make sure it's your correct Email
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
export default{
  props: ['loading','setForgetPassWord'],
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