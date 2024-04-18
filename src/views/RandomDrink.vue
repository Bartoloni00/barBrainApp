<script setup>
import SearchHeader from '../components/SearchHeader.vue';
import LoadingContent from '../components/LoadingContent.vue'
import DrinkDetails from '../components/DrinkDetails.vue'

import useRandomDrink from '../composition/useRandomDrink';

const {loadingDrink, drink} = useRandomDrink()
</script>
<template>
    <SearchHeader :withNavBar="false"/>
    <LoadingContent :loading="!loadingDrink">
        <DrinkDetails :drink="drink"/>
    </LoadingContent>
</template>