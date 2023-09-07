<script setup lang="ts">
// Todo Layout
import TodoLayout from '../../layouts/todo/index.vue'

// Components
import TodoForm from '../../components/Todo/TodoForm.vue'
import TodoFilter from '../../components/Todo/TodoFilter.vue'
import TodoList from '../../components/Todo/TodoList.vue'
import Loader from '../../components/General/Loader.vue'

// Vue
import { onMounted } from 'vue'

// Pinia
import { useTodoStore } from '../../store/todo'

const todoStore = useTodoStore()

onMounted(() => {
  todoStore.fetchTodos()
})

const onAddTodo = (value: boolean): void => {
  console.log(value)
}
</script>

<template>
  <TodoLayout>
    <h1 class="text-white text-center font-light text-6xl md:text-8xl">Todos</h1>
    <div class="flex flex-col justify-center m-6">
      <TodoForm @add-todo="onAddTodo" v-model="todoStore.title" placeholder="✎ What needs to be done" />
      <div class="flex justify-between items-center mt-5">
        <p class="text-white">{{ todoStore.getIncompleteTodosCount }} Items Left</p>
        <div class="flex justify-center gap-3">
          <TodoFilter @click-filter="todoStore.SET_FILTER('all')" title="All" :is-active="todoStore.filterMode == 'all'" />
          <TodoFilter @click-filter="todoStore.SET_FILTER('active')" title="Active" :is-active="todoStore.filterMode == 'active'" />
          <TodoFilter @click-filter="todoStore.SET_FILTER('completed')" title="Completed" :is-active="todoStore.filterMode == 'completed'" />
        </div>
        <button 
          @click="todoStore.CLEAR_COMPLETED"
          class="text-white hover:text-rose-500 transition-colors duration-200"
        >
          Clear Completed
        </button>
      </div>
      <Loader :is-loading="todoStore.isLoading" />
      <TodoList :todos="todoStore.getFilteredTodos" :store="todoStore" />
    </div>
  </TodoLayout>
</template>