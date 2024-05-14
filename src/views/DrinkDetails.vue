<script setup>
import SearchHeader from '@/components/SearchHeader.vue';
import LoadingContent from '@/components/LoadingContent.vue';

import useDrink from '@/composition/useDrink.js'
import DrinkDetails from '@/components/DrinkDetails.vue';

const {loadingDrink, drink} = useDrink()
</script>
<template>
    <SearchHeader :withNavBar="false"/>
    <LoadingContent :loading="!loadingDrink">
        <DrinkDetails :drink="drink"/>
    </LoadingContent>
</template>