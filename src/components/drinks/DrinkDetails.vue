<script setup>
import BaseTitle from '@/components/common/BaseTitle.vue';
import IngredientsTable from '@/components/common/IngredientsTable.vue';
import BaseTag from '@/components/common/BaseTag.vue';
import BreadCrumbs from './BreadCrumbs.vue';

    const props = defineProps({
        drink:{
            type: Object,
            required: true
        }
    })
</script>
<template>
<section class="min-h-[78vh] flex justify-center gap-5 flex-wrap-reverse">
    <article>
        <BreadCrumbs :drink="drink"/>
        <img :src="drink.cover" :alt="drink.name" class="rounded border-2 border-accent-100">
    </article>
    <article class="text-text-100 max-w-[500px] pt-0 sm:pt-8">
        <div class="flex items-start justify-center gap-3">
            <BaseTitle class="text-3xl text-center text-accent-100 capitalize">{{ drink.name }}</BaseTitle>
            <BaseTag :text="drink.name">{{ drink.category }}</BaseTag>
        </div>
        <p class="py-2">{{ drink.descripcion }}</p>
        <IngredientsTable :ingredients="drink.ingredients"/>
    </article>
</section>
</template>