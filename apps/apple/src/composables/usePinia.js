import { createPinia } from 'pinia'
import { markRaw } from 'vue'
import { router } from '../router'

export function usePinia() {
  const pinia = createPinia()
  pinia.use(({ store }) => {
    store.router = markRaw(router)
  })
  return pinia
}
