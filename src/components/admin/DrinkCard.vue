<script setup>
import BaseButton from '@/components/common/BaseButton.vue'

const props = defineProps({
    drink: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['edit:id', 'delete:id'])
</script>
<template>
    <article
        :key="drink._id"
        class="flex w-full justify-between items-center text-text-100 border-b-2 border-accent-100"
    >
        <router-link :to="'drinks/' + drink._id">
            <h2 class="text-2xl font-semibold text-accent-100 capitalize">{{ drink.name }}</h2>
        </router-link>
        <div class="flex gap-1 py-2 flex-wrap justify-end">
            <BaseButton 
                color="accent"
                @click="() => emit('edit:id', drink)"
            >
                Editar
            </BaseButton>
            <BaseButton 
                color="primary"
                @click="() => emit('delete:id', drink)"
            >
                Eliminar
            </BaseButton>
        </div>
    </article>
</template>
