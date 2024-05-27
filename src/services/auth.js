import {call} from '@/helpers/http.js'

let userData = {
    id: null,
    email: null,
    token: null
}

let observers = []

if (localStorage.getItem('userData')) {
    updateSessionData(JSON.parse(localStorage.getItem('userData')))
}

export async function login({email, password}) {
    const body = {email, password}
    const response = await call({uri: 'login', method: 'POST', body})

    if(response.success) {
        updateSessionData(response.data)
    } else {
        throw new Error(response.error)
    }
    
}

export async function logout() {
    const response = await call({uri: 'logout', method: 'DELETE', body: undefined, headers: {'Auth-Token': userData.token}})
    if (!response) {
        clearSessionData()
    } else {
        throw new Error('No se pudo cerrar sesion')
    }
}

export function subscribeToAuth(observer) {
    observers.push(observer)
    console.log('Observer agregado', observers);
    notify(observer)

    // cancelamos la subscripcion de los que ya no utilizaremos
    return () => observers = observers.filter(obs => obs !== observer)
}  

function notify(callback) {
    callback({
        ...userData,
    })
}

function notifyAll() {
    observers.forEach(observer => notify(observer))
}

function updateSessionData( newData ) {
    userData = {
        ...userData,
        ...newData,
    }
    localStorage.setItem('userData',JSON.stringify(userData))
    notifyAll()
}

function clearSessionData() {
    userData = {
        id: null,
        email: null,
        token: null
    }
    localStorage.removeItem('userData')
    notifyAll()
}