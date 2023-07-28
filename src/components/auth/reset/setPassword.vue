<template>
    <div class="flex items-center justify-center lg:h-screen">
      <div class="bg-[#fff] w-[820px] rounded-lg px-[45px] py-[50px]">
        <div class="form">
          <h1 class="pb-4 font-poppins font-extrabold text-4xl text-[#484848]">
           Set New Password
          </h1>
          <p class="pb-7 font-inter font-medium text-base text-[#484848]">
            Must be atleast 8 characters
          </p>
          <section>
            <div class="flex items-center justify-between mt-4 app-input">
              <input
                class="bg-transparent outline-none"
                :type="[seePassword == true ? 'password' : 'text']"
                name="password"
                id="password"
                autocomplete="password"
                placeholder="New Password"
                :value="password"
                @input="$emit('update:password', $event.target.value)" 
                />

              <div class="" @click="seePassword = !seePassword">
                <i class="fas fa-eye-slash" v-if="seePassword == false"></i>
                <i class="fas fa-eye" v-if="seePassword == true"></i>
              </div>
            </div>
            <div class="flex items-center justify-between mt-4 app-input">
              <input
                class="bg-transparent outline-none"
                :type="[seePassword == true ? 'password' : 'text']"
                name="password"
                id="password"
                autocomplete="password"
                placeholder="Confirm Password"
                :value="confirmPassword"
                @input="$emit('update:confirmPassword', $event.target.value)" 
               />

              <div class="" @click="seePassword = !seePassword">
                <i class="fas fa-eye-slash" v-if="seePassword == false"></i>
                <i class="fas fa-eye" v-if="seePassword == true"></i>
              </div>
            </div>
          </section>  
          <div>
            <div class="mt-7">
              <div class="mx-auto">
                <button
                  type="button"
                  class="w-full rounded-2xl bg-[#2A5E2A] border-[1px] border-[#fff] text-[#fff] py-3 text-[14px] m-3"
                  @click="$emit('SendNewPassword')">
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
<script setup>
 defineProps({
  password: "",
  confirmPassword: "",
  loading:Boolean
})


defineEmits(['update:password', 'update:confirmPassword'])

</script>