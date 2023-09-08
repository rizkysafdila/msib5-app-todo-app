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

const breakpoints = {
  480: {
    slidesPerView: 2,
    spaceBetween: 24
  },
  640: {
    slidesPerView: 3,
    spaceBetween: 24
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 24
  },
  1440: {
    slidesPerView: 5,
    spaceBetween: 24
  },
}
</script>

<template>
  <section class="bg-gray-50">
    <div class="container mx-auto lg:gap-8 xl:gap-0 py-12 lg:py-24 px-8">
      <SectionHeader title="Flash Sale" button-url="#">
        <template v-slot:timer>
          <div class="text-white text-xl font-medium bg-red-500 rounded-lg p-2">00:12:12</div>
        </template>
      </SectionHeader>
      <div class="relative flex flex-wrap md:items-center gap-3 lg:gap-6">
        <button class="absolute z-10 -end-6 top-1/2 text-white bg-black opacity-30 p-2 rounded-full">
          <IconChevronRight :size="32" />
        </button>
        <Swiper :slides-per-view="1" :space-between="24" :breakpoints="breakpoints" :mousewheel="true">
          <SwiperSlide v-for="product in products" :key="product.title">
            <ProductCard :data="product" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>