import { MouseEventHandler } from "react";

interface TitleH1Props{
    text: string;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button:React.FC<TitleH1Props> = ({ text, className, onClick }) => {
    return (
        <button onClick={onClick} className={`text-sm md:text-base h-[44px] rounded text-light ${className}`}>{text}</button>
    );
}
 
export default Button;