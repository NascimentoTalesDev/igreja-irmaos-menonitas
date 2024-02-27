import React from "react";

interface CenterProps{
    children: React.ReactNode;
}
const Center: React.FC<CenterProps> = ({children}) => {
    return (
        <section className="max-w-[352px] sm:max-w-[444px] md:max-w-[540px] lg:max-w-[720px] mx-auto">
            {children}
        </section>
    );
}
 
export default Center;