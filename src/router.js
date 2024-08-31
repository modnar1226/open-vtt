import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Play from './components/Play.vue';
import CharacterBuilder from './components/CharacterBuilder.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/play', component: Play },
    { path: '/character-builder', component: CharacterBuilder },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
