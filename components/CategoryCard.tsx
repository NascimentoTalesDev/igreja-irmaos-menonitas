import Image from "next/image";
import React, { MouseEventHandler } from "react";
import CloseIcon from "./icons/CloseIcon";

interface CategoryCardProps{
    text?: string;
    img: string;
    className?: string;
    id?: string;
    onClick?: MouseEventHandler<HTMLDivElement> | undefined;
} 

const CategoryCard: React.FC<CategoryCardProps> = ({ text, img, className, onClick, id }) => {
    return (
        <div id={id} onClick={onClick} className={`relative flex gap-1 items-center justify-center w-[76px] h-[76px] rounded p-2 flex-col bg-mygray_less dark:bg-secondary_less ${className}`} >
            <Image id={id} width={30} height={30} alt="Image" src={img} />
            {text && (
                <h2 className="mt-[4px] text-[10px] tracking-wider min-h-[20px] leading-tight text-center text-secondary dark:text-light">{text}</h2>
            )}
        </div>
    );
}
 
export default CategoryCard;