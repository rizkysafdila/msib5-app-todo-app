import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Style
import './assets/css/style.css'
import 'swiper/css';

import App from './App.vue'
import router from './router'


const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
