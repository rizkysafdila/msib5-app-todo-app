<script setup lang="ts">
// Vue
import { ref } from 'vue';

interface TodoFormProps {
  placeholder?: string
}

defineProps<TodoFormProps>()

const emit = defineEmits<{
  (e: 'add', value: string): void
}>()

const newTodo = ref('');

const addTodo = () => {
  if (newTodo.value.trim() !== '') {
    emit('add', newTodo.value);
    newTodo.value = '';
  } else {
    alert('Please fill the title!');
  }
};
</script>

<template>
  <input
    type="text"
    class="bg-zinc-700 rounded-lg w-full p-5 md:text-2xl text-white placeholder:text-zinc-400 focus:border-emerald-600 focus:ring-emerald-600"
    @keydown.enter="addTodo"
    v-model="newTodo" 
    :placeholder="placeholder"
  />
</template>
