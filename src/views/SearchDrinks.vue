<script setup>
import LoadingContent from "../components/LoadingContent.vue";
import DrinkCard from "../components/DrinkCard.vue";
import SearchHeader from "../components/SearchHeader.vue";
import useDrinks from "../composition/useDrinks.js"

const {loadingDrinks,drinks} = useDrinks()
</script>
<template>
    <SearchHeader/>
    <LoadingContent :loading="!loadingDrinks">
        <section class="flex flex-col gap-y-2 max-w-3xl ml-52">
        <template v-for="drink in drinks">
            <DrinkCard 
                :drink="drink"
            />
        </template>
    </section>
    </LoadingContent>
</template>