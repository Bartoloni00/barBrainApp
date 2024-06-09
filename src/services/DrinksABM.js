import {call} from '@/helpers/http.js'
import {subscribeToAuth, clearSessionData} from '@/services/auth.js'

let user = {
    id: null,
    email: null,
    token: null
}
subscribeToAuth(newUserData => { user = {...newUserData} })

export async function addDrink(newDrinkData)
{
    if (!user.token) throw new Error('no hay token')
    const response = await call({uri: 'drinks', method: 'POST', body: newDrinkData, headers: {'Auth-Token': user.token}})

    if (response.error == null) {
        return response.data
    } else {
        clearSessionData()
        throw new Error(response.error)
    }
}

export async function updateDrink(newDrinkData, drinkID)
{
    if (!user.token) throw new Error('no hay token')
    const response = await call({uri: `drinks/${drinkID}`, method: 'PATCH', body: newDrinkData, headers: {'Auth-Token': user.token}})

    if (response.error == null) {
        return response.data
    } else {
        clearSessionData()
        console.error(response.error);
    }
}

export async function deleteDrink(id)
{
    if (!user.token) throw new Error('no hay token')
    const response = await call({uri: `drinks/${id}`, method: 'DELETE', headers: {'Auth-Token': user.token}})

    if (!response) {
        return 'El trago se elimino con exito'
    } else {
        clearSessionData()
        throw new Error('error al eliminar el trago')
    }
}