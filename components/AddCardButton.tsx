import React, { MouseEventHandler } from "react";
import PlusIcon from "./icons/PlusIcon";

interface AddCardButtonProps{
    onClick: MouseEventHandler<HTMLDivElement>;
    text: string;
    icon: string;
    className: string;
}

const AddCardButton: React.FC<AddCardButtonProps> = ({ onClick, text, icon, className }) => {
    return (
        <div onClick={onClick} className={`flex cursor-pointer justify-center items-center w-[76px] h-[76px] rounded p-2 flex-col sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] ${className}`}>
            {icon}
            <div className="leading-tight text-center font-bold text-secondary dark:text-light">
                <span className="text-[10px]">adicionar</span><br />
                <h2 className="text-[10px] text-center">{text}</h2>
            </div>
        </div>
    );
}
 
export default AddCardButton;