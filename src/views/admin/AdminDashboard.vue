<script setup>
import LoadingContent from "@/components/common/LoadingContent.vue";
import AdminHeader from '@/components/admin/AdminHeader.vue';
import SearchInput from '@/components/search/SearchInput.vue';
import BaseButton from '@/components/common/BaseButton.vue'

import DrinkCard from '@/components/admin/DrinkCard.vue'

import useSearch from '@/composition/useSearch.js'
import useDrinks from "@/composition/useDrinks.js"
import {useRoute} from 'vue-router'
import {ref, watch} from 'vue'

import PaginationSection from "@/components/paginator/PaginationSection.vue";
import NoResults from '@/components/search/NoResults.vue';

import useShowForm from '@/composition/admin/useShowForm.js'
import FormView from "@/components/admin/FormView.vue";
const { formShowed, showAddForm, showUpdateForm, showDeleteForm } = useShowForm()

const route = useRoute()
const wordSeacher = ref()
wordSeacher.value = route.query.search ?? 'all'
const {uploadSearcherDrinks,loadingDrinks,drinks,metaData,pushResults} = useDrinks(route.query.search)

watch(() => route.query.search, (newSearch, oldSearch) => {
    uploadSearcherDrinks(newSearch,1, false)
    wordSeacher.value = newSearch
})

const {wordInSearchVar, handleSearchDrink} = useSearch()

const moreResults = () => {
      pushResults.value = true
      if(metaData.value.page >= metaData.value.totalPages) return;
      uploadSearcherDrinks(wordSeacher.value, metaData.value.page + 1)
    }
</script>
<template>
    <AdminHeader/>
    <section class="flex justify-evenly min-h-screen py-4">
        <section class="border border-primary-100 rounded-md w-4/12 min-h-[80vh]">
            <header class="border-b-2 border-accent-100 m-2">
                <nav class="m-2">
                    <ul class="flex gap-3 justify-evenly">
                        <li><BaseButton @click="showAddForm" color="success">Agregar</BaseButton></li>
                        <li><BaseButton @click="showUpdateForm" color="accent">Actualizar</BaseButton></li>
                        <li><BaseButton @click="showDeleteForm" color="primary">Eliminar</BaseButton></li>
                    </ul>
                </nav>
            </header>
            <FormView :formShowed="formShowed"/>
        </section>
        <section class="border border-primary-100 rounded-md w-4/12 min-h-[80vh] px-2">
            <header class="border-b-2 border-accent-100 p-2">
                <form action="#" @submit.prevent="handleSearchDrink(true)" method="get">
                    <SearchInput 
                    type="search" 
                    name="searchBar" 
                    id="searchBar"
                    @update:search-word="e => wordInSearchVar = e"
                    />
                </form>
            </header>
            <main class="text-xl text-white text-center">
                <LoadingContent :loading="!loadingDrinks">
                    <template v-if="drinks.length >= 1">
                        <template v-for="drink in drinks" >
                            <DrinkCard :drink="drink"/>
                        </template>
                    </template>
                    <NoResults v-else :word-seacher="wordSeacher" class="m-auto ml-4"/>
                    <PaginationSection v-if="metaData.totalPages > 1 && metaData.page <= metaData.totalPages"
                        :showing="drinks.length"
                        :meta-data="metaData"
                        @update:more="moreResults"
                        />
                </LoadingContent>
            </main>
        </section>
    </section>
</template>