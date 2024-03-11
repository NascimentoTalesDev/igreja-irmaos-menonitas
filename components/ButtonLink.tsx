import Link from "next/link";
import { MouseEventHandler } from "react";

interface ButtonLinkProps{
    text: string;
    path: string;
    className?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement> | undefined,
}

const ButtonLink:React.FC<ButtonLinkProps> = ({ text, path, className, onClick }) => {
    return (
        <Link onClick={onClick} href={path} className={`flex text-sm md:text-base rounded justify-center items-center text-light font-bold ${className}`}>
            {text}
        </Link>
    );
}
 
export default ButtonLink;