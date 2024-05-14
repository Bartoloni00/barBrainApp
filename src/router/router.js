import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import DrinkDetails from '@/views/DrinkDetails.vue'
import SearchDrinks from '@/views/SearchDrinks.vue'
import RandomDrink from '@/views/RandomDrink.vue'

const routes = [
    {path: '/', component: Home,},
    {path: '/search', component: SearchDrinks,},
    {path: '/random', component: RandomDrink,},
    {path: '/drinks/:id/', component: DrinkDetails,},
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})