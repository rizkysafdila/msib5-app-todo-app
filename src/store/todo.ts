import { defineStore } from 'pinia'
import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/todos'

export interface TTodo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const useTodoStore = defineStore('todo', {
  state: (): {
    todos: TTodo[],
  } => ({
    todos: [],
  }),
  getters: {
    completedTodosCount: (state) => {
      return state.todos.filter(todo => todo.completed).length
    },
  },
  actions: {
    async fetchTodos() {
      try {
        const response = await axios.get(API_URL, {
          params: {
            _limit: 5
          },
        })
        this.todos = response.data
      } catch (error) {
        console.error('Error fetching todos:', error)
      }
    },
    async addTodo(newTodoTitle: string) {
      try {
        const response = await axios.post(API_URL, {
          title: newTodoTitle,
          completed: false,
        })
        this.todos.push(response.data)
      } catch (error) {
        console.error('Error adding todo:', error)
      }
    },
    async updateTodoStatus(todoId: number, completed: boolean) {
      try {
        const response = await axios.patch(`${API_URL}/${todoId}`, {
          completed,
        })
        const updatedTodo = response.data
        const index = this.todos.findIndex(todo => todo.id === updatedTodo.id)
        if (index !== -1) {
          this.todos[index] = updatedTodo
        }
      } catch (error) {
        console.error('Error updating todo status:', error)
      }
    },
    async deleteTodo(todoId: number) {
      try {
        await axios.delete(`${API_URL}/${todoId}`)
        this.todos = this.todos.filter(todo => todo.id !== todoId)
      } catch (error) {
        console.error('Error deleting todo:', error)
      }
    },
    async clearCompleted() {
      const completedTodoIds = this.todos.filter(todo => todo.completed).map(todo => todo.id)
      try {
        await Promise.all(completedTodoIds.map(id => axios.delete(`${API_URL}/${id}`)))
        this.todos = this.todos.filter(todo => !completedTodoIds.includes(todo.id))
      } catch (error) {
        console.error('Error clearing completed todos:', error)
      }
    },
  },
})
