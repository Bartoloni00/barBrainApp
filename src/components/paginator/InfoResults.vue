<script setup>
const props = defineProps({
    totalResults:{
        type: Number,
        required: true
    },
    showing:{
        type: Number,
        required: true
    }
})
</script>
<template>
    <p class="text-sm text-text-100">
        Mostrando 
        <span class="text-text-200">{{ showing }}</span> de 
        <span class="text-text-200">{{ totalResults }}</span> resultados
    </p>
</template>