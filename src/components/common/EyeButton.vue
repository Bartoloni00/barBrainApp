<script setup>
import VisibilityOff from '@/assets/icons/VisibilityOff.vue'
import VisibilityOn from '@/assets/icons/VisibilityOn.vue'

const props = defineProps({
    visibility:{
        type: Boolean,
        default: false,
        required: true,
    }
})
</script>
<template>
    <div>
        <VisibilityOff v-if="!visibility"/>
        <VisibilityOn v-else/>
    </div>
</template>