<script setup>
import LoadingContent from "@/components/common/LoadingContent.vue";
import SearchHeader from "@/components/search/SearchHeader.vue";

import useDrinks from "@/composition/useDrinks.js"
import {useRoute} from 'vue-router'
import {ref, watch} from 'vue'

import ListDrinks from "@/components/drinks/ListDrinks.vue";
import SearchImages from "@/components/search/SearchImages.vue";
import PaginationSection from "@/components/paginator/PaginationSection.vue";
import NoResults from '@/components/search/NoResults.vue';

const route = useRoute()
const wordSeacher = ref()
wordSeacher.value = route.query.search
const {uploadSearcherDrinks,loadingDrinks,drinks,metaData,pushResults} = useDrinks(route.query.search)

watch(() => route.query.search, (newSearch, oldSearch) => {
    uploadSearcherDrinks(newSearch,1, false)
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

const moreResults = () => {
      pushResults.value = true
      if(metaData.value.page >= metaData.value.totalPages) return;
      uploadSearcherDrinks(wordSeacher.value, metaData.value.page + 1)
    }
</script>
<template>
    <SearchHeader :word-searcher="wordSeacher"/>
    <main class="min-h-[70vh] max-w-screen-2xl">
        <LoadingContent :loading="!loadingDrinks">
            <template v-if="drinks.length >= 1">
                <ListDrinks
                v-if="!showImages"
                :drinks="drinks"
                :word-seacher="wordSeacher"
                />
                <SearchImages
                    v-else
                    :drinks="drinks"
                />
            </template>
            <NoResults v-else :word-seacher="wordSeacher" class="ml-52"/>
            <PaginationSection v-if="metaData.totalPages > 1 && metaData.page <= metaData.totalPages"
                :showing="drinks.length"
                :meta-data="metaData"
                @update:more="moreResults"
                />
        </LoadingContent>
    </main>
</template>