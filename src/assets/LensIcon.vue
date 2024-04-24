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
    <svg 
    :class="`w-6 h-6 ${textColor} cursor-pointer`" 
    aria-hidden="true" 
    fill="none" 
    viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
    </svg>
</template>