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

    addDrink(formData)
    .then(res => {
      form = {
        name: '',
        descripcion: '',
        category: '',
        ingredients: [{ name: '', amount: '' }],
        cover: null,
        preview: null
      };

      console.log(res);
    })
    .catch(err => {
      alert(err)
    })
  };

  return {
    handleAddDrink,
  };
}
