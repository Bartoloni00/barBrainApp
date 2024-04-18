<script setup>
import DrinkCard from "../components/DrinkCard.vue";
import useDrinks from "../composition/useDrinks.js"

const {drinks} = useDrinks()
console.log(drinks);
</script>
<template>
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <template v-for="drink in drinks">
            <DrinkCard 
                :drink="drink"
            />
        </template>
    </section>
</template>