import TitleH3 from "./TitleH3";
import Button from "./Button";
import PencilIcon from "./icons/PencilIcon";
import TrashIcon from "./icons/TrashIcon";
import EditTransaction from "@/components/EditTransaction";
import { useContext, useEffect, useState } from "react";
import useFlashMessage from "@/hooks/useFlashMessage";
import { api, versionApi } from "@/lib/configApi";
import axios from "axios";
import { useRouter } from "next/router";
import { ModalThirdContext } from "@/providers/ModalThirdProvider";
import { ModalContext } from "@/providers/ModalProvider";
import { getCurrentUser } from "@/helpers/getCurrentUser";

const InfoTransaction = ({ transaction }) => {
    const { setFlashMessage } = useFlashMessage()
    const [isDeleting, setIsDeleting] = useState(false)
    const [isDeletingAll, setIsDeletingAll] = useState(false)
    const router = useRouter()
    const { toggleModalThird, setDataModalThird } = useContext(ModalThirdContext)
    const { toggleModal } = useContext(ModalContext)
    const [deleteAll, setDeleteAll] = useState(false)
    const [user, setUser] = useState("")
    
    console.log("transaction", transaction);
    
    useEffect(()=>{
        let currentUser = getCurrentUser()
        setUser(currentUser)
    },[])

    const deleteTransaction = async (deleteAll) => {
        if (deleteAll === true) {            
            setIsDeletingAll(true)
        }else{
            deleteAll = false
            setIsDeleting(true)
        }

        let msgText;
        let msgType = 'success'
        
        try {
            await axios.delete(`${api}/${versionApi}/transactions/id/${transaction?._id}?userId=${user?._id}&&deleteAll=${deleteAll}&&hash=${transaction?.hash}`).then(response => {
                if (response?.data?.message?.type === "error") {
                    msgText = response?.data?.message?.data
                    msgType = response?.data?.message?.type
                } else {
                    msgText = response?.data?.message?.data
                    // router.reload()
                    // toggleModal()
                }
            })
        } catch (error) {
            msgText = error?.response?.data?.message?.data
            msgType = error?.response?.data?.message?.type
        }
        setFlashMessage(msgText, msgType)
        setIsDeleting(false)
        setIsDeletingAll(false)
    }

    return (
        <div className="flex flex-col text-sm">
            <TitleH3 text="Mais opções" className="" />
            <div className="flex flex-col items-start mt-[30px]">
                <Button icon={<PencilIcon />} onClick={()=> {setDataModalThird(<EditTransaction transaction={transaction} />), toggleModalThird()}} text={`Editar movimentação`} className={"mt-[24px] text-light "} />
                <Button icon={<TrashIcon />} onClick={deleteTransaction} text={`${isDeleting ? "Excluindo..." : "Excluir esta movimentação"}`} className={"mt-[10px] text-red-400 "} />
                {transaction.inInstallmentsQtt > 1 && (
                    <Button icon={<TrashIcon />} onClick={()=> deleteTransaction(true)} text={`${isDeletingAll ? "Excluindo..." : "Excluir todas"}`} className={"mt-[10px] text-red-400 "} />
                )}
            </div>
        </div>
    );
}
 
export default InfoTransaction;