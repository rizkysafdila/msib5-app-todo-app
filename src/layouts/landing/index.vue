<script setup lang="ts">
// Components
import Navbar from '../../components/Navigation/landing/Navbar.vue'
</script>

<template>
  <div class="bg-gradient-to-b from-[#D8EEFD] to-white">
    <Navbar />
    
    <slot></slot>
  </div>
</template>
