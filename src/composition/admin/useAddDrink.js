import { addDrink } from '@/services/DrinksABM.js';

export default function useAddDrink() {
  const handleAddDrink = async (form) => {
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('descripcion', form.descripcion);
    formData.append('category', form.category);
    formData.append('cover', form.cover);

    form.ingredients.forEach((ingredient, index) => {
      formData.append(`ingredients[${index}][name]`, ingredient.name);
      formData.append(`ingredients[${index}][amount]`, ingredient.amount);
    });

    try {
      const response = await addDrink(formData);
      form = {
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

  return {
    handleAddDrink,
  };
}
