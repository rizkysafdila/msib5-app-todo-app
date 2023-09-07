<script setup lang="ts">
// Vue
import { ref } from 'vue'

// Pinia
import { useTodoStore } from '../../store/todo';

interface TodoFormProps {
  title?: string
  placeholder: string
}

interface TodoFormEmits {
  (e: 'add-todo', value: boolean): Promise<void>
}

const props = defineProps<TodoFormProps>()
const emit = defineEmits<TodoFormEmits>()

const todoStore = useTodoStore()

const title = ref(props.title)
const loading = ref<boolean>(false)

const addTodo = async () => {
  loading.value = true

  try {
    if (title.value !== '') {
      await todoStore.addTodo()
      emit('add-todo', true)
      title.value = ''
    } else {
      window.alert('Please fill the title!')
    }
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false 
  }
}
</script>

<template>
  <input type="text"
    class="bg-zinc-700 rounded-lg w-full p-5 md:text-2xl text-white placeholder:text-zinc-400 focus:border-emerald-600 focus:ring-emerald-600"
    @keyup.enter="addTodo" v-model="title" :placeholder="placeholder" />
</template>
