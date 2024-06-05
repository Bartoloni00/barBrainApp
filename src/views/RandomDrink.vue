<script setup>
import SearchHeader from '@/components/search/SearchHeader.vue';
import LoadingContent from '@/components/common/LoadingContent.vue'
import DrinkDetails from '@/components/drinks/DrinkDetails.vue'

import useRandomDrink from '@/composition/useRandomDrink';

const {loadingDrink, drink} = useRandomDrink()
</script>
<template>
    <SearchHeader :withNavBar="false"/>
    <LoadingContent :loading="!loadingDrink">
        <DrinkDetails :drink="drink"/>
    </LoadingContent>
</template>