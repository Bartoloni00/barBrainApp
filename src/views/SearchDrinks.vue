<script setup>
import LoadingContent from "../components/LoadingContent.vue";
import SearchHeader from "../components/SearchHeader.vue";
import useDrinks from "../composition/useDrinks.js"
import {useRoute} from 'vue-router'
import {ref, watch} from 'vue'
import ListDrinks from "./searchDrinks/ListDrinks.vue";
import SearchImages from "./searchDrinks/SearchImages.vue";

const route = useRoute()
const wordSeacher = ref()
wordSeacher.value = route.query.search
const {uploadSearcherDrinks,loadingDrinks,drinks} = useDrinks(route.query.search)

watch(() => route.query.search, (newSearch, oldSearch) => {
    uploadSearcherDrinks(newSearch)
    wordSeacher.value = newSearch
})

const showImages = ref(false)
watch(()=>route.query, (newQ, oldQ)=>{
    if (newQ.imgs) {
        showImages.value = true
    } else {
        showImages.value = false
    }
})
</script>
<template>
    <SearchHeader :word-searcher="wordSeacher"/>
    <LoadingContent :loading="!loadingDrinks">
        <ListDrinks
        v-if="!showImages"
        :drinks="drinks"
        :word-seacher="wordSeacher"
        />
        <SearchImages
        v-else
        :drinks="drinks"
        />
    </LoadingContent>
</template>