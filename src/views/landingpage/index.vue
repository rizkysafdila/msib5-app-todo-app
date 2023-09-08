<script setup lang="ts">
// Todo Layout
import LandingLayout from '../../layouts/landing/index.vue'

// Components
import Hero from '../../components/Landing/Hero/index.vue'
import Categories from '../../components/Landing/Categories/index.vue'
import FlashSale from '../../components/Landing/FlashSale/index.vue'
import LatestProduct from '../../components/Landing/LatestProduct/index.vue'
import Promo from '../../components/Landing/Promo/index.vue'
import ForYou from '../../components/Landing/ForYou/index.vue'
import Newsletter from '../../components/Landing/Newsletter/index.vue'
import Footer from '../../components/Landing/Footer/index.vue'
</script>

<template>
  <LandingLayout>
    <Hero />
    <Categories />
    <FlashSale />
    <LatestProduct />
    <Promo />
    <LatestProduct />
    <ForYou />
    <Newsletter />
    <Footer />
  </LandingLayout>
</template>