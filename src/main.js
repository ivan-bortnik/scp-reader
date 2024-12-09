import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'

import DocumentReader from './components/DocumentReader/DocumentReader.vue'
import Home from './components/Home/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/scp/:id', component: DocumentReader },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
    .use(router)
    .mount('#app')
