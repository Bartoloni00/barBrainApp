<script setup>
import BaseTitle from './BaseTitle.vue';
import SearchInput from './SearchInput.vue';
import useSearch from '../composition/useSearch.js'

const props = defineProps({
    withNavBar:{
        type: Boolean,
        required: false,
        default: true
    },
    withLogo:{
        type: Boolean,
        required: false,
        default: true
    },
    withSearch:{
        type: Boolean,
        required: false,
        default: true
    },
    wordSearcher: {
        type: String,
        required: false
    }
})

const {processingForm, wordInSearchVar, handleSearchDrink} = useSearch()

</script>
<template>
    <header class="h-[14vh] bg-bg-100 text-text-100 flex items-baseline px-5 justify-end gap-5">
        <router-link to="/" v-if="withLogo">
            <BaseTitle class="text-2xl"></BaseTitle>
        </router-link>
        <form @submit.prevent="handleSearchDrink" action="#" method="get" class="w-full mt-5" v-if="withSearch">
            <SearchInput 
                type="search" 
                name="searchBar" 
                id="searchBar"
                @update:search-word="e =>{ wordInSearchVar = e, processingForm = false}"
                />
        </form>
        <router-link to="/dashboard" class="hover:underline text-lg pt-2 text-text-100">Panel</router-link>
    </header>
    <nav 
    v-if="withNavBar"
    class="h-[5vh] text-text-300 border-b border-primary-100 mb-4">
        <ul class="flex max-w-3xl w-full lg:mx-52 gap-8">
            <li>
                <router-link :to="`/search${wordSearcher?`?search=${wordSearcher}`:''}`">Todo</router-link>
            </li>
            <li>
                <router-link :to="`/search${wordSearcher ? `?search=${wordSearcher}&imgs=${wordSearcher}` : ''}`">Imagenes</router-link>
            </li>
        </ul>
    </nav>
</template>