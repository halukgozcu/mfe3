import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'

// Create the app instance
const app = createApp(App, {
  standalone: true
})

// Use router only in standalone mode
app.use(router)

// Mount the app
app.mount('#app')

// Export the component for federation
export { App }
