import { call } from "../helpers/http"

export const getAllDrinks = async ()=>{
    let drinks = await call({uri:'drinks'})

    return prependCoverUrlToImages(drinks)
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