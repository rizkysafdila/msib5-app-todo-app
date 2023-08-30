<script setup lang="ts">
import { ref } from 'vue'

interface TodoItemProps {
  title: string
  completed: boolean
}

const props = defineProps<TodoItemProps>()

const isCompleted = ref<boolean>(props.completed)

function toggleCompleted(): void {
  isCompleted.value = !isCompleted.value
}
</script>

<template>
  <div class="flex bg-zinc-700 rounded-lg w-full items-center p-6">
    <input type="checkbox" @click="toggleCompleted"
      class="w-5 h-5 text-emerald-600 rounded bg-transparent border border-gray-200 border-opacity-50 checked:ring-0 focus:ring-emerald-600 focus:border-0 focus:ring-offset-0" :checked="isCompleted">
    <div class="relative w-full">
      <label :class="['md:text-xl', 'text-gray-200', 'ml-5', { 'line-through': isCompleted }]">{{ props.title }}</label>
      <div class="absolute top-0 right-0">
        <button class="text-gray-200 text-2xl hover:text-rose-500 transition-colors duration-200">🗑</button>
      </div>
    </div>
  </div>
</template>
