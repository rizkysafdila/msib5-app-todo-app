<script setup lang="ts">
// Swiper
import { Swiper, SwiperSlide } from 'swiper/vue'

// Icons
import { IconChevronRight } from '@tabler/icons-vue'

// Component
import SectionHeader from '../SectionHeader.vue'
import ProductCard from '../Cards/ProductCard.vue'

// Products Data
import products from '../Cards/products'
</script>

<template>
  <section class="bg-white">
    <div class="container mx-auto lg:gap-8 xl:gap-0 py-12 lg:py-24 px-8">
      <SectionHeader title="Latest Product" button-url="#" />
      <div class="flex items-center relative">
        <div class="flex flex-col min-w-[352px] h-[494px] justify-between bg-primary px-8 py-10 rounded-2xl">
          <p class="text-white text-2xl font-normal">Discount</p>
          <p class="max-w-[216px] text-white text-5xl font-semibold">More and More</p>
          <p class="text-white text-2xl font-normal mt-20">Up To</p>
          <p class="text-[#FCE834] text-7xl font-semibold">50%</p>
        </div>
        <div class="w-full -ml-28 overflow-hidden">
          <Swiper :slides-per-view="4" :mousewheel="true">
            <SwiperSlide v-for="product in products" :key="product.title">
              <ProductCard :data="product" />
            </SwiperSlide>
          </Swiper>
        </div>
        <button class="md:absolute md:z-10 md:-end-6 md:top-1/2 text-white bg-black opacity-30 p-2 rounded-full">
          <IconChevronRight :size="32" />
        </button>
      </div>
    </div>
  </section>
</template>