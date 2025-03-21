<script setup>
import { ref } from 'vue'
import { useUserStore } from '../store/userStore'

const userStore = useUserStore()
const name = ref('')
const surname = ref('')

const updateUser = () => {
    userStore.updateUser(name.value, surname.value)
}
</script>

<template>
    <div class="user-form">
        <h2>Update User Information</h2>
        <div class="form-group">
            <input v-model="name" placeholder="Enter name" />
            <input v-model="surname" placeholder="Enter surname" />
            <button @click="updateUser">Update User</button>
        </div>
        <div class="current-user" v-if="userStore.name || userStore.surname">
            <h3>Current User:</h3>
            <p>Name: {{ userStore.name }}</p>
            <p>Surname: {{ userStore.surname }}</p>
        </div>
    </div>
</template>

<style scoped>
.user-form {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
}

.form-group {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    background-color: #42b883;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
}
</style>
