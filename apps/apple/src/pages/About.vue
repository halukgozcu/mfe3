<template>
    <div class="about-page">
        <h2>About Apple MFE</h2>
        <div class="about-content">
            <h3>Our Application</h3>
            <p>This is the About page of our Apple Micro Frontend application.</p>
            <p>We demonstrate the power of micro frontends with Vue 3 and Module Federation.</p>
            <button @click="redirectToNotFound">Go to 404 Page</button>
            <button @click="redirectToNotFound">Go to 404 Page 2</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        redirectToNotFound() {
            window.location.href = '/404';
        }
    }
};
</script>

<style scoped>
.about-page {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
}

.about-content {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
    background-color: #f9f9f9;
}

button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>
