import Image from "next/image";
import React from "react";

interface CategoryCardProps{
    text: string;
    img: string;
} 
const CategoryCard: React.FC<CategoryCardProps> = ({ text, img }) => {
    return (
        <div className="flex gap-1 items-center w-[76px] h-[76px]  rounded p-2 flex-col bg-secondary_less" >
            <Image width={30} height={30} alt="Imagem" src={img} />
            <h2 className="mt-[4px] text-[10px] tracking-wider leading-tight text-center">{text}</h2>
        </div>
    );
}
 
export default CategoryCard;