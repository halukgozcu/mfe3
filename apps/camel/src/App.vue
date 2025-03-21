<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { useUserAgeStore } from './store/userAgeStore'

const userAgeStore = useUserAgeStore()
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
  <div class="camel-app">
    <h2>Camel MFE App</h2>
    <p>This is the Camel micro frontend application</p>

    <div class="age-display">
      <h3>User Age Information</h3>
      <p v-if="userAgeStore.age">Current User Age: {{ userAgeStore.age }}</p>
      <p v-else>No age set yet</p>
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

.camel-app {
  border: 2px solid brown;
  padding: 20px;
  margin: 10px;
}

.age-display {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
