<script setup lang="ts">
// Components
import Navbar from './components/Navigation/Navbar.vue'
</script>

<template>
  <div class="mx-auto max-w-4xl">
    <Navbar />
    <router-view />
  </div>
</template>
