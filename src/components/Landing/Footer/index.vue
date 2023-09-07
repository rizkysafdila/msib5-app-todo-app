<script setup lang="ts">
// Icons
import { IconInfoCircle } from '@tabler/icons-vue'

// Footer Links
import footerLinks from './links'

// Social Links
import socials from './socials'
</script>

<template>
  <section class="bg-gray-900">
    <div class="container mx-auto flex flex-wrap justify-between items-center gap-8 py-12 px-8">
      <div class="flex flex-col gap-2">
        <h2 class="text-white text-xl font-semibold">Join our newsletter</h2>
        <p class="text-white font-normal">Join over 4,000+ startups already growing with Morpheme.</p>
      </div>
      <div class="flex items-start gap-4">
        <div class="w-full flex flex-col gap-2">
          <input type="email"
            class="w-64 bg-white border border-gray-300 rounded-lg p-3.5 text-gray-500 placeholder:text-sm font-normal"
            placeholder="Enter your email">
          <div class="inline-flex">
            <IconInfoCircle color="#667085" :size="18" />
            <span class="ml-1 text-white text-sm">This is a hint text to help user.</span>
          </div>
        </div>
        <button class="text-white px-[18px] py-3.5 bg-primary-600 rounded-lg font-semibold text-center">Subscribe</button>
      </div>
    </div>
  </section>

  <footer class="bg-gray-800">
    <div class="container mx-auto flex justify-between lg:gap-8 xl:gap-0 py-12 lg:py-24 px-8">
      <div class="max-w-xs flex flex-col gap-8">
        <div class="flex gap-2.5">
          <img src="@/assets/images/logos/Logomark.svg" alt="GITS ID">
          <img src="@/assets/images/logos/Logotype-White.png" alt="GITS ID">
        </div>
        <p class="text-gray-200 font-normal line-clamp-2">
          Design amazing digital experiences that create more happy in the world.
        </p>
      </div>
      <div class="flex flex-col" v-for="link in footerLinks" :key="link.title">
        <h6 class="text-gray-300 text-sm font-semibold mb-4">{{ link.title }}</h6>
        <ul class="flex flex-col gap-3">
          <li v-for="item in link.links">
            <router-link :to="item.url"
              class="text-gray-200 font-semibold hover:text-gray-500 transform-cpu duration-200">{{ item.label
              }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="container mx-auto px-8 p-12">
      <hr class="border-gray-600">
      <div class="flex justify-between items-center mt-8">
        <p class="text-gray-500 font-normal">© 2077 Morpheme UI. All rights reserved.</p>
        <ul class="flex gap-6">
          <li class="lg:p-1" v-for="item in socials" :key="item.fileName">
            <a :href="item.url" target="_blank">
              <img :src="`./src/assets/icons/${item.fileName}.svg`" class="w-6 h-6" :alt="item.fileName">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
