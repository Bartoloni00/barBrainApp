import {call} from '@/helpers/http.js'
import {subscribeToAuth} from '@/services/auth.js'

let user = {
    id: null,
    email: null,
    token: null
}

subscribeToAuth(newUserData => { user = {...newUserData} })

export async function addDrink(newDrinkData)
{
    console.log('Form Data:',newDrinkData)
    console.log('user Data:',user)
    if (!user.token) {
        console.log(token = token);
        throw new Error('no hay token')
    }
    const response = await call({uri: 'drinks', method: 'POST', body: newDrinkData, headers: {'Auth-Token': user.token}})

    if (response.error == null) {
        console.log(response.data);
    } else {
        console.error(response.error);
    }
}