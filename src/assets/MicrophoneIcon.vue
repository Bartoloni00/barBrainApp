<script setup>
import { computed } from 'vue';

const props = defineProps({
    color:{
        type: String,
        default: 'red'
    }
})
const textColor = computed(()=>{
    switch (props.color) {
        case 'red':
            return "text-primary-300 dark:text-primary-200 mx-2 hover:text-text-100"
            break;
        case 'gray':
            return "text-bg-100 dark:text-bg-100 mx-2 hover:text-text-100"
            break;
        case 'yellow':
            return "text-accent-100 dark:text-accent-100 mx-2 hover:text-text-100"
            break;
        default:
            return "text-primary-300 dark:text-primary-200 mx-2 hover:text-text-100"
            break;
    }
})
</script>
<template>
<svg :class="`w-6 h-6 ${textColor} cursor-pointer`" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"/>
</svg>
</template>