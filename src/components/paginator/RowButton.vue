<script setup>
import { useRoute } from 'vue-router';
import useSearch from '@/composition/useSearch';
const props = defineProps({
    isNext:{
        type: Boolean,
        default: true
    }
})
const {page} = useSearch()
const route = useRoute()
</script>
<template>
    <button 
    v-if="isNext"
    href="" 
    class="relative inline-flex items-center rounded-r-md px-2 py-2 text-text-100 ring-1 ring-inset ring-gray-300 hover:bg-bg-300 focus:z-20 focus:outline-offset-0">
        <span class="sr-only">Siguiente</span>
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
        </svg>
    </button>
    <button 
    v-else
    href="#" 
    class="relative inline-flex items-center rounded-l-md px-2 py-2 text-text-100 ring-1 ring-inset ring-gray-300 hover:bg-bg-300 focus:z-20 focus:outline-offset-0">
        <span class="sr-only">Anterior</span>
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
        </svg>
    </button>
    
</template>