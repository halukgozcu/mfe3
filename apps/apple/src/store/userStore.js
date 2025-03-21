import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
    surname: ''
  }),
  actions: {
    updateUser(name, surname) {
      this.name = name
      this.surname = surname
    }
  }
})
