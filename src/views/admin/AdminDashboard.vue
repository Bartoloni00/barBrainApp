<script setup>
import {ref} from 'vue'

import AdminHeader from '@/components/admin/AdminHeader.vue';
import SearchInput from '@/components/SearchInput.vue';
import BaseButton from '@/components/common/BaseButton.vue'

import AddDrink from '@/components/admin/AddDrink.vue'
import EditDrink from '@/components/admin/EditDrink.vue'
import DeleteDrink from '@/components/admin/DeleteDrink.vue'

const formShowed = ref('add')

function showAddForm(){
    console.log('agregar');
    formShowed.value = 'add'
}
function showUpdateForm(){
    console.log('actualizar');
    formShowed.value = 'update'
}
function showDeleteForm(){
    console.log('eliminar');
    formShowed.value = 'delete'
}
</script>
<template>
    <AdminHeader/>
    <section class="flex justify-evenly min-h-screen py-4">
        <section class="border border-primary-100 rounded-md w-4/12 min-h-[80vh]">
            <header class="border-b-2 border-accent-100 m-2">
                <nav class="m-2">
                    <ul class="flex gap-3 justify-evenly">
                        <li><BaseButton @click="showAddForm" color="success">Agregar</BaseButton></li>
                        <li><BaseButton @click="showUpdateForm" color="accent">Actualizar</BaseButton></li>
                        <li><BaseButton @click="showDeleteForm" color="primary">Eliminar</BaseButton></li>
                    </ul>
                </nav>
            </header>
            <main>
                <EditDrink v-if="formShowed == 'update'" :drink="drinkSelected"/>
                <DeleteDrink v-else-if="formShowed == 'delete'" :drink="drinkSelected"/>
                <AddDrink v-else/>
            </main>
        </section>
        <section class="border border-primary-100 rounded-md w-4/12 min-h-[80vh] px-2">
            <header class="border-b-2 border-accent-100 p-2">
                <SearchInput/>
            </header>
            <main class="text-xl text-white text-center">
                Listado de tragos
            </main>
        </section>
    </section>
</template>