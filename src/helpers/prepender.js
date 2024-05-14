export function prependCoverUrlToImages(arrayOfDrinks) 
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