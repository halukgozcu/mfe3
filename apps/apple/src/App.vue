<script setup>
import { useUserStore } from './store/userStore'
import { usePinia } from './composables/usePinia'

const pinia = usePinia()
const userStore = useUserStore(pinia)
</script>

<template>
  <div class="apple-app">
    <router-view></router-view>

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

.apple-nav {
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f8f8f8;
  border-radius: 4px;
}

.apple-nav a {
  margin: 0 10px;
  color: #666;
  text-decoration: none;
}

.apple-nav a.router-link-active {
  color: #42b883;
  font-weight: bold;
}
</style>
