import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import { usePinia } from './composables/usePinia'

// Create the app instance
const app = createApp(App)

// Initialize pinia
const pinia = usePinia()

// Use plugins
app.use(router)
app.use(pinia)

// Mount in development
if (!import.meta.env.PROD) {
  app.mount('#app')
}

// Export the app component
export default App
