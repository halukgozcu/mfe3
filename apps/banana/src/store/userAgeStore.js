import { defineStore } from 'pinia'

export const useUserAgeStore = defineStore('userAge', {
  state: () => ({
    age: 0
  }),
  actions: {
    updateAge(newAge) {
      this.age = newAge
    }
  }
})
