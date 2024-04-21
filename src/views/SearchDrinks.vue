<script setup>
import LoadingContent from "../components/LoadingContent.vue";
import DrinkCard from "../components/DrinkCard.vue";
import SearchHeader from "../components/SearchHeader.vue";
import useDrinks from "../composition/useDrinks.js"
import {useRoute} from 'vue-router'

const route = useRoute()
const {loadingDrinks,drinks} = useDrinks(route.query.search)
</script>
<template>
    <SearchHeader/>
    <LoadingContent :loading="!loadingDrinks">
        <section class="flex min-h-[70vh]">
                <section class="flex flex-col gap-y-2 max-w-3xl ml-52"  v-if="drinks.length >= 1">
                    <template v-for="drink in drinks">
                        <DrinkCard 
                            :drink="drink"
                        />
                    </template>
                </section>
                <section v-else class="flex flex-col gap-y-2 max-w-3xl ml-52 text-text-100">
                    <p>No hay resultados que coincidan con esa busqueda</p>
                </section>
            <article v-if="drinks.length >= 3" class="w-full mr-52 grid grid-cols-2 grid-rows-2 gap-2 h-[500px]">
                <router-link :to="'drinks/'+drinks[0]._id" class="col-span-2">
                    <img class="rounded-2xl border border-bg-300" :src="drinks[4].cover" alt="">
                </router-link>
                <router-link :to="'drinks/'+drinks[1]._id" class="row-start-2">
                    <img class="rounded-2xl border border-bg-300" :src="drinks[3].cover" alt="">
                </router-link>
                <router-link :to="'drinks/'+drinks[2]._id" class="row-start-2">
                    <img class="rounded-2xl border border-bg-300" :src="drinks[2].cover" alt="">
                </router-link>
            </article>
        </section>
    </LoadingContent>
</template>