import 'tailwindcss/tailwind.css'

import { createApp } from 'vue'
import { router } from './routes'

import { createPinia } from 'pinia'

import './style.css'

import App from './App.vue'
const app = createApp(App)

// app.use(store)
app.use(createPinia)
app.use(router)
app.mount('#app')
