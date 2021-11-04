import { createApp } from 'vue';
import { createRouter, createWebHistory} from
        'vue-router';

import Home from './pages/Home.vue'
import Calculator from './pages/Calculator.vue'
import Pokedex from './pages/Pokedex.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/Pokedex', component: Pokedex },
    { path: '/Calculator', component: Calculator },
];

const router = createRouter({
    history: createWebHistory(),
    routes,


});

const app = createApp({});
app.use(router)
app.mount('#app');


