import Link from "next/link";
import HomeIcon from "./icons/HomeIcon";
import ActionsIcon from "./icons/ActionsIcon";
import ReportsIcon from "./icons/ReportsIcon";
import CategoryIcon from "./icons/CategoryIcon";
import UserProfileIcon from "./icons/UserProfileIcon";
import { useContext } from "react";
import { ModalContext } from "@/providers/ModalProvider";
import Profile from "./Profile";

const Menu = () => {
    const {setDataModal, toggleModal} = useContext(ModalContext)
    
    return (
        <div className="fixed px-[10px] bottom-0 left-0 h-[80px] w-full bg-secondary_more">
            <ul className="flex justify-between h-full items-center max-w-[600px] mx-auto">
                <li className="w-[60px] h-[60px] p-3 flex items-center justify-center">
                    <Link className="flex flex-col items-center justify-center" href={"/dashboard"}>
                        <HomeIcon />
                        <span className="text-light text-sm">Início</span>
                    </Link>
                </li>
                <li className="w-[60px] h-[60px] p-3 flex items-center justify-center">
                    <Link className="flex flex-col items-center justify-center" href={"/dashboard/categories"}>
                        <CategoryIcon />
                        <span className="text-light text-sm">Categorias</span>
                    </Link>
                </li>
                <li className="w-[60px] h-[60px] p-3 flex items-center justify-center">
                    <ActionsIcon />
                </li>
                <li className="w-[60px] h-[60px] p-3 flex items-center justify-center">
                    <Link className="flex flex-col items-center justify-center" href={"/dashboard/reports"}>
                        <ReportsIcon />
                        <span className="text-light text-sm">Relatórios</span>
                    </Link> 
                </li>
                <li onClick={()=> {toggleModal(), setDataModal(<Profile />)}} className="w-[60px] h-[60px] flex flex-col items-center justify-center cursor-pointer">
                    <UserProfileIcon />
                    <span className="text-light text-sm">Perfil</span>
                </li>
            </ul>
        </div>
    );
}

export default Menu;