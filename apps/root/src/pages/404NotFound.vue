<template>
    <div class="not-found-page">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <router-link to="/">Go back to Home</router-link>
    </div>
</template>

<style scoped>
.not-found-page {
    text-align: center;
    margin-top: 50px;
}

.not-found-page h1 {
    font-size: 2rem;
    color: #ff0000;
}

.not-found-page p {
    margin: 20px 0;
    font-size: 1.2rem;
}

.not-found-page a {
    color: #007bff;
    text-decoration: none;
}

.not-found-page a:hover {
    text-decoration: underline;
}
</style>
