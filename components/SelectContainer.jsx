import Image from "next/image";
import { useState } from "react";

const SelectContainer= ({ data, placeholder, icon }) => {
    const [newColor, setNewColor] = useState(false)
    
    function toggleColor(ev) {
        if (ev) {
            setNewColor(true)
        }else{
            setNewColor(false)
        }
    }
    return (
        <div className="w-full flex rounded items-center bg-secondary border-[0.1px] border-gray-500 h-[44px]">
            <select className={`bg-secondary pl-[5px] mr-[10px] w-full ${newColor ? 'text-light' : 'text-placeholder'}`} onChange={(ev) => toggleColor(ev.target.value)}>
                <option value="" className="text-light" >{placeholder}</option>
                {data.length > 0 && data.map(item => {
                    return(
                        <option className="text-light" key={item} value={item}>{item}</option>
                    )
                })}
            </select>
        </div>
    );
}
 
export default SelectContainer;