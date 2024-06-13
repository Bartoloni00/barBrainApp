<script setup>
import useAuth from '@/composition/useAuth.js'
import BaseButton from '@/components/common/BaseButton.vue'
import BaseTitle from '@/components/common/BaseTitle.vue'

const {handleLogout} = useAuth()
</script>
<template>
    <header class="w-full flex justify-between items-center p-2 border-b-2 border-bg-300 max-w-screen-2xl m-auto">
        <nav>
            <router-link to="/">
                <BaseTitle class="text-2xl"></BaseTitle>
            </router-link>
        </nav>
        <form action="#" method="get" @submit.prevent="handleLogout">
            <BaseButton color="primary">Cerrar sesion</BaseButton>
        </form>
    </header>
</template>