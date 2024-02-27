import { ModalContext } from "@/providers/ModalProvider";
import React, { useContext } from "react";
import CloseIcon from "./icons/CloseIcon";

const ModalLayout = () => {
    const {showModal, dataModal, toggleModal} = useContext(ModalContext)

    return (
        <section className={`flex items-center backdrop-blur-[2px] justify-center bg-black_rgba absolute top-0 left-0 text-light  transition-all ${showModal ? "z-[999999999]" : "-z-[999999999]"} w-full h-full`}>
            <div className="bg-light dark:bg-secondary text-secondary dark:text-light rounded shadow-2xl min-h-[300px] w-[90%] max-w-[400px] z-[9999999999] relative p-[20px]">
                <div onClick={toggleModal} className="cursor-pointer w-fit absolute right-[10px] top-[15px]" >
                    <CloseIcon />
                </div>
                {dataModal}
            </div>
        </section>
    );
}
 
export default ModalLayout;
