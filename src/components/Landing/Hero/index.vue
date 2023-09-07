<script setup lang="ts">

</script>

<template>
  <section>
    <div class="grid container mx-auto lg:gap-8 xl:gap-0 py-12 lg:py-24 lg:grid-cols-12 px-8">
      <div class="order-2 md:order-1 mr-auto place-self-center lg:col-span-6">
        <h1 class="max-w-2xl mb-6 text-4xl font-semibold text-gray-900 tracking-tight md:text-5xl xl:text-6xl">
          Welcome to GITS Commerce
        </h1>
        <p class="max-w-lg font-normal text-gray-600 mb-12 md:text-lg lg:text-xl">
          Morpheme is a next-gen financial technology company in the process of reinventing banking.
        </p>
        <router-link to="#"
          class="inline-flex gap-3 items-center justify-center px-7 py-4 mr-3 text-lg font-semibold text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
          <img src="@/assets/icons/shopping-cart.svg" alt="">
          <span>Start Shopping</span>
        </router-link>
      </div>
      <div class="order-1 lg:mt-0 lg:col-span-6 lg:flex">
        <img src="@/assets/images/sectionHero/hero.png" alt="Hero Image">
      </div>
    </div>
  </section>
</template>