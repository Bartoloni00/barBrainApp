<script setup>
import SearchHeader from '@/components/search/SearchHeader.vue';
import LoadingContent from '@/components/common/LoadingContent.vue';

import useDrink from '@/composition/useDrink.js'
import DrinkDetails from '@/components/drinks/DrinkDetails.vue';

const {loadingDrink, drink} = useDrink()
</script>
<template>
    <SearchHeader :withNavBar="false"/>
    <LoadingContent :loading="!loadingDrink">
        <DrinkDetails v-if="drink" :drink="drink"/>
        <section v-else class="h-[78vh] flex items-center justify-center flex-col">
            <span class="text-8xl text-primary-300">404</span>
            <h1 class="text-4xl text-accent-100">Trago no encontrado</h1>
        </section>
    </LoadingContent>
</template>