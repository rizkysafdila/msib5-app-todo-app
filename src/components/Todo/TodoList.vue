<script setup lang="ts">
// Components
import TodoItem from './TodoItem.vue'

// Interface Todo
import { ITodo } from '../../store/todo.type';

interface TodoListProps {
  todos: ITodo[]
  store?: any
}

defineProps<TodoListProps>()
</script>

<template>
  <ul>
    <li class="flex flex-col mt-3" v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo" :update-todo="store.updateTodoStatus" :delete-todo="store.deleteTodo" />
    </li>
  </ul>
</template>