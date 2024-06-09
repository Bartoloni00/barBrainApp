import { updateDrink } from '@/services/DrinksABM.js'
import useDrinks from "../useDrinks";

export default function useUpdateDrink() {
const {uploadSearchDrinks} = useDrinks()
const handleUpdateDrink = (form, drinkID) => {
    const formData = new FormData()
    formData.append('name', form.name)
    formData.append('descripcion', form.descripcion)
    formData.append('category', form.category)
    formData.append('cover', form.cover)

    form.ingredients.forEach((ingredient, index) => {
        formData.append(`ingredients[${index}][name]`, ingredient.name)
        formData.append(`ingredients[${index}][amount]`, ingredient.amount)
    })

    updateDrink(formData, drinkID)
    .then(response => {
        form.name = ''
        form.descripcion = ''
        form.category = ''
        form.ingredients = [{ name: '', amount: '' }]
        form.cover = null
        form.preview = null

        console.log(response)
        alert('actualizado con exito')
        uploadSearchDrinks('all')
      })
    .catch(err => {
        console.error(err)
        alert('error al actualizar')
    })
  }

  return {
      handleUpdateDrink,
  }
}