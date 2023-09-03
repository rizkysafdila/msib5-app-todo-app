<script setup lang="ts">
import TodoItem from './TodoItem.vue'
import { TTodo } from '../../store/todo.type';

defineProps<{
  todos: TTodo[],
  store?: any,
}>()
</script>

<template>
  <ul>
    <li class="flex flex-col mt-3" v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo" :update-todo="store.updateTodoStatus" :delete-todo="store.deleteTodo" />
    </li>
  </ul>
</template>