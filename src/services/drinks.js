import { call } from "@/helpers/http"
import { prependCoverUrlToImages } from "@/helpers/prepender"

let categoriesInLocalMemory = {}
let ingredientInLocalMemory = {}
let lastSearchResult = []
/**
 * 
 * @param {String} word 
 * @param {Number} page 
 * @returns {{Object, Array}} {Metadata, Drinks}
 */
export const searcher = async (word = 'all', page = 1)=>{
  if (word == 'todos' ||word == 'tragos' || word == 'todos' || word == 'all') return returnCall(undefined, page);

  const foundCategory = await searcherForCategory(word)
  if (foundCategory) return returnCall(`category=${word}`, page);

  const foundIngredient = await searcherForIngredient(word)
  if (foundIngredient) return returnCall(`ingredient=${foundIngredient.name}`, page);

  return returnCall(`name=${word}`, page)
}

export const getRandomDrink = async ()=>{
  let drink = await call({uri:'drinks/random'})

  return prependCoverUrlToImages(drink[0])
}

export const getDrinkByID = async (drinkID)=>{
  let drink = await call({uri:`drinks/${drinkID}`})

  return prependCoverUrlToImages(drink)
}

/**
 * Verifica si no tenemos las categorias posibles guardadas en la mejoria 
 * En caso de no tenerlas las va a buscar a la DB y las guarda en memoria.
 * @param {string} word 
 * @returns Retorna un array con el Match o Vacio
 */
async function searcherForCategory(word)
{
  if (Object.keys(categoriesInLocalMemory).length === 0 ) {
    categoriesInLocalMemory = await call({uri:'categories'})
  }
  return categoriesInLocalMemory.find(category => category.name.includes(word));
}
/**
 * Verifica si no tenemos los ingredientes posibles guardados en la mejoria 
 * En caso de no tenerlos los va a buscar a la DB y las guarda en memoria.
 * @param {string} word 
 * @returns Retorna un array con el Match o Vacio
 */
async function searcherForIngredient(word)
{
  if (Object.keys(ingredientInLocalMemory).length === 0) {
    ingredientInLocalMemory = await call({uri:'ingredients'})
  }
  return ingredientInLocalMemory.find(ingredient => ingredient.name.includes(word))
}

async function returnCall(uri, page = 1)
{
  let fetch =await call({ uri: `drinks/paginate?page=${page}&perPage=6${uri ? '&' + uri : ''}` });

  return {metaData: fetch.metadata, drinks:prependCoverUrlToImages(fetch.drinks)}
}