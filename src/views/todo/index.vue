<script setup lang="ts">
// Components
import TodoForm from '../../components/Todo/TodoForm.vue'
import TodoFilter from '../../components/Todo/TodoFilter.vue'
import TodoList from '../../components/Todo/TodoList.vue'

// Vue
import { onMounted } from 'vue'

// Pinia
import { useTodoStore } from '../../store/todo'

const todoStore = useTodoStore()

onMounted(() => {
  todoStore.fetchTodos()
})
</script>

<template>
  <h1 class="text-white text-center font-light text-6xl md:text-8xl">Todos</h1>
  <div class="flex flex-col justify-center m-6">
    <TodoForm @add="todoStore.addTodo" placeholder="✎ What needs to be done" />
    <div class="flex justify-between items-center mt-5">
      <p class="text-white">{{ todoStore.getIncompleteTodosCount }} Items Left</p>
      <div class="flex justify-center gap-3">
        <TodoFilter @click="todoStore.FILTER_ALL" title="All" active />
        <TodoFilter @click="todoStore.FILTER_ACTIVE" title="Active" />
        <TodoFilter @click="todoStore.FILTER_COMPLETED" title="Completed" />
      </div>
      <button class="text-white hover:text-rose-500 transition-colors duration-200">Clear Completed</button>
    </div>
    <TodoList :todos="todoStore.filteredTodos" :store="todoStore" />
  </div>
</template>