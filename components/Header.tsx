import React, { useContext } from "react";
import HamburgerIcon from "./icons/HamburgerIcon";
import { contextUserAuth } from "@/providers/userAuthProvider";
import formatName from "@/lib/formatName"
const Header = () => {
    const { user } = useContext(contextUserAuth)
    
    return (
        <div className="fixed flex items-center justify-between h-[80px] w-full left-0 top-0 bg-secondary_more px-[15px]">
            <HamburgerIcon />
            <span className="text-light text-sm">{formatName(user?.name)}</span>
        </div>
    );
}
 
export default Header;