import { createPinia } from 'pinia'

export const usePinia = () => {
  const pinia = createPinia()
  return pinia
}
