<script setup>
const props = defineProps({
    drink:{
        type: Object,
        required:true
    }
})
</script>
<template>
    <nav>
        <ul class="flex py-2 uppercase gap-2 rounded-md">
            <li class="text-primary-100">
                <router-link :to="`/search?search=all`">Todos</router-link>
            </li>
            <li class="text-text-100">/</li>
            <li class="text-primary-100">
                <router-link :to="`/search?search=${drink.category}`">{{ drink.category }}</router-link>
            </li>
            <li class="text-text-100">/</li>
            <li class="text-accent-100">
                <span>{{drink.name}}</span>
            </li>
        </ul>
    </nav>
</template>