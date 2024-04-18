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
    class="bg-bg-100 flex flex-col rounded-lg shadow-lg hover:shadow-xl hover:bg-bg-200 transition-all duration-300"
    >
        <img :src="drink.cover" :alt="drink.name" class="max-h-[300px]">
        <h2 class="text-xl text-center font-semibold my-2 text-text-100">{{ drink.name }}</h2>
        <p class="text-text-200 pb-4 text-center">{{ drink.descripcion }}</p>
        <h3 class="text-text-100 text-lg text-center">Ingredientes:</h3>
        <ul class="flex flex-wrap">
        <li v-for="ingredient in drink.ingredients" class="text-text-100 border-accent-100 border-2 w-full md:w-1/2">
            <p>Nombre: <span class="text-text-200">{{ ingredient.name }}</span></p>
            <p>Cantidad: <span class="text-text-200">{{ ingredient.amount }}</span></p>
        </li>
        </ul>
    </article>
</template>