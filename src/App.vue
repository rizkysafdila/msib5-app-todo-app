<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="mx-auto max-w-4xl">
    <Navbar />
    <router-view />
  </div>
</template>
