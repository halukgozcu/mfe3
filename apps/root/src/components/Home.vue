<script setup>
import UserForm from './UserForm.vue'
</script>

<template>
    <div class="home">
        <h1>Welcome to Micro Frontend Demo</h1>
        <p>This is the root application. Use the navigation above to explore different micro frontends.</p>
        <UserForm />
    </div>
</template>

<style scoped>
.home {
    text-align: center;
    padding: 20px;
}
</style>
