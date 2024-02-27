import React, { MouseEventHandler } from "react";
import PlusIcon from "./icons/PlusIcon";

interface CategoryCardButtonProps{
    onClick: MouseEventHandler<HTMLDivElement>;
}

const CategoryCardButton: React.FC<CategoryCardButtonProps> = ({ onClick }) => {
    return (
        <div onClick={onClick} className="flex cursor-pointer justify-center items-center w-[76px] h-[76px] rounded p-2 flex-col bg-secondary_less" >
            <PlusIcon />
            <div className="leading-tight text-light">
                <span className="text-[10px] font-light">criar uma</span><br />
                <h2 className="text-[10px] text-center">categoria</h2>
            </div>
        </div>
    );
}
 
export default CategoryCardButton;