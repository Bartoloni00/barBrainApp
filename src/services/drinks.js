import { call } from "../helpers/http"

export const getAllDrinks = async ()=>{
    let drinks = await call({uri:'drinks'})

    return prependCoverUrlToImages(drinks)
}

function prependCoverUrlToImages(arrayOfDrinks) {
    arrayOfDrinks.forEach(drink => {
      if (drink.hasOwnProperty('cover')) {
        drink.cover = `http://localhost:9763${drink.cover}`
      }
    })

    return arrayOfDrinks
  }