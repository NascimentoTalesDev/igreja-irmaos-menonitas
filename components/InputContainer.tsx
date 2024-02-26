import { ChangeEventHandler, ReactNode, useState } from "react";
import UserIcon from "./icons/UserIcon";
import PadlockIcon from "./icons/PadlockIcon";
import EyeIconIcon from "./icons/EyeIcon";
import EyeSlashIcon from "./icons/EyeSlashIcon";

interface InputProps{
    text: ReactNode;
    placeholder: string;
    className?: string;
    value: string;
    type?: string;
    look?: boolean;
    user?: boolean;
    padlock?: boolean;
    onChange: ChangeEventHandler<HTMLInputElement> | undefined;
} 

const Input: React.FC<InputProps> = ({text, user, padlock, placeholder, className, value, onChange, type, look}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full">
            <div className={`flex items-center justify-between h-[44px] px-[10px] rounded bg-secondary_less ${className}`}>
                {user && (
                    <UserIcon />
                )}
                {padlock && (
                    <PadlockIcon />
                )}
                <input type={look ? `${isOpen ? "text" : "password"}` : `${type}`} value={value} onChange={onChange} placeholder={placeholder} className="w-full bg-secondary_less px-[10px] text-light tracking-wide" />
                {look && (
                    <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                        {isOpen ? (
                            <div>
                                <EyeIconIcon />
                            </div>
                        ) : (
                            <div>
                                <EyeSlashIcon />
                        </div>
                        )}
                    </div>
                )}
            </div>
        </div>

    );
}
 
export default Input;