import Image from "next/image";
import React from "react";

interface CategoryCardProps{
    text: string;
    img: string;
    className?: string;
} 
const CategoryCard: React.FC<CategoryCardProps> = ({ text, img, className }) => {
    return (
        <div className={`flex gap-1 items-center w-[76px] h-[76px] rounded p-2 flex-col ${className ? className :"bg-secondary_less"}`} >
            <Image width={30} height={30} alt="Image" src={img} />
            <h2 className="mt-[4px] text-[10px] tracking-wider leading-tight text-center">{text}</h2>
        </div>
    );
}
 
export default CategoryCard;