<script setup>
import BaseTitle from './BaseTitle.vue';

const props = defineProps({
    withNavBar:{
        type: Boolean,
        required: false,
        default: true
    },
    withLogo:{
        type: Boolean,
        required: false,
        default: true
    },
    withSearch:{
        type: Boolean,
        required: false,
        default: true
    }
})
</script>
<template>
    <header class="h-[14vh] bg-bg-100 text-text-100 flex items-center px-5 justify-end gap-5">
        <router-link to="/" v-if="withLogo">
            <BaseTitle class="text-2xl"></BaseTitle>
        </router-link>
        <form action="" method="get" class="w-full mt-5" v-if="withSearch">
            <input 
            type="search" 
            name="" 
            id=""
            class="text-l max-w-3xl w-full min-w-60 p-2 px-3 border-2 border-primary-100 rounded-3xl bg-bg-200 focus:outline-primary-200 focus:bg-bg-300 focus:border-bg-300"
            >
        </form>
        <a href="dashboard" class="hover:underline text-lg pt-2 text-text-100">Panel</a>
    </header>
    <nav 
    v-if="withNavBar"
    class="h-[5vh] text-text-300 border-b border-primary-100 my-4">
        <ul class="flex max-w-3xl w-full lg:mx-52 gap-8">
            <li>
                <router-link>Todo</router-link>
            </li>
            <li>
                <router-link>Imagenes</router-link>
            </li>
        </ul>
    </nav>
</template>