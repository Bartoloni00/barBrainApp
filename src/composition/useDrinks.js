import {getAllDrinks, searcher} from '../services/drinks.js'
import { onMounted, ref } from "vue";

export default function useDrinks(word)
{
    const loadingDrinks = ref(true)
    const drinks = ref([])
    
    onMounted(async () => {
        loadingDrinks.value = true;
        searcher(word).then(allDrinks => {
          console.log(allDrinks);
          drinks.value = allDrinks;
          loadingDrinks.value = false;
        });
        
    })
    
    return {
      loadingDrinks,
      drinks
    }
}