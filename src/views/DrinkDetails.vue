<script setup>
import SearchHeader from '@/components/search/SearchHeader.vue';
import LoadingContent from '@/components/common/LoadingContent.vue';
import BaseButton from '@/components/common/BaseButton.vue';

import useDrink from '@/composition/useDrink.js'
import DrinkDetails from '@/components/drinks/DrinkDetails.vue';

const {loadingDrink, drink} = useDrink()
</script>
<template>
    <SearchHeader :withNavBar="false"/>
    <LoadingContent :loading="!loadingDrink">
        <DrinkDetails v-if="drink" :drink="drink"/>
        <section v-else class="h-[78vh] flex items-center justify-center flex-col">
            <img src="../assets/404-error-background-flat-style.png" alt="404 not found" class="max-h-80"/>
            <h1 class="text-4xl text-accent-100">¡Ups! Este trago se nos ha escapado del bar.</h1>
            <p class="text-4xl text-accent-100">¿Quieres probar con otra búsqueda?</p>
            <BaseButton color="primary" :isNotButton="true" class="mt-4">Trago aleatorio</BaseButton>
        </section>
    </LoadingContent>
</template>