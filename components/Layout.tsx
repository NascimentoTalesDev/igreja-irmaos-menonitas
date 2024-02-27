import React from "react";
import Menu from "./Menu";
import Header from "./Header";

interface LayoutProps{
    children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div className="h-screen w-full">
            <Header />
            <main className="px-[14px] pt-[80px]">
                {children}
            </main>
            <Menu />
        </div>
    );
}
 
export default Layout;