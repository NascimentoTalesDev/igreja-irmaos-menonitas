import { NavContext } from "@/providers/NavbarProvider";
import { useContext, useEffect, useState } from "react";
import CloseIcon from "./icons/CloseIcon";
import Logo from "./Logo";
import Link from "next/link";
import { getCurrentUser } from "@/helpers/getCurrentUser";
import formatName from "@/lib/formatName";
import ChevronRightIcon from "./icons/ChevronRightIcon";
import DocsIcon from "./icons/DocsIcon";
import SettingsIcon from "./icons/SettingsIcon";
import UsersIcon from "./icons/UsersIcon";
import TransactionsIcon from "./icons/TransactionsIcon";
import LogIcon from "./icons/LogIcon";
import Overlay from "./Overlay";
import { contextUserAuth } from "@/providers/userAuthProvider";
import LogoColorful from "./LogoColorful";

const MenuMobile = () => {
    const { logout, themeUser } = useContext(contextUserAuth)
    const { showMenuMobile, toggleMenuMobile } = useContext(NavContext)
    const [user, setUser] = useState("")

    useEffect(() => {
        let currentUser = getCurrentUser()
        setUser(currentUser)
    }, [])

    const logoutUser = async () => {
        await logout()
    }
    console.log(themeUser);

    return (
        <div className={`w-screen h-screen fixed top-0 z-[99] transition-all duration-500 ${showMenuMobile ? "left-[0%] " : "-left-[100%]"}`}>
            <Overlay onClick={toggleMenuMobile} />
            <div className={`absolute h-full py-[30px] justify-between backdrop-blur-[2px] flex flex-col w-[350px] bg-light shadow-lg dark:bg-gray_rgba left-0`}>
                <menu>
                    <div className="flex px-[30px] justify-between w-full">
                        {themeUser ? (
                            <Logo height={39} width={27} onclick={toggleMenuMobile} path="/dashboard" />
                            ):(
                            <LogoColorful height={39} width={27} onclick={toggleMenuMobile} path="/dashboard" />
                        )}
                        <div className="h-fit w-fit absolute top-[20px] right-[20px] cursor-pointer" onClick={toggleMenuMobile} >
                            <CloseIcon />
                        </div>
                    </div>

                    {/* Options to admin */}
                    <div className="mt-[30px] w-full">
                        <ul className="flex flex-col justify-center">
                            <li onClick={toggleMenuMobile} className="border-b border-mygray_more">
                                <Link className="flex p-3 h-full justify-between items-center" href={"/dashboard/documents"}>
                                    <div className="flex items-center gap-2">
                                        <DocsIcon />
                                        Documentos
                                    </div>
                                    <ChevronRightIcon className="w-4 h-4" />
                                </Link>
                            </li>
                            <li onClick={toggleMenuMobile} className="border-b border-mygray_more">
                                <Link className="flex p-3 justify-between items-center" href={"/dashboard/transactions"}>
                                    <div className="flex items-center gap-2">
                                        <TransactionsIcon />
                                        Movimentações
                                    </div>
                                    <ChevronRightIcon className="w-4 h-4" />
                                </Link>
                            </li>
                            <li onClick={toggleMenuMobile} className="border-b border-mygray_more">
                                <Link className="flex p-3 justify-between items-center" href={"/dashboard/manage-accounts"}>
                                    <div className="flex items-center gap-2">
                                        <UsersIcon />
                                        Gerenciar contas
                                    </div>
                                    <ChevronRightIcon className="w-4 h-4" />
                                </Link>
                            </li>
                            <li onClick={toggleMenuMobile} className="border-b border-mygray_more">
                                <Link className="flex p-3 justify-between items-center" href={"/dashboard/system-log"}>
                                    <div className="flex items-center gap-2">
                                        <LogIcon />
                                        Log do sistema
                                    </div>
                                    <ChevronRightIcon className="w-4 h-4" />
                                </Link>
                            </li>
                            <li onClick={toggleMenuMobile} className="border-b border-mygray_more">
                                <Link className="flex p-3 justify-between items-center" href={"/dashboard/settings"}>
                                    <div className="flex items-center gap-2">
                                        <SettingsIcon />
                                        Configurações
                                    </div>
                                    <ChevronRightIcon className="w-4 h-4" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </menu>

                <div className="flex justify-center flex-col">
                    <ul className="flex flex-col justify-center text-center">
                        <li className="py-1 text-[14px]">
                            <span className="font-normal dark:font-thin">Logado como </span><span className="">{formatName(user?.name)}</span>
                        </li>
                        <li onClick={()=> {toggleMenuMobile(), logoutUser()}} className="py-1">
                            <Link className="" href={"/dashboard"}>
                                Sair
                            </Link>
                        </li>
                        <li className="text-left ml-[10px]">
                            <span className="text-[10px] ">Versão 1.0.0</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MenuMobile;