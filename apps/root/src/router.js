import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'

const AppleApp = () => import('apple/AppleApp')
const BananaApp = () => import('banana/BananaApp')
const CamelApp = () => import('camel/CamelApp')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/apple',
    name: 'Apple',
    component: AppleApp
  },
  {
    path: '/banana',
    name: 'Banana',
    component: BananaApp
  },
  {
    path: '/camel',
    name: 'Camel',
    component: CamelApp
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
