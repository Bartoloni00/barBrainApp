<script setup>
const props = defineProps({
    drinks:{
        type: Array,
        required: true
    }
})
</script>
<template>
    <section class="flex flex-wrap gap-2 ml-40">
        <template v-for="drink in drinks">
            <router-link :to="'drinks/'+drink._id">
                <img :src="drink.cover" :alt="drink.name" class="max-w-[200px] rounded-lg">
            </router-link>
        </template>
    </section>
</template>