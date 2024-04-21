import { call } from "../helpers/http"

export const getAllDrinks = async ()=>{
    let drinks = await call({uri:'drinks'})

    return prependCoverUrlToImages(drinks)
}

export const searcher = async (word)=>{

  // traer a todas las categorias, si hace match con alguna filtrar por categoria
  const categories = await call({uri:'categories'})
  const foundCategory = categories.find(category => category.name.includes(word));
  if (foundCategory) 
  {
      return prependCoverUrlToImages(await call({ uri: `drinks?category=${word}` }));
  }
  // traer a todos los ingredientes, si hace match con alguno filtrar por ingrediente
  const ingredients = await call({uri:'ingredients'})
  const foundIngredient = ingredients.find(ingredient => ingredient.name.includes(word))
  if(foundIngredient)
  {
    return prependCoverUrlToImages(await call({uri:`drinks?ingredient=${word}`}))
  }
  // traer a todos los tragos, si hace match con alguno filtrar por trago
  const drink = await call({uri: `drinks?name=${word}`})

  if(drink)
  {
    return prependCoverUrlToImages(drink)
  }

  return 'Not found'
  // esto seria un switch...
  // guardar lo que traemos en memoria para evitar un llamado excesivo a la api
}

export const getRandomDrink = async ()=>{
  let drink = await call({uri:'drinks/random'})

  return prependCoverUrlToImages(drink[0])
}

export const getDrinkByID = async (drinkID)=>{
  let drink = await call({uri:`drinks/${drinkID}`})

  return prependCoverUrlToImages(drink)
}

function prependCoverUrlToImages(arrayOfDrinks) {
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