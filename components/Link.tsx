import Link from "next/link";

interface LinkItemProps{
    text: string;
    path: string;
    className?: string;
}

const LinkItem:React.FC<LinkItemProps> = ({ text, path, className }) => {
    return (
        <Link href={path} className={`text-light ${className}`}>
            {text}
        </Link>
    );
}
 
export default LinkItem;