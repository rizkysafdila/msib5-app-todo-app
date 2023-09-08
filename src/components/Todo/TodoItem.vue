<script setup lang="ts">
// Vue
import { ref } from 'vue'

// Interface Todo
import { ITodo } from '../../types/todo.type'

interface TodoItemProps {
  todo: ITodo,
  updateTodo: (id: number, title: string, completed: boolean) => void,
  deleteTodo: (id: number) => void
}

defineProps<TodoItemProps>()

const hideButton = ref<boolean>(true)
</script>

<template>
  <div 
    class="flex bg-zinc-700 rounded-lg w-full items-center p-6"
    @mouseover="hideButton = false"
    @mouseleave="hideButton = true"
  >
    <input 
      type="checkbox"
      @change="updateTodo(todo.id, todo.title, todo.completed)"
      class="w-5 h-5 text-emerald-600 rounded bg-transparent border border-gray-200 border-opacity-50 checked:ring-0 focus:ring-emerald-600 focus:border-0 focus:ring-offset-0"
      v-model="todo.completed"
      :checked="todo.completed"
    />
    <div class="relative w-full">
      <label :class="['md:text-xl', 'text-gray-200', 'ml-5', { 'line-through': todo.completed }]">{{ todo.title }}</label>
      <div class="absolute top-0 right-0">
        <button 
          @click="deleteTodo(todo.id)" 
          class="text-gray-200 text-2xl hover:text-rose-500 transition-colors duration-200"
          :class="{ 'hidden' : hideButton }"
        >
        <span>🗑</span>
      </button>
      </div>
    </div>
  </div>
</template>
