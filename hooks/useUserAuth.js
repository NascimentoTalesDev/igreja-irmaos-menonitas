import api from '@/utils/api'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useFlashMessage from './useFlashMessage'
import Cookies from "js-cookie"

export default function useUserAuth() {
    const router = useRouter()
    const { setFlashMessage } = useFlashMessage()
    const [authenticated, setAuthenticated] = useState(false)    
    const [user, setUser] = useState("")    

    useEffect(() => {
        let token = localStorage.getItem('token')

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        } else {
            setAuthenticated(false)
        }
    }, [authenticated])

    async function authUser(data) {
        let theme = document.querySelector('.dark')
        console.log("Theme", theme);
        if (theme) {
            localStorage.setItem('theme', 'dark')        
        }

        localStorage.setItem('token', JSON.stringify(data?.token))
        Cookies.set("user", JSON.stringify(data?.user))
        setUser(data?.user)
        router.replace("/dashboard")
    }

    async function login(user) {
        let msgText = 'Usuário logado com sucesso'
        let msgType = 'success'

        try {
            const data = await api.post('/users/login', user).then((response) => {
                return response.data
            })
            await authUser(data)
            
        } catch (error) {
            msgText = error?.response?.data?.message?.data
            msgType = 'error'
        }
        setFlashMessage(msgText, msgType)
    }

    return { login, user }
}

