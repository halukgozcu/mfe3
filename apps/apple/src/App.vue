<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { useUserStore } from './store/userStore'
import { usePinia } from './composables/usePinia'

// Initialize pinia for this component
const pinia = usePinia()
const userStore = useUserStore(pinia)
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <div class="apple-app">
    <h2>Apple MFE App</h2>
    <p>This is the Apple micro frontend application</p>
    <div class="user-info" v-if="userStore.name || userStore.surname">
      <h3>Current User:</h3>
      <p>Name: {{ userStore.name }}</p>
      <p>Surname: {{ userStore.surname }}</p>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.apple-app {
  border: 2px solid red;
  padding: 20px;
  margin: 10px;
}
</style>
