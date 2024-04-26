<script setup>
import LoadingContent from "../../components/LoadingContent.vue";
import useDrinks from "../../composition/useDrinks.js"
import {useRoute} from 'vue-router'
import {ref, watch} from 'vue'

const route = useRoute()
const wordSeacher = ref()
wordSeacher.value = route.query.search
const {uploadSearcherDrinks,loadingDrinks,drinks} = useDrinks(route.query.search)

watch(() => route.query.search, (newSearch, oldSearch) => uploadSearcherDrinks(newSearch))

</script>
<template>
    <LoadingContent :loading="!loadingDrinks">
        <section class="flex flex-wrap gap-2 ml-40 min-h-[70vh]">
            <template v-for="drink in drinks">
                <router-link :to="'drinks/'+drink._id">
                    <img :src="drink.cover" :alt="drink.name" class="max-w-[200px] rounded-lg">
                </router-link>
            </template>
        </section>
    </LoadingContent>
</template>