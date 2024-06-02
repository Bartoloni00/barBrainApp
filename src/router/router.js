import { createRouter, createWebHashHistory } from 'vue-router'
import {subscribeToAuth} from '@/services/auth.js'
 
import Home from '@/views/Home.vue'
import DrinkDetails from '@/views/DrinkDetails.vue'
import SearchDrinks from '@/views/SearchDrinks.vue'
import RandomDrink from '@/views/RandomDrink.vue'
import AdminDashboard from '@/views/admin/AdminDashboard.vue'
import LoginPage from '@/views/admin/LoginPage.vue'

const routes = [
    {path: '/', component: Home,},
    {path: '/search', component: SearchDrinks,},
    {path: '/random', component: RandomDrink,},
    {path: '/drinks/:id/', component: DrinkDetails,},
    {path: '/login', component: LoginPage,},
    {path: '/dashboard', component: AdminDashboard, meta: {requiresAuth: true}},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

let user = {
    id: null,
    email: null,
    token: null
}

subscribeToAuth(newUserData => { user = {...newUserData} })

router.beforeEach((to, from, next) => {
    const isAdmin = user.email === 'admin@barbraindb.com';
    const isLoggedIn = !!user.id;

    if (to.meta.requiresAuth && (!isLoggedIn || !isAdmin)) {
        next('/login');
    } else if (to.path === '/login' && isLoggedIn && isAdmin) {
        next('/dashboard');
    } else {
        next();
    }
});

export default router