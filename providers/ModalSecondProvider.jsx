import React, { createContext, useState } from "react";
export const ModalSecondContext = createContext({})

const ModalSecondContextProvider = ({ children }) => {
    const [showModalSecond, setShowModalSecond] = useState(false)
    const [dataModalSecond, setDataModalSecond] = useState("")

    const toggleModalSecond = () =>{
        setShowModalSecond(!showModalSecond);
    }

    return (
        <ModalSecondContext.Provider value={{ showModalSecond, toggleModalSecond, dataModalSecond, setDataModalSecond }} >
            {children}
        </ModalSecondContext.Provider>
    )
}

export default ModalSecondContextProvider;
