<script setup lang="ts">
// Components
import Navbar from '../../components/Navigation/todo/Navbar.vue'
</script>

<template>
  <div class="bg-zinc-800 h-screen">
    <div class="mx-auto max-w-4xl">
    <Navbar />
    
    <slot></slot>
  </div>
  </div>
</template>
