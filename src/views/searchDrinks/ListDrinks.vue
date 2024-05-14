<script setup>
import DrinkCard from '@/components/DrinkCard.vue'

const props = defineProps({
    drinks:{
        type: Array,
        required: true
    },
    wordSeacher:{
        type: String,
        required: true
    }
})
</script>
<template>
            <section class="flex min-h-[90vh]">
                <section class="flex flex-col gap-y-2 max-w-3xl ml-52"  >
                    <template v-for="drink in drinks">
                        <DrinkCard 
                            :drink="drink"
                        />
                    </template>
                </section>
            <article v-if="drinks.length >= 3" class="w-ful max-w-96 mr-52 flex flex-wrap gap-2 h-[460px] items-center justify-center">
                <router-link :to="'drinks/'+drinks[0]._id" class="col-span-2">
                    <img class="rounded-2xl border border-bg-300" :src="drinks[2].cover" alt="">
                </router-link>
                <router-link :to="'drinks/'+drinks[1]._id" class="row-start-2  w-[47%]">
                    <img class="rounded-2xl border border-bg-300" :src="drinks[1].cover" alt="">
                </router-link>
                <router-link :to="'drinks/'+drinks[2]._id" class="row-start-2  w-[47%]">
                    <img class="rounded-2xl border border-bg-300" :src="drinks[0].cover" alt="">
                </router-link>
            </article>
        </section>
</template>