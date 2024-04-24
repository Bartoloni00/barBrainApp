import { call } from "../helpers/http"

let categoriesInLocalMemory = {}
let ingredientInLocalMemory = {}

export const getAllDrinks = async ()=>{
    let drinks = await call({uri:'drinks'})

    return prependCoverUrlToImages(drinks)
}

export const searcher = async (word)=>{
  if(word == 'todos' ||word == 'tragos' || word == 'todos' || word == 'all') return await getAllDrinks()

  const foundCategory = await searcherForCategory(word)
  if (foundCategory) return prependCoverUrlToImages(await call({ uri: `drinks?category=${word}` }));

  const foundIngredient = await searcherForIngredient(word)
  if(foundIngredient) return prependCoverUrlToImages(await call({uri:`drinks?ingredient=${foundIngredient.name}`}));

  const drink = await call({uri: `drinks?name=${word}`})
  
  return prependCoverUrlToImages(drink)
}

export const getRandomDrink = async ()=>{
  let drink = await call({uri:'drinks/random'})

  return prependCoverUrlToImages(drink[0])
}

export const getDrinkByID = async (drinkID)=>{
  let drink = await call({uri:`drinks/${drinkID}`})

  return prependCoverUrlToImages(drink)
}

function prependCoverUrlToImages(arrayOfDrinks) 
{
    if (Array.isArray(arrayOfDrinks)) {
      arrayOfDrinks.forEach(drink => {
        if (drink.hasOwnProperty('cover')) {
          drink.cover = `http://localhost:9763${drink.cover}`
        }
      })
    } else {
      if (arrayOfDrinks.hasOwnProperty('cover')) {
        arrayOfDrinks.cover = `http://localhost:9763${arrayOfDrinks.cover}`
      }
    }

    return arrayOfDrinks
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