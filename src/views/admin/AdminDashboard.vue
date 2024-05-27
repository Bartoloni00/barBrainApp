<script setup>
import useAuth from '@/composition/useAuth.js'
import BaseButton from '@/components/common/BaseButton.vue'

const {handleLogout} = useAuth()
</script>
<template>
    dashboard
    <form action="#" method="get" @submit.prevent="handleLogout">
        <BaseButton>Cerrar sesion</BaseButton>
    </form>
</template>