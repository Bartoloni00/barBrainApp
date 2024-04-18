import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import DrinkDetails from '../views/DrinkDetails.vue'

const routes = [
    {path: '/', component: Home,},
    {path: '/drink/:id/', component: DrinkDetails,},
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})