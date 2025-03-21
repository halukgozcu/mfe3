import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/apple',
    name: 'Apple',
    component: () => import('apple/AppleApp').then(module => {
      return module.default
    })
  },
  {
    path: '/banana',
    name: 'Banana',
    component: () => import('banana/BananaApp')
  },
  {
    path: '/camel',
    name: 'Camel',
    component: () => import('camel/CamelApp')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
