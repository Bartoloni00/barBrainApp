import {searcher} from '@/services/drinks.js'
import { onMounted, ref } from "vue";

export default function useDrinks(word = 'all', page = 1)
{
    const loadingDrinks = ref(true)
    const drinks = ref([])
    const metaData = ref([])
    
    const pushResults = ref(false)

    const uploadSearcherDrinks = (newWord, newPage) =>{
      loadingDrinks.value = true;
      // Verificar si se proporcionan nuevos valores de word y page, si no, usar los valores predeterminados
      const searchWord = newWord !== undefined ? newWord : word;
      const searchPage = newPage !== undefined ? newPage : page;
      searcher(searchWord, searchPage).then(result => {
        if (!pushResults.value) {
          drinks.value = result.drinks;
        } else {
          pushResults.value = false
          drinks.value.push(...result.drinks);
        }
        metaData.value = result.metaData;
      })
      .finally(()=>loadingDrinks.value = false)
    }

   
    onMounted(async () => uploadSearcherDrinks(word, page))
    
    return {
      pushResults,
      uploadSearcherDrinks,
      loadingDrinks,
      drinks,
      metaData
    }
}