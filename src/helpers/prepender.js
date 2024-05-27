const BASE_URL = 'http://localhost:9763'

function addBaseUrlToCover (drink) {
  if (drink.hasOwnProperty('cover')) {
    return {
      ...drink,
      cover: `${BASE_URL}${drink.cover}`
    };
  }
  return drink;
}

export function prependCoverUrlToImages(arrayOfDrinks) 
{
  if (Array.isArray(arrayOfDrinks)) {
    return arrayOfDrinks.map(addBaseUrlToCover);
  } else {
    return addBaseUrlToCover(arrayOfDrinks);
  }
}