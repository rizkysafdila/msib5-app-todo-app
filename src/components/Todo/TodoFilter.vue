<script setup lang="ts">

interface TodoFilterProps {
  title: string
  active?: boolean
}

defineProps<TodoFilterProps>()
</script>

<template>
  <button
    :class="['text-white px-5 py-2.5 bg-zinc-900 rounded-lg border border-zinc-900 transition-colors duration-200 hover:border-emerald-500',
    { 'border-emerald-500': active }]"
  >
    {{ title }}
  </button>
</template>