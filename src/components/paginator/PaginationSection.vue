<script setup>
import RowButton from '@/components/paginator/RowButton.vue'
import InfoResults from '@/components/paginator/InfoResults.vue';
const props = defineProps({
    metaData:{
        type: Object,
        required: true
    },
    showing:{
        type: Number,
        required: true
    }
})


defineEmits(['update:more'])
</script>
<template>
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between sm:flex-row-reverse sm:mx-52">
        <InfoResults
            :totalResults="props.metaData.totalCount"
            :showing="showing"
        />
        <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm w-full max-w-3xl items-center justify-center" aria-label="Pagination">
            <RowButton 
            class="h-32 rotate-[-90deg]"
            @click="$event => $emit('update:more', $event.target.value)" 
            :isNext="false"/>
        </nav>
    </div>
</template>