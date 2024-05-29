<script setup>
import SearchHeader from '@/components/SearchHeader.vue'
import BaseTitle from '@/components/BaseTitle.vue'
import SearchInput from '@/components/SearchInput.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import useSearch from '@/composition/useSearch.js'
import VisibilityOff from '@/assets/icons/VisibilityOff.vue'

const {wordInSearchVar, handleSearchDrink} = useSearch()

</script>
<template>
    <SearchHeader 
        :withLogo="false"
        :withSearch="false"
        :withNavBar="false"
    />
    <section class="flex justify-center items-center flex-col h-[78vh] pb-[10vh]">
        <BaseTitle class="text-8xl"></BaseTitle>
        <form action="#" @submit.prevent="handleSearchDrink" method="get" class="max-w-[550px] w-full flex flex-col items-center justify-center mt-5" >
            <SearchInput 
                type="search" 
                name="searchBar" 
                id="searchBar"
                @update:search-word="e => wordInSearchVar = e"
                />
            <div class="flex justify-between items-center mt-5 text-lg w-full">
                <BaseButton color="primary">Buscar con BarBrainDB</BaseButton>
                <BaseButton color="primary" :isNotButton="true">Voy a tener suerte</BaseButton>
            </div>
        </form>
    </section>
</template>