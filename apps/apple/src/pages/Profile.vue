<script setup>
import { useUserStore } from '../store/userStore'

const userStore = useUserStore()
</script>

<template>
    <div class="profile-page">
        <h2>User Profile</h2>
        <div class="profile-content" v-if="userStore.name || userStore.surname">
            <h3>User Details</h3>
            <p><strong>Name:</strong> {{ userStore.name }}</p>
            <p><strong>Surname:</strong> {{ userStore.surname }}</p>
        </div>
        <div v-else>
            <p>No user information available</p>
        </div>
    </div>
</template>

<style scoped>
.profile-page {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
}

.profile-content {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
}
</style>
