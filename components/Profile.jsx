import { getCurrentUser } from "@/helpers/getCurrentUser"
import { useContext, useEffect, useState } from "react"
import ToggleThemeOffIcon from "./icons/ToggleThemeOffIcon"
import ToggleThemeOnIcon from "./icons/ToggleThemeOnIcon"
import formatName from "@/lib/formatName"
import { contextUserAuth } from "@/providers/userAuthProvider"

const Profile = () => {
    const [user, setUser] = useState("")
    const {toggleTheme, themeUser} = useContext(contextUserAuth)
    
    useEffect(()=>{
        let currentUser = getCurrentUser()
        setUser(currentUser)
    },[])

    
    return (
        <div className="flex flex-col text-sm">
            <h2 className="text-lg font-bold">Meus dados</h2> 
            <h2 className="mt-[30px]">Nome: {formatName(user?.name)}</h2>
            <h2 className="mt-[20px]">Função: {formatName(user?.rule?.name)}</h2>
            <div className="flex mt-[20px] justify-between items-center">
                <h2>Modo escuro:</h2> 
                <button onClick={toggleTheme}>{themeUser ? <ToggleThemeOnIcon /> : <ToggleThemeOffIcon /> }</button>
            </div>
        </div>
    );
}
 
export default Profile;