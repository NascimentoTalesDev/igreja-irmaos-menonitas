import Image from "next/image";
import Link from "next/link";
const LOGO = "/images/white-logo.png"

interface LogoProps{
    path?: string;
    cursor?: string;
}

const Logo:React.FC<LogoProps> = ({ path, cursor }) => {
    return (
        <Link href={path ? path : "" } className={`${cursor ? cursor : "cursor-pointer"}`}>
            <Image height={142} width={98} alt="" src={LOGO} />
        </Link>
    );
}
 
export default Logo;