<script setup lang="ts">
// Vue
import { ref } from 'vue'

interface TodoFormProps {
  title?: string
  placeholder: string
  addTodo: () => void
}

const props = defineProps<TodoFormProps>()

const title = ref(props.title)

const addTodo = () => {
  if (title.value !== '') {
    props.addTodo()
    title.value = ''
  } else {
    window.alert('Please fill the title!')
  }
}
</script>

<template>
  <input
    type="text"
    class="bg-zinc-700 rounded-lg w-full p-5 md:text-2xl text-white placeholder:text-zinc-400 focus:border-emerald-600 focus:ring-emerald-600"
    @keyup.enter="addTodo"
    v-model="title" 
    :placeholder="placeholder"
  />
</template>
