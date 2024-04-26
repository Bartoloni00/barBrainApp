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
<svg :class="`w-6 h-6 ${textColor} cursor-pointer`"  viewBox="0 0 24 24">
<path d="m21.334 24h-18.666c-1.473-.001-2.666-1.194-2.667-2.667v-18.667c.001-1.472 1.195-2.665 2.667-2.666h18.667c1.471.002 2.664 1.194 2.665 2.666v18.667c-.001 1.473-1.194 2.666-2.667 2.667z"/>
</svg>
</template>