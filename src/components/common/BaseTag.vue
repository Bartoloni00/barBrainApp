<script setup>
const props = defineProps({
    text:{
        type: String,
        required:true
    }
})
</script>
<template>
    <router-link :to="'/search?search=' + text" class="inline my-1">
        <span class="bg-bg-200 hover:bg-bg-300 px-2 rounded-lg capitalize">
        <slot>Categoria</slot>
        </span>
    </router-link>
</template>