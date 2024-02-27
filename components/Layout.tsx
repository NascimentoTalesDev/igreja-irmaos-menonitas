import React from "react";
import Menu from "./Menu";
import Header from "./Header";
import Modal from "@/components/Modal";
import ModalSecond from "@/components/ModalSecond";
import Center from "@/components/Center";

interface LayoutProps{
    children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({children}) => {
    
    return (
        <div className="h-screen w-full bg-light dark:bg-secondary text-secondary dark:text-light">
            <ModalSecond />
            <Modal />
            <Header />
            <main className="px-[14px] py-[110px] w-full h-full overflow-y-scroll">
                <Center>
                    {children}
                </Center>
            </main>
            <Menu />
        </div>
    );
}
 
export default Layout;