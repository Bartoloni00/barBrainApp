import {getAllDrinks} from '../services/drinks.js'
import { onMounted, ref } from "vue";

export default function useDrinks()
{
    const loadingDrinks = ref(true)
    const drinks = ref([])
    
    onMounted(async () => {
        loadingDrinks.value = true;
        getAllDrinks().then(allDrinks => {
          drinks.value = allDrinks;
          loadingDrinks.value = false;
        });
        
    })
    
    return {
      loadingDrinks,
      drinks
    }
}