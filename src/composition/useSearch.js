import { useRouter } from 'vue-router';
import { ref } from "vue"

export default function useSearch () 
{
    // si searchVar.value esta vacio no se tiene que enviar.
    // Se envia la palabra que buscamos al componente SearchDrinks y este se encarga de todo
    const processingForm = ref(false)
    const wordInSearchVar = ref('')
    const router = useRouter()
    const handleSearchDrink = (isAdminSeach = false)=>{
        if (processingForm.value) return;
        processingForm.value = true
        if(wordInSearchVar.value == '') return;

        if (isAdminSeach) {
            processingForm.value = false
            router.push({path: '/dashboard', query:{search: wordInSearchVar.value}})
        } else {
            processingForm.value = false
            router.push({path: '/search', query:{search: wordInSearchVar.value}})
        }
    }
    return {
        processingForm,
        wordInSearchVar,
        handleSearchDrink,
    }
}