<script setup>
const props = defineProps({
    ingredients:{
        type: Array,
        required: true,
    }
})
</script>
<template>
    <table class="w-full text-center mt-6 capitalize">
            <thead>
                <tr>
                    <th>Ingrediente</th>
                    <th>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="ingredient in ingredients" class="border border-accent-100">
                    <td class="border-r border-accent-100"><router-link :to="`/search?search=${ingredient.name}`">{{ingredient.name}}</router-link></td>
                    <td>{{ ingredient.amount }}</td>
                </tr>
            </tbody>
        </table>
</template>