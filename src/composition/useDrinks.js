import {searcher} from '../services/drinks.js'
import { onMounted, ref } from "vue";

export default function useDrinks(word)
{
    const loadingDrinks = ref(true)
    const drinks = ref([])
    
    const uploadSearcherDrinks = (word) =>{
      loadingDrinks.value = true;
        let searchWord = word ?? 'all'
        searcher(searchWord).then(allDrinks => {
          drinks.value = allDrinks;
          loadingDrinks.value = false;
        });
    }

    onMounted(async () => uploadSearcherDrinks(word))
    
    return {
      uploadSearcherDrinks,
      loadingDrinks,
      drinks
    }
}