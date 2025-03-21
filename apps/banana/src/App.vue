<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { useUserAgeStore } from './store/userAgeStore'
import { ref } from 'vue'

const userAgeStore = useUserAgeStore()
const newAge = ref('')

const updateAge = () => {
  userAgeStore.updateAge(parseInt(newAge.value))
  newAge.value = ''
}
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
  <div class="banana-app">
    <h2>Banana MFE App</h2>
    <p>This is the Banana micro frontend application</p>

    <div class="age-manager">
      <h3>User Age Manager</h3>
      <div class="age-input">
        <input type="number" v-model="newAge" placeholder="Enter age" />
        <button @click="updateAge">Update Age</button>
      </div>
      <div class="age-display" v-if="userAgeStore.age">
        <p>Current User Age: {{ userAgeStore.age }}</p>
      </div>
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

.banana-app {
  border: 2px solid yellow;
  padding: 20px;
  margin: 10px;
}

.age-manager {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.age-input {
  display: flex;
  gap: 10px;
  margin: 10px 0;
}

input[type="number"] {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
