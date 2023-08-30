import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home/Home.vue'
import Todo from '../views/todo/Todo.vue'
import About from '../views/about/About.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/todos', name: 'Todo', component: Todo },
  { path: '/about', name: 'About', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'link-active',
  routes
})

export default router