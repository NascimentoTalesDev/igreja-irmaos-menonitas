import React, { useContext, useEffect, useState } from "react";
import HamburgerIcon from "./icons/HamburgerIcon";
import formatName from "@/lib/formatName"
import { getCurrentUser } from "@/helpers/getCurrentUser"
import { NavContext } from "@/providers/NavbarProvider";

const Header = () => {
    const [user, setUser] = useState("")
    const { showMenuMobile, toggleMenuMobile } = useContext(NavContext)

    useEffect(()=>{
        let currentUser = getCurrentUser()
        setUser(currentUser)
    },[])
    
    return (
        <div className="fixed z-[9] flex items-center justify-between h-[80px] w-full left-0 top-0 bg-primary dark:bg-secondary_more px-[15px]">
            <div className="cursor-pointer" onClick={toggleMenuMobile}>
                <HamburgerIcon />
            </div>
            <span className="text-light text-sm">{formatName(user?.name)}</span>
        </div>
    );
}
 
export default Header;