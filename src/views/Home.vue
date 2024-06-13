<script setup>
import SearchHeader from '@/components/search/SearchHeader.vue'
import BaseTitle from '@/components/common/BaseTitle.vue'
import SearchInput from '@/components/search/SearchInput.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import useSearch from '@/composition/useSearch.js'

const {wordInSearchVar, handleSearchDrink} = useSearch()

</script>
<template>
    <SearchHeader 
        :withLogo="false"
        :withSearch="false"
        :withNavBar="false"
    />
    <section class="flex justify-center items-center flex-col h-[78vh] pb-[10vh]">
        <BaseTitle class="text-5xl sm:text-8xl"></BaseTitle>
        <form action="#" @submit.prevent="handleSearchDrink(false)" method="get" class="max-w-[550px] w-full flex flex-col items-center justify-center mt-5" >
            <SearchInput 
                type="search" 
                name="searchBar" 
                id="searchBar"
                @update:search-word="e => wordInSearchVar = e"
                />
            <div class="flex sm:justify-between items-center mt-5 sm:text-lg w-full flex-wrap justify-center gap-2">
                <BaseButton color="primary">Buscar con BarBrainDB</BaseButton>
                <BaseButton color="primary" :isNotButton="true">Voy a tener suerte</BaseButton>
            </div>
        </form>
    </section>
</template>