<script setup lang="ts">
withDefaults(defineProps<{
  title: string,
  active?: boolean
}>(), {
  title: 'Button',
  active: false
})
</script>

<template>
  <button
    :class="['text-white px-5 py-2.5 bg-zinc-900 rounded-lg border border-zinc-900 transition-colors duration-200 hover:border-emerald-500', { 'border-white': active }]"
  >
    {{ title }}
  </button>
</template>