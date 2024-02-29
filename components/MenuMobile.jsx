import { NavContext } from "@/providers/NavbarProvider";
import { useContext, useEffect, useState } from "react";
import CloseIcon from "./icons/CloseIcon";
import Logo from "./Logo";
import Link from "next/link";
import { getCurrentUser } from "@/helpers/getCurrentUser";
import formatName from "@/lib/formatName";

const MenuMobile = () => {
    const { showMenuMobile, toggleMenuMobile } = useContext(NavContext)
    const [user, setUser] = useState("")

    useEffect(() => {
        let currentUser = getCurrentUser()
        setUser(currentUser)
    }, [])

    return (
        <div className={`fixed p-[30px] justify-between backdrop-blur-[2px] flex flex-col top-0 h-screen transition-all duration-500 w-[350px] bg-light shadow-lg  dark:bg-gray_rgba  z-[99] ${showMenuMobile ? "right-[0%] " : "-right-[100%]"}`}>
            <menu>
                <div className="flex justify-between w-full">
                    <Logo height={50} width={50} onclick={toggleMenuMobile} path="/dashboard" />
                    <div className="h-fit w-fit absolute top-[20px] right-[20px] p-3 cursor-pointer" onClick={toggleMenuMobile} >
                        <CloseIcon />
                    </div>
                </div>

                {/* Options to admin */}
                <div className="mt-[30px] w-full">
                    <ul className="flex flex-col justify-center">
                        <li onClick={toggleMenuMobile} className="py-1">
                            <Link className="" href={"/dashboard/documents"}>
                                Documentos
                            </Link>
                        </li>
                        <li onClick={toggleMenuMobile} className="py-1">
                            <Link className="" href={"/dashboard/transactions"}>
                                Movimentações
                            </Link>
                        </li>
                        <li onClick={toggleMenuMobile} className="py-1">
                            <Link className="" href={"/dashboard/manage-accounts"}>
                                Gerenciar contas
                            </Link>
                        </li>
                        <li onClick={toggleMenuMobile} className="py-1">
                            <Link className="" href={"/dashboard/system-log"}>
                                Log do sistema
                            </Link>
                        </li>
                        <li onClick={toggleMenuMobile} className="py-1">
                            <Link className="" href={"/dashboard/settings"}>
                                Configurações
                            </Link>
                        </li>
                    </ul>
                </div>
            </menu>

            <div className="flex justify-center flex-col">
                <ul className="flex flex-col justify-center text-center">
                    <li className="py-1 text-[14px]">
                        <span className="font-thin">Logado como </span><span className="">{formatName(user?.name)}</span>
                    </li>
                    <li className="py-1">
                        <Link className="" href={"/dashboard"}>
                            Sair
                        </Link>
                    </li>
                    <li className="text-right">
                        <span className="text-[10px] ">Versão 1.0.0</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MenuMobile;