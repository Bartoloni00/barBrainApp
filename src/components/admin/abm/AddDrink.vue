<script setup>
import BaseButton from '@/components/common/BaseButton.vue';
import PreviewImage from '@/components/common/PreviewImage.vue';
import useAddDrink from '@/composition/admin/useAddDrink.js'

const {
        form,
        handleFileUpload,
        handleAddDrink,
        addIngredient,
        removeIngredient
    } = useAddDrink()
</script>

<template>
  <form @submit.prevent="handleAddDrink" class="mx-2 mb-2 flex flex-col gap-2">
      <div class="relative">
        <label class="block mb-3 text-sm font-medium text-text-300 dark:text-text-100" for="name">Nombre</label>
        <input
          placeholder="Nombre del trago"
          class="block w-full px-4 py-3 mt-2 text-bg-100 bg-text-100 border-2 rounded-lg dark:border-text-300 dark:bg-bg-100 dark:text-text-100 focus:border-accent-200 dark:focus:border-accent-100 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-accent-100"
          name="name"
          id="name"
          type="text"
          v-model="form.name"
        />
      </div>

      <div class="relative">
        <label class="block mb-3 text-sm font-medium text-text-300 dark:text-text-100" for="descripcion">Descripcion</label>
        <textarea
          placeholder="descripcion"
          class="block w-full px-4 py-3 mt-2 text-bg-100 bg-text-100 border-2 rounded-lg dark:border-text-300 dark:bg-bg-100 dark:text-text-100 focus:border-accent-200 dark:focus:border-accent-100 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-accent-100"
          name="descripcion"
          id="descripcion"
          v-model="form.descripcion"
        ></textarea>
      </div>

      <div class="relative">
        <label class="block mb-3 text-sm font-medium text-text-300 dark:text-text-100" for="category">Categoria</label>
        <input
          placeholder="Categoria"
          class="block w-full px-4 py-3 mt-2 text-bg-100 bg-text-100 border-2 rounded-lg dark:border-text-300 dark:bg-bg-100 dark:text-text-100 focus:border-accent-200 dark:focus:border-accent-100 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-accent-100"
          name="category"
          id="category"
          type="text"
          v-model="form.category"
        />
      </div>

      <div class="relative">
        <label class="block mb-3 text-sm font-medium text-text-300 dark:text-text-100">Ingredientes</label>
        <div v-for="(ingredient, index) in form.ingredients" :key="index" class="mb-4">
          <input
            placeholder="Nombre del ingrediente"
            class="block w-full px-4 py-3 mt-2 text-bg-100 bg-text-100 border-2 rounded-lg dark:border-text-300 dark:bg-bg-100 dark:text-text-100 focus:border-accent-200 dark:focus:border-accent-100 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-accent-100"
            name="ingredient-name"
            :id="'ingredient-name-' + index"
            type="text"
            v-model="ingredient.name"
          />
          <input
            placeholder="Cantidad / Medida"
            class="block w-full px-4 py-3 mt-2 text-bg-100 bg-text-100 border-2 rounded-lg dark:border-text-300 dark:bg-bg-100 dark:text-text-100 focus:border-accent-200 dark:focus:border-accent-100 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-accent-100"
            name="ingredient-amount"
            :id="'ingredient-amount-' + index"
            type="text"
            v-model="ingredient.amount"
          />
          <button type="button" @click="removeIngredient(index)" class="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg">Eliminar ingrediente</button>
        </div>
        <button type="button" @click="addIngredient" class="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg mx-auto w-full">Agregar ingrediente</button>
      </div>

      <div class="relative">
        <label class="block mb-3 text-sm font-medium text-text-300 dark:text-text-100" for="cover">Imagen</label>
        <input
          class="block w-full px-4 py-3 mt-2 text-bg-100 bg-text-100 border-2 rounded-lg dark:border-text-300 dark:bg-bg-100 dark:text-text-100 focus:border-accent-200 dark:focus:border-accent-100 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-accent-100"
          name="cover"
          id="cover"
          type="file"
          @change="handleFileUpload"
        />
      </div>
      <PreviewImage 
      v-if="form.preview != null"
      :preview="form.preview"/>
      <BaseButton color="success">Agregar trago</BaseButton>
  </form>
</template>