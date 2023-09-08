<script setup lang="ts">
// Icons
import { IconInfoCircle } from '@tabler/icons-vue'
</script>

<template>
  <section class="bg-gray-900">
    <div class="container mx-auto flex flex-wrap justify-between items-center gap-8 py-12 px-8">
      <div class="flex flex-col gap-2">
        <h2 class="text-white text-xl font-semibold">Join our newsletter</h2>
        <p class="text-white font-normal">Join over 4,000+ startups already growing with Morpheme.</p>
      </div>
      <div class="flex flex-col gap-2">
        <div class="grid grid-cols-12 gap-2">
          <div class="col-span-7 md:col-span-8 flex flex-col gap-2">
            <input type="email"
              class="bg-white border border-gray-300 rounded-lg p-3.5 text-gray-500 placeholder:text-sm font-normal"
              placeholder="Enter your email">
          </div>
          <button
            class="col-span-5 md:col-span-4 text-white px-[18px] py-3.5 bg-primary-600 rounded-lg font-semibold text-center">
            Subscribe
          </button>
        </div>
        <div class="inline-flex">
          <IconInfoCircle color="#667085" :size="18" />
          <span class="ml-1 text-white text-sm">This is a hint text to help user.</span>
        </div>
      </div>
    </div>
  </section>
</template>