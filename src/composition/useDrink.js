import {onMounted, ref} from 'vue'
import { getDrinkByID } from '@/services/drinks.js'
import { useRoute } from 'vue-router';

export default function useDrink () 
{
	const route = useRoute()

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
		drink.value = await getDrinkByID(route.params.id)
		loadingDrink.value = false
	})

	return {
		loadingDrink,
		drink,
	}
}