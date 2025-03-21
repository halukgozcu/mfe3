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
    component: () => import('apple/AppleApp'),
    children: [
      {
        path: '',
        name: 'Apple',
        component: () => import('apple/Home')
      },
      {
        path: 'about',
        name: 'AppleAbout',
        component: () => import('apple/About')
      },
      {
        path: 'profile',
        name: 'AppleProfile',
        component: () => import('apple/Profile')
      }
    ]
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
