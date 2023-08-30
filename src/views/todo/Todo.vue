<script setup lang="ts">
import TodoFilter from '../../components/Todo/TodoFilter.vue'
import TodoList from '../../components/Todo/TodoList.vue'
import { onMounted } from 'vue';
import { useTodoStore } from '../../store/todo';

const todoStore = useTodoStore()

onMounted(() => {
  todoStore.fetchTodos()
})
</script>

<template>
  <h1 class="text-white text-center font-light text-6xl md:text-8xl">Todos</h1>
  <div class="flex flex-col justify-center m-6">
      <input type="text"
      class="bg-zinc-700 rounded-lg w-full p-5 md:text-2xl text-white placeholder:text-zinc-400 focus:border-emerald-600 focus:ring-emerald-600"
      placeholder="✎ What needs to be done" />
    <div class="flex justify-between items-center mt-5">
      <p class="text-white">4 Items Left</p>
      <div class="flex justify-center gap-3">
        <TodoFilter title="All" active />
        <TodoFilter title="Active" />
        <TodoFilter title="Completed" />
      </div>
      <button class="text-white hover:text-rose-500 transition-colors duration-200">Clear Completed</button>
    </div>
    <TodoList :todos="todoStore.todos"/>
  </div>
</template>