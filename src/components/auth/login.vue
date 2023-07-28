<template>
    <div class="flex items-center justify-center lg:h-screen">
      <div class="bg-[#fff] w-[820px] rounded-lg px-[45px] py-[50px]">
        <div class="form">
          <h1 class="pb-4 font-poppins font-extrabold text-4xl text-[#484848]">
            Welcome Back
          </h1>
          <p class="pb-7 font-inter font-medium text-base text-[#484848]">
            We're here to guide you’re back
          </p>
          <section>
            <input
              class="mb-4 app-input"
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              placeholder="Email address"
              v-model="email" />

            <div class="flex items-center justify-between mt-4 app-input">
              <input
                class="bg-transparent outline-none"
                :type="[seePassword == true ? 'password' : 'text']"
                name="password"
                id="password"
                autocomplete="password"
                placeholder="Password"
                v-model="password" />

              <div class="" @click="seePassword = !seePassword">
                <i class="fas fa-eye-slash" v-if="seePassword == false"></i>
                <i class="fas fa-eye" v-if="seePassword == true"></i>
              </div>
            </div>
          </section>
          <div class="py-7 font-poppins font-semibold text-xs text-[#295F2D] cursor-pointer"
          >
           <span  @click="$emit('setLoginFlow','ForgetPassword')">Forgotten Password?</span>
          </div>
          <div>
            <span class="flex">
              <span class="flex gap-1 font-medium font-inter text-appGreen400"
                ><p>No account?</p>
                <button
                  @click="this.$router.push('/signup')"
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
                  @click="$emit('signin')">
                  <span class="text-base font-bold font-poppins">
                    {{ loading == true ? "loading..." : "Sign In" }}</span
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