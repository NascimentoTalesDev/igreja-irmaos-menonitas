import React from "react";

interface CenterProps{
    children: React.ReactNode;
}
const Center: React.FC<CenterProps> = ({children}) => {
    return (
        <section className="w-full max-w-[1000px]">
            {children}
        </section>
    );
}
 
export default Center;