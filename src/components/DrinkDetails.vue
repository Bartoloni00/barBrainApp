<script setup>
import BaseTitle from './BaseTitle.vue';

    const props = defineProps({
        drink:{
            type: Object,
            required: true
        }
    })
</script>
<template>
<section class="min-h-[78vh] flex items-center justify-center gap-5 flex-wrap-reverse">
    <img :src="drink.cover" :alt="drink.name" class="rounded border-2 border-accent-100 max-h-80">
    <article class="text-text-100 max-w-[500px]">
        <BaseTitle class="text-3xl text-center">{{ drink.name }}</BaseTitle>
        <h2>{{ drink.category }}</h2>
        <p class="py-2">{{ drink.descripcion }}</p>
        <ul>
            <li v-for="ingredient in drink.ingredients">
                <p>{{ ingredient.amount }} de {{ ingredient.name }}</p>
            </li>
        </ul>
    </article>
</section>
</template>