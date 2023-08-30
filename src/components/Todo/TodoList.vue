<script setup lang="ts">
import TodoItem from './TodoItem.vue'
import { TTodo } from '../../store/todo'

defineProps<{
  todos: TTodo[]
}>()
</script>

<template>
  <ul>
    <li class="flex flex-col mt-3" v-for="todo in todos" :key="todo.id">
      <TodoItem :title="todo.title" :completed="todo.completed" />
    </li>
  </ul>
</template>