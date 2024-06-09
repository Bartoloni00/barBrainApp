<script setup>
import AddDrink from '@/components/admin/abm/AddDrink.vue'
import EditDrink from '@/components/admin/abm/EditDrink.vue'
import DeleteDrink from '@/components/admin/abm/DeleteDrink.vue'

const props = defineProps({
    formShowed:{
        Type:String,
        default: 'add'
    },
    drinkSelected:{
        Type: Object,
        required: false
    }
})
</script>
<template>
    <main>
        <EditDrink v-if="formShowed == 'update'" :drink="drinkSelected"/>
        <DeleteDrink v-else-if="formShowed == 'delete'" :drink="drinkSelected"/>
        <AddDrink v-else/>
    </main>
</template>