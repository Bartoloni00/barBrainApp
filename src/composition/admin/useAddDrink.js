import { ref } from 'vue';
import { addDrink } from '@/services/DrinksABM.js';

export default function useAddDrink() {
  const form = ref({
    name: '',
    descripcion: '',
    category: '',
    ingredients: [{ name: '', amount: '' }],
    cover: null,
    preview: null
  });

  const handleFileUpload = event => {
    const file = event.target.files[0];
    form.value.cover = file;

    // Previsualizacion
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      form.value.preview = reader.result;
    });

    reader.readAsDataURL(file);
  };

  const handleAddDrink = async () => {
    const formData = new FormData();
    formData.append('name', form.value.name);
    formData.append('descripcion', form.value.descripcion);
    formData.append('category', form.value.category);
    formData.append('cover', form.value.cover);

    form.value.ingredients.forEach((ingredient, index) => {
      formData.append(`ingredients[${index}][name]`, ingredient.name);
      formData.append(`ingredients[${index}][amount]`, ingredient.amount);
    });

    try {
      const response = await addDrink(formData);
      form.value = {
        name: '',
        descripcion: '',
        category: '',
        ingredients: [{ name: '', amount: '' }],
        cover: null,
        preview: null
      };

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const addIngredient = () => {
    form.value.ingredients.push({ name: '', amount: '' });
  };

  const removeIngredient = index => {
    form.value.ingredients.splice(index, 1);
  };

  return {
    form,
    handleFileUpload,
    handleAddDrink,
    addIngredient,
    removeIngredient
  };
}
