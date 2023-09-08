<script setup lang="ts">
// Components
import SectionHeader from '../SectionHeader.vue'
import ProductCard from '../Cards/ProductCard.vue'

// Products Data
import products from '../Cards/products'
</script>

<template>
  <section class="bg-white">
    <div class="container mx-auto lg:gap-8 xl:gap-0 py-12 lg:py-24 px-8">
      <SectionHeader title="For You" button-url="#" />
      <div class="flex flex-wrap md:items-center gap-3 lg:gap-6">
        <div class="min-w-full md:min-w-min" v-for="product in products" :key="product.title">
          <ProductCard :data="product" />
        </div>
      </div>
    </div>
  </section>
</template>