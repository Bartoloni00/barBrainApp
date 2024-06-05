<script setup>
import BaseButton from '@/components/common/BaseButton.vue'

const props = defineProps({
        drink:{
            type: Object,
            required: true
        }
    })

    // edit(id) => pushear a la URL por get
    // delete(id) => pushear a la URL por get
</script>
<template>
    <article
    :key="drink._id"
    class="flex w-full justify-between items-center text-text-100 border-b-2 border-accent-100"
    >
        <router-link :to="'drinks/'+drink._id">
            <h2 class="text-2xl font-semibold text-accent-100 capitalize">{{ drink.name }}</h2>
        </router-link>
        <div class="flex gap-1 py-2">
            <BaseButton color="accent">Editar</BaseButton>
            <BaseButton color="primary">Eliminar</BaseButton>
        </div>
    </article  class="pb-4">
</template>