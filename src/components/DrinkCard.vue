<script setup>
import BaseTag from './BaseTag.vue';

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
        <p>{{ drink.descripcion }}</p>
        <div class="flex gap-1 flex-wrap">
            <BaseTag>{{ drink.category }}</BaseTag>
            <BaseTag v-for="ingredient in drink.ingredients">{{ ingredient.name }}</BaseTag>
        </div>
    </article  class="pb-4">
</template>