import { getRandomDrink } from "../services/drinks"
import {onMounted, ref} from 'vue'

export default function useRandomDrink()
{
    const loadingDrink = ref(true)
    const drink = ref({
		_id: null,
		name: null,
		category: null,
		descripcion: null,
		ingredients: [
			{
				name: null,
				amount: null
			}
		]
	})

	onMounted(async () => {
		loadingDrink.value = true
		drink.value = await getRandomDrink()
		loadingDrink.value = false
	})

	return {
		loadingDrink,
		drink,
	}
}