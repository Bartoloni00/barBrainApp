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
    if (!user.token) {
        throw new Error('no hay token')
    }
    const response = await call({uri: 'drinks', method: 'POST', body: newDrinkData, headers: {'Auth-Token': user.token}})

    if (response.error == null) {
        return response.data
    } else {
        clearSessionData()
        console.error(response.error);
    }
}