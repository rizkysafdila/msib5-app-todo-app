<script setup lang="ts">
interface TodoFilterProps {
  title: string
  isActive: boolean
}

defineProps<TodoFilterProps>()
</script>

<template>
  <button
  class="text-white px-5 py-2.5 bg-zinc-900 rounded-lg border transition-colors duration-200 hover:border-emerald-500"
  :class="{ 'border-emerald-500': isActive, 'border-zinc-900': !isActive}"
  >
    {{ title }}
  </button>
</template>
