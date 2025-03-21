<template>
    <nav class="navbar">
        <router-link to="/">Home</router-link> |
        <router-link to="/apple">Apple App</router-link> |
        <router-link to="/apple/about">Apple About</router-link> |
        <router-link to="/apple/profile">Apple Profile</router-link> |
        <router-link to="/banana">Banana App</router-link> |
        <router-link to="/camel">Camel App</router-link>
    </nav>
</template>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background-color: #f8f9fa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

nav a {
    margin: 0 10px;
    text-decoration: none;
    color: #2c3e50;
}

nav a.router-link-active {
    color: #42b983;
    font-weight: bold;
}
</style>
