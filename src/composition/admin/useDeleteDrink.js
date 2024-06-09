import { deleteDrink } from "@/services/DrinksABM.js"

export default function useDeleteDrink() {
    const handleDeleteDrink = (drinkID) => {
        deleteDrink(drinkID)
        .then(res => {
            console.log(res);
            alert('eliminado exitosamente')
        })
        .catch(err => {
            console.error(err);
        })
    }
    return {
        handleDeleteDrink
    }
}
