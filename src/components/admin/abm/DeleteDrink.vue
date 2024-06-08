<script setup>
import BaseButton from '@/components/common/BaseButton.vue'
const props = defineProps({
    drink:{
        type: Object,
        required:false
    }
})
const isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

</script>
<template>
    <template v-if="isObjectEmpty(drink)">
        <h2 class="text-2xl text-center text-primary-100">Elige el trago que quieres eliminar</h2>
    </template>
    <template v-else>
        <section class="px-2 text-primary-100 capitalize">
            <h2 class="text-2xl text-center">¿Quieres eliminar al trago:  {{ drink.name }}?</h2>
            <div class="my-4">
                <img :src="drink.cover" :alt="drink.name" class="rounded border-2 border-primary-100 w-1/4 float-right ml-4 mb-2">
                <p class="text-text-100">
                    {{ drink.descripcion }}
                </p>
            </div>
            <table class="w-full text-center mt-6">
                <thead>
                    <tr>
                        <th>Ingrediente</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="ingredient in drink.ingredients" class="border border-accent-100">
                        <td class="border-r border-accent-100">{{ingredient.name}}</td>
                        <td>{{ ingredient.amount }}</td>
                    </tr>
                </tbody>
            </table>
        </section>
        <form action="#" method="post" @submit.prevent="handleDeleteDrink(drink._id)" class="m-4 flex items-center justify-center">
            <BaseButton color="primary" class="w-full">Eliminar este trago</BaseButton>
        </form>
    </template>
</template>