// Pinia
import { defineStore } from 'pinia'

// Axios
import axios from 'axios'

// Interface Todo
import { ITodo } from '../types/todo.type'

// Base URL
import { BASE_URL } from '../config/base_url'

// API URL
const API_URL = BASE_URL + '/todos'

export const useTodoStore = defineStore('todo', {
  state: (): {
    todos: ITodo[],
    filteredTodos: ITodo[],
    filterMode: string,
    title: string,
    isLoading: boolean,
  } => ({
    todos: [],
    filteredTodos: [],
    filterMode: 'all',
    title: '',
    isLoading: false,
  }),
  getters: {
    getFilteredTodos: state => {
      return state.todos.filter(todo => {
        if (state.filterMode === 'all') return todo
        if (state.filterMode === 'active') return !todo.completed
        if (state.filterMode === 'completed') return todo.completed
      })
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
    
    async addTodo() {
      try {
        if (this.title !== '') {
          this.isLoading = true
          await axios.post(API_URL, {
            userId: 1,
            title: this.title,
            completed: false,
          })
          const newTodo = {
            id: Math.random(),
            title: this.title,
            completed: false,
          }
          this.todos = [newTodo, ...this.todos]
          this.title = ''
          this.isLoading = false
        } else {
          window.alert('Please fill the title!')
        }
      } catch (error) {
        console.error('Error adding todo:', error)
        return Promise.reject(error)
      } finally {
        this.isLoading = false
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

    SET_FILTER(filter: 'all' | 'active' | 'completed') {
      this.filterMode = filter
    },

    CLEAR_COMPLETED() {
      this.todos = this.todos.filter(todo => !todo.completed)
      this.filteredTodos = this.todos
    },
  },
})
