import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Profile from '../views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/apple',
      name: 'Home',
      component: Home
    },
    {
      path: '/apple/about',
      name: 'About',
      component: About
    },
    {
      path: '/apple/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})

export default router
