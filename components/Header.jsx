import React, { useEffect, useState } from "react";
import HamburgerIcon from "./icons/HamburgerIcon";
import formatName from "@/lib/formatName"
import { getCurrentUser } from "@/helpers/getCurrentUser"
const Header = () => {
    const [user, setUser] = useState("")
    
    useEffect(()=>{
        let currentUser = getCurrentUser()
        setUser(currentUser)
    },[])
    
    return (
        <div className="fixed flex items-center justify-between h-[80px] w-full left-0 top-0 bg-primary dark:bg-secondary_more px-[15px]">
            <HamburgerIcon />
            <span className="text-light text-sm">{formatName(user?.name)}</span>
        </div>
    );
}
 
export default Header;