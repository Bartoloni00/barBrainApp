<script setup>
    const props = defineProps({
        drink:{
            type: Object,
            required: true
        }
    })
</script>
<template>
    <article
    :key="drink._id"
    class="flex flex-col w-full justify-start text-text-100"
    >
        <router-link :to="'drinks/'+drink._id">
            <h2 class="text-2xl font-semibold text-accent-100">{{ drink.name }}</h2>
        </router-link>
        <p class="text-text-200">Categoria: {{ drink.category }}</p>
        <p class="pb-4">{{ drink.descripcion }}</p>
    </article>
</template>