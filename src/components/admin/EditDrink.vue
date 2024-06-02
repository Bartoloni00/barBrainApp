<script setup>
import { ref } from 'vue';
import BaseButton from '@/components/common/BaseButton.vue';

const props = defineProps({
    drinks:{
        type: Object,
        required:true
    }
})

const form = ref({
  name: '',
  description: '',
  category: '',
  ingredients: [{ name: '', amount: '' }],
  cover: null
});

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  form.value.cover = file;
};

const handleAddDrink = () => {
  console.log('Form data:', form.value);
  // Aquí puedes manejar la lógica para enviar el formulario
};

const addIngredient = () => {
  form.value.ingredients.push({ name: '', amount: '' });
};

const removeIngredient = (index) => {
  form.value.ingredients.splice(index, 1);
};
</script>
<template>
  <form @submit.prevent="handleAddDrink">
    <div class="mt-10">
      <div class="relative">
        <label class="block mb-3 text-sm font-medium text-text-300 dark:text-text-100" for="name">Name</label>
        <input
          placeholder="Drink Name"
          class="block w-full px-4 py-3 mt-2 text-bg-100 bg-text-100 border-2 rounded-lg dark:border-text-300 dark:bg-bg-100 dark:text-text-100 focus:border-accent-200 dark:focus:border-accent-100 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-accent-100"
          name="name"
          id="name"
          type="text"
          v-model="form.name"
        />
      </div>

      <div class="relative">
        <label class="block mb-3 text-sm font-medium text-text-300 dark:text-text-100" for="description">Description</label>
        <textarea
          placeholder="Description"
          class="block w-full px-4 py-3 mt-2 text-bg-100 bg-text-100 border-2 rounded-lg dark:border-text-300 dark:bg-bg-100 dark:text-text-100 focus:border-accent-200 dark:focus:border-accent-100 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-accent-100"
          name="description"
          id="description"
          v-model="form.description"
        ></textarea>
      </div>

      <div class="relative">
        <label class="block mb-3 text-sm font-medium text-text-300 dark:text-text-100" for="category">Category</label>
        <input
          placeholder="Category"
          class="block w-full px-4 py-3 mt-2 text-bg-100 bg-text-100 border-2 rounded-lg dark:border-text-300 dark:bg-bg-100 dark:text-text-100 focus:border-accent-200 dark:focus:border-accent-100 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-accent-100"
          name="category"
          id="category"
          type="text"
          v-model="form.category"
        />
      </div>

      <div class="relative">
        <label class="block mb-3 text-sm font-medium text-text-300 dark:text-text-100">Ingredients</label>
        <div v-for="(ingredient, index) in form.ingredients" :key="index" class="mb-4">
          <input
            placeholder="Ingredient Name"
            class="block w-full px-4 py-3 mt-2 text-bg-100 bg-text-100 border-2 rounded-lg dark:border-text-300 dark:bg-bg-100 dark:text-text-100 focus:border-accent-200 dark:focus:border-accent-100 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-accent-100"
            name="ingredient-name"
            :id="'ingredient-name-' + index"
            type="text"
            v-model="ingredient.name"
          />
          <input
            placeholder="Amount"
            class="block w-full px-4 py-3 mt-2 text-bg-100 bg-text-100 border-2 rounded-lg dark:border-text-300 dark:bg-bg-100 dark:text-text-100 focus:border-accent-200 dark:focus:border-accent-100 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-accent-100"
            name="ingredient-amount"
            :id="'ingredient-amount-' + index"
            type="text"
            v-model="ingredient.amount"
          />
          <button type="button" @click="removeIngredient(index)" class="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg">Remove</button>
        </div>
        <button type="button" @click="addIngredient" class="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg">Add Ingredient</button>
      </div>

      <div class="relative">
        <label class="block mb-3 text-sm font-medium text-text-300 dark:text-text-100" for="cover">Cover</label>
        <input
          class="block w-full px-4 py-3 mt-2 text-bg-100 bg-text-100 border-2 rounded-lg dark:border-text-300 dark:bg-bg-100 dark:text-text-100 focus:border-accent-200 dark:focus:border-accent-100 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-accent-100"
          name="cover"
          id="cover"
          type="file"
          @change="handleFileUpload"
        />
      </div>

      <BaseButton color="accent">Actualizar trago</BaseButton>
    </div>
  </form>
</template>