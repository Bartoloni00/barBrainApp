<script setup>
const props = defineProps({
    drinks:{
        type: Array,
        required: true
    }
})
</script>
<template>
    <section class="flex flex-wrap gap-2 md:ml-40 justify-center sm:justify-normal">
        <template v-for="drink in drinks">
            <router-link :to="'drinks/'+drink._id">
                <img :src="drink.cover" :alt="drink.name" class="max-w-[100px] sm:max-w-[200px] rounded-lg">
            </router-link>
        </template>
    </section>
</template>