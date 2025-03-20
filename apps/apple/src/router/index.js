import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import About from '../pages/About.vue'

const routes = [
  {
    path: '/',
    component: HelloWorld
  },
  {
    path: '/about',
    component: About
  }
]

export const router = createRouter({
  history: createWebHistory('/apple/'),
  routes
})
