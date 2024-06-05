<script setup>
import SearchHeader from '@/components/search/SearchHeader.vue';
import LoadingContent from '@/components/common/LoadingContent.vue';

import useDrink from '@/composition/useDrink.js'
import DrinkDetails from '@/components/drinks/DrinkDetails.vue';

const {loadingDrink, drink} = useDrink()
</script>
<template>
    <SearchHeader :withNavBar="false"/>
    <LoadingContent :loading="!loadingDrink">
        <DrinkDetails :drink="drink"/>
    </LoadingContent>
</template>