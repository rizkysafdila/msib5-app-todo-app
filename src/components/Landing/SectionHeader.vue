<script setup lang="ts">
// Icons
import { IconArrowRight } from '@tabler/icons-vue'

interface ISectionHeaderProps {
  title: string
  buttonUrl: string
}

defineProps<ISectionHeaderProps>();
</script>

<template>
  <div class="flex justify-between items-center mb-8">
    <div class="flex items-center gap-3">
      <h2 class="text-gray-900 text-2xl font-semibold">{{ title }}</h2>
      <slot name="timer"></slot>
    </div>
    <slot name="button">
      <router-link :to="buttonUrl" class="flex gap-3 text-primary-700 text-lg font-semibold">
        <span>View All</span>
        <IconArrowRight />
      </router-link>
    </slot>
  </div>
</template>