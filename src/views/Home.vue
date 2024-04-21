<script setup>
import SearchHeader from '../components/SearchHeader.vue';
import BaseTitle from '../components/BaseTitle.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const useSearch = () => {
    // si searchVar.value esta vacio no se tiene que enviar.
    // Ahora deberia enviar por get el searchVar.value y que SearchDrinks se encargue de todo
    const processingForm = ref(false)
    const wordInSearchVar = ref('')
    const router = useRouter()

    const handleSearchDrink = ()=>{
        if (processingForm.value) return;
        processingForm.value = true
        if(wordInSearchVar.value == '') return;

        router.push({path: '/search', query:{search: wordInSearchVar.value}})
    }

    return {
        processingForm,
        wordInSearchVar,
        handleSearchDrink
    }
}
const {processingForm, wordInSearchVar, handleSearchDrink} = useSearch()

</script>
<template>
    <SearchHeader 
        :withLogo="false"
        :withSearch="false"
        :withNavBar="false"
    />
    <section class="flex justify-center items-center flex-col h-[78vh] pb-[10vh]">
        <BaseTitle class="text-8xl"></BaseTitle>
        <form action="#" method="get" class="w-full flex flex-col items-center justify-center mt-5" @submit.prevent="handleSearchDrink">
            <input 
            type="search" 
            name="" 
            id=""
            class="text-l w-5/12 min-w-60 p-2 px-3 border-2 border-primary-100 rounded-3xl bg-bg-200 focus:outline-primary-200 focus:bg-bg-300 focus:border-bg-300"
            v-model="wordInSearchVar"
            @keyup.enter="handleSearchDrink"
            >
            <div class="flex justify-around items-center mt-5 w-5/12 text-lg">
                <button type="submit" class="bg-bg-200 py-2 px-3 min-w-[190px] text-text-100 rounded-lg hover:bg-bg-300">Buscar con BarBrainDB</button>
                <router-link to="/random" class="bg-bg-200 py-2 px-3 min-w-[190px] text-text-100 rounded-lg hover:bg-bg-300 text-center">Voy a tener suerte</router-link>
            </div>
        </form>
    </section>
</template>