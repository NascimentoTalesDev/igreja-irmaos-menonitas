import api from '@/utils/api'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useFlashMessage from './useFlashMessage'

export default function useUserAuth() {
    const router = useRouter()
    const { setFlashMessage } = useFlashMessage()

    async function authUser(data) {

        localStorage.setItem('token', JSON.stringify(data?.token))

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

    return { login }
}

