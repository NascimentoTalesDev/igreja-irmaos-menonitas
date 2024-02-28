import { ChangeEventHandler, KeyboardEventHandler, ReactNode, useState } from "react";
import UserIcon from "./icons/UserIcon";
import PadlockIcon from "./icons/PadlockIcon";
import EyeIconIcon from "./icons/EyeIcon";
import EyeSlashIcon from "./icons/EyeSlashIcon";

interface InputProps{
    text: ReactNode;
    placeholder: string;
    className?: string;
    classNameInput?: string;
    value: string;
    type?: string;
    look?: boolean;
    user?: boolean;
    required?: boolean;
    padlock?: boolean;
    onChange: ChangeEventHandler<HTMLInputElement> | undefined;
    onKeyUp?: KeyboardEventHandler<HTMLInputElement> | undefined;
} 

const Input: React.FC<InputProps> = ({text, user, padlock, placeholder, className, classNameInput, value, onChange, onKeyUp, type, look, required}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full">
            <div className={`px-[10px] flex items-center justify-between h-[44px] rounded bg-mygray_less dark:bg-secondary border-[0.1px] border-gray-500 ${className}`}>
                <input onKeyUp={onKeyUp} type={look ? `${isOpen ? "text" : "password"}` : `${type}`} value={value} onChange={onChange} placeholder={placeholder} className={`group w-full bg-mygray_less dark:bg-secondary h-full text-secondary dark:text-light tracking-wide text-sm md:text-base placeholder:text-mygray_more ${classNameInput}`}  required={required} />
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