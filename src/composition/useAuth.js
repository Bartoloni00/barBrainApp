import {login, logout} from '@/services/auth.js'
import { useRouter } from 'vue-router';


export default function useAuth() {
    const router = useRouter()

    const handleLogin = ({email, password}) => {
        login({email: email, password: password})
            .then(res => {
                router.push({path:'/dashboard'})
            })
            .catch(err => console.log(err))
    }

    const handleLogout = () => {
        logout()
            .then(res => {
                router.push({path: '/'})
            })
            .catch(err => {
                console.log(err);
            })
    }

    return {
        handleLogin,
        handleLogout
    }
}