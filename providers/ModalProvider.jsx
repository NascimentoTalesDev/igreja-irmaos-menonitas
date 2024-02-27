import React, { createContext, useState } from "react";
export const ModalContext = createContext({})

const ModalContextProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false)
    const [dataModal, setDataModal] = useState("")

    const toggleModal = () =>{
        setShowModal(!showModal);
    }

    return (
        <ModalContext.Provider value={{ showModal, toggleModal, dataModal, setDataModal }} >
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider;
