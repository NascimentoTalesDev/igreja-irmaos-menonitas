import { createContext } from 'react'
import useUserAuth from "@/hooks/useUserAuth"

const contextUserAuth = createContext()

function UserAuthProvider({ children }) {

    const { login } = useUserAuth()

    return <contextUserAuth.Provider value={{ login }} >{children}</contextUserAuth.Provider>
}

export { contextUserAuth, UserAuthProvider }