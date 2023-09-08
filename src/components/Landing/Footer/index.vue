<script setup lang="ts">
// Footer Links
import footerLinks from './links'

// Social Links
import socials from './socials'
</script>

<template>
  <footer class="bg-gray-800">
    <div class="container mx-auto flex flex-wrap md:justify-between gap-8 xl:gap-0 py-12 lg:py-24 px-8">
      <div class="max-w-xs flex flex-col gap-8">
        <div class="flex gap-2.5">
          <img src="@/assets/images/logos/Logomark.svg" alt="GITS ID">
          <img src="@/assets/images/logos/Logotype-White.png" alt="GITS ID">
        </div>
        <p class="text-gray-200 font-normal line-clamp-2">
          Design amazing digital experiences that create more happy in the world.
        </p>
      </div>
      <div class="flex flex-col mt-12" v-for="link in footerLinks" :key="link.title">
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
    <div class="container mx-auto px-8 py-12">
      <hr class="border-gray-600">
      <div class="flex flex-wrap justify-center md:justify-between items-center mt-8">
        <p class="text-gray-500 text-center font-normal mb-5">© 2077 Morpheme UI. All rights reserved.</p>
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
