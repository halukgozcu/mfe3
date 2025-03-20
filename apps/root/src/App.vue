<script setup>
import { defineAsyncComponent } from 'vue'
import Navbar from './components/Navbar.vue'

const AppleApp = defineAsyncComponent(() => import('apple/AppleApp'))
const BananaApp = defineAsyncComponent(() => import('banana/BananaApp'))
const CamelApp = defineAsyncComponent(() => import('camel/CamelApp'))
</script>

<template>
  <div class="container">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<style scoped>
.container {
  padding: 70px 20px 20px 20px;
}

nav {
  margin-bottom: 20px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #2c3e50;
}

nav a.router-link-active {
  color: #42b983;
}

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
</style>
