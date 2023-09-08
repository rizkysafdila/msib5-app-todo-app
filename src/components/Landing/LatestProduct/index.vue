<script setup lang="ts">
// Vue
import { computed } from 'vue'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
// import 'swiper/css/navigation'

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
    slidesPerView: 2,
    spaceBetween: 24
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 24
  },
  1440: {
    slidesPerView: 4,
    spaceBetween: 24
  }
}

const latestProducts = computed(() => {
  return products.slice(0, 10)
})
</script>

<template>
  <section class="bg-white">
    <div class="container mx-auto lg:gap-8 xl:gap-0 py-12 lg:py-24 px-8">
      <SectionHeader title="Latest Product" button-url="#" />
      <div class="flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center relative">
        <div class="w-full flex flex-col md:max-w-[352px] md:h-[494px] justify-between bg-primary px-8 py-10 rounded-2xl">
          <div class="flex flex-col">
            <p class="text-white text-lg md:text-2xl font-normal">Discount</p>
            <p class="md:max-w-[216px] text-white text-2xl md:text-5xl font-semibold">More and More</p>
          </div>
          <div class="flex flex-col mt-10 md:mt-20">
            <p class="text-white text-lg md:text-2xl font-normal">Up To</p>
            <p class="text-[#FCE834] text-5xl md:text-7xl font-semibold">50%</p>
          </div>
        </div>
        <div class="w-full mt-4 md:mt-0 md:-ml-28 overflow-hidden">
          <Swiper :slides-per-view="1" :space-between="24" :breakpoints="breakpoints" :navigation="true" :modules="[Navigation]">
            <SwiperSlide v-for="product in latestProducts" :key="product.title">
              <ProductCard :data="product" />
            </SwiperSlide>
          </Swiper>
        </div>
        <button class="absolute z-10 -end-6 top-2/3 md:top-1/2 text-white bg-black opacity-30 p-2 rounded-full">
          <IconChevronRight :size="32" />
        </button>
      </div>
    </div>
  </section>
</template>