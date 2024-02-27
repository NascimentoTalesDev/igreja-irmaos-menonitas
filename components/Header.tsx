import HamburgerIcon from "./icons/HamburgerIcon";

const Header = () => {
    return (
        <div className="fixed flex items-center justify-between h-[80px] w-full left-0 top-0 bg-secondary_more px-[15px]">
            <HamburgerIcon />
            <span className="text-light text-sm">Tales Santos</span>
        </div>
    );
}
 
export default Header;