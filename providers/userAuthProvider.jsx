import { createContext } from 'react'
import useUserAuth from "@/hooks/useUserAuth"

const contextUserAuth = createContext()

function UserAuthProvider({ children }) {

    const { login, user } = useUserAuth()

    return <contextUserAuth.Provider value={{ login, user }} >{children}</contextUserAuth.Provider>
}

export { contextUserAuth, UserAuthProvider }