import { ChangeEventHandler, KeyboardEventHandler, ReactNode, useState } from "react";
import EyeIconIcon from "./icons/EyeIcon";
import EyeSlashIcon from "./icons/EyeSlashIcon";

interface InputProps{
    text: ReactNode;
    placeholder: string;
    className?: string;
    classNameInput?: string;
    value: string;
    rows: number;
    cols: number;
    user?: boolean;
    required?: boolean;
    padlock?: boolean;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
} 

const Input: React.FC<InputProps> = ({ placeholder, className, classNameInput, value, onChange, cols, rows, required}) => {

    return (
        <div className="w-full">
            <div className={`flex items-center overflow-hidden justify-between rounded bg-mygray_less dark:bg-secondary border-[0.1px] border-gray-500 ${className}`}>
                <textarea cols={cols} rows={rows} value={value} onChange={onChange} placeholder={placeholder} className={`group w-full p-[10px] bg-mygray_less dark:bg-secondary h-full text-secondary dark:text-light tracking-wide text-sm md:text-base placeholder:text-mygray_more ${classNameInput}`}  required={required} />
            </div>
        </div>

    );
}
 
export default Input;