import { ref } from 'vue';

export default function useFormCommon()
{
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

  const addIngredient = () => {
    form.value.ingredients.push({ name: '', amount: '' });
  };

  const removeIngredient = index => {
    form.value.ingredients.splice(index, 1);
  };

  return {
    form,
    handleFileUpload,
    addIngredient,
    removeIngredient
  };
}