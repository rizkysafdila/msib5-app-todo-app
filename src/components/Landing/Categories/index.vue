<script setup lang="ts">
// Icons
import { IconArrowRight } from '@tabler/icons-vue'

// Categories
import categories from './categories'
</script>

<template>
  <section class="bg-gradient-to-t from-white via-white">
    <div class="container mx-auto lg:gap-8 xl:gap-0 py-12 lg:py-24 px-8">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-gray-900 text-2xl font-semibold">Categories</h2>
        <router-link to="#" class="flex gap-3 text-primary-700 text-lg font-semibold">
          <span>View All</span>
          <IconArrowRight />
        </router-link>
      </div>
      <div class="flex justify-between">
        <div class="flex flex-col gap-5 justify-center items-center" v-for="item in categories" :key="item.title">
          <img :src="`./src/assets/images/categories/${item.fileName}.svg`" class="w-32" :alt="item.fileName">
          <h5 class="text-[#212529] font-semibold text-center">{{ item.title }}</h5>
        </div>
      </div>
    </div>
  </section>
</template>