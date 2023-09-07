// Vue Router
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// View Components
import Landing from '../views/landingpage/index.vue'
import Home from '../views/home/index.vue'
import Todo from '../views/todo/index.vue'
import About from '../views/about/index.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Landing Page', component: Landing},
  { path: '/home', name: 'Home', component: Home },
  { path: '/todos', name: 'Todo', component: Todo },
  { path: '/about', name: 'About', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router