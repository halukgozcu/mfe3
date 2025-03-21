import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
// ...existing imports...
import NotFound from '../pages/404NotFound.vue';

const routes = [
    { path: '/', component: Home },
    // ...existing routes...
    { path: '/404', component: NotFound },
    { path: '/:pathMatch(.*)*', redirect: '/404' }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
