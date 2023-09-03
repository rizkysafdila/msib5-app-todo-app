// Pinia
import { defineStore } from 'pinia'

// Axios
import axios from 'axios'

// Type Todo
import { TTodo } from './todo.type'

// Base URL
import { BASE_URL } from '../config/base_url'

// API URL
const API_URL = BASE_URL + '/todos'

export const useTodoStore = defineStore('todo', {
  state: (): {
    todos: TTodo[],
    filteredTodos: TTodo[],
    filterMode: string,
    isLoading: boolean,
  } => ({
    todos: [],
    filteredTodos: [],
    filterMode: 'all',
    isLoading: false,
  }),
  getters: {
    getActiveTodos: (state) => {
      return state.todos.filter((todo) => !todo.completed)
    },
    getCompletedTodos: (state) => {
      return state.todos.filter((todo) => todo.completed)
    },
    getIncompleteTodosCount: (state) => {
      return state.todos.filter((todo) => !todo.completed).length
    }
  },
  actions: {
    async fetchTodos() {
      try {
        this.isLoading = true
        const response = await axios.get(API_URL, {
          params: {
            _limit: 5
          },
        })
        this.todos = response.data
        this.filteredTodos = response.data
        this.isLoading = false
      } catch (error) {
        console.error('Error fetching todos:', error)
      }
    },
    
    async addTodo(newTitle: string) {
      try {
        this.isLoading = true
        const response = await axios.post(API_URL, {
          userId: 1,
          id: this.todos.length + 1,
          title: newTitle,
          completed: false,
        })
        this.todos.unshift(response.data)
        this.filteredTodos = this.todos
        this.isLoading = false
      } catch (error) {
        console.error('Error adding todo:', error)
      }
    },
    
    async updateTodoStatus(id: number, title: string, status: boolean) {
      try {
        const response = await axios.patch(`${API_URL}/${id}`, {
          completed: status,
        });
    
        this.todos = this.todos.map(todo =>
          todo.id === id && todo.title === title ? { ...todo, completed: response.data.completed } : todo
        );
      } catch (error) {
        console.error('Error updating todo status:', error);
      }
    },    
    
    async deleteTodo(id: number) {
      try {
        await axios.delete(`${API_URL}/${id}`)
        this.todos = this.todos.filter(todo => todo.id !== id)
        this.filteredTodos = this.filteredTodos.filter(todo => todo.id!== id)
      } catch (error) {
        console.error('Error deleting todo:', error)
      }
    },

    FILTER_ALL() {
      this.filterMode = 'all'
      this.filteredTodos = this.todos
    },

    FILTER_ACTIVE() {
      this.filterMode = 'active'
      this.filteredTodos = this.getActiveTodos
    },

    FILTER_COMPLETED() {
      this.filterMode = 'completed'
      this.filteredTodos = this.getCompletedTodos
    },

    CLEAR_COMPLETED() {
      this.todos = this.todos.filter(todo => !todo.completed)
      this.filteredTodos = this.todos
    },
  },
})
