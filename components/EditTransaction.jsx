import TitleH3 from "./TitleH3";
import Button from "./Button";
import PencilIcon from "./icons/PencilIcon";
import TrashIcon from "./icons/TrashIcon";
import { useContext, useState } from "react";
import useFlashMessage from "@/hooks/useFlashMessage";
import { api, versionApi } from "@/lib/configApi";
import axios from "axios";
import { useRouter } from "next/router";
import { ModalContext } from "@/providers/ModalProvider";
import ToggleThemeOnIcon from "./icons/ToggleThemeOnIcon";
import ToggleThemeOffIcon from "./icons/ToggleThemeOffIcon";

const EditCategory = ({ transaction }) => {
    const { setFlashMessage } = useFlashMessage()
    const [isUpdating, setIsUpdating] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)
    const router = useRouter()
    const { toggleModal, setDataModal } = useContext(ModalContext)

    const updateTransaction = async (paid) => {
        setIsUpdating(true)
        let msgText;
        let msgType = 'success'
        const data = { paid }
        try {
            await axios.patch(`${api}/${versionApi}/transactions/id/${transaction?._id}`, data).then(response => {
                if (response?.data?.message?.type === "error") {
                    msgText = response?.data?.message?.data
                    msgType = response?.data?.message?.type
                } else {
                    msgText = response?.data?.message?.data
                    router.reload()
                    toggleModal()
                }
            })
        } catch (error) {
            msgText = error?.response?.data?.message?.data
            msgType = error?.response?.data?.message?.type
        }
        setFlashMessage(msgText, msgType)
        setIsUpdating(false)
    }

    const deleteTransaction = async () => {
        setIsDeleting(true)
        let msgText;
        let msgType = 'success'
        try {
            await axios.delete(`${api}/${versionApi}/transactions/id/${transaction?._id}`).then(response => {
                if (response?.data?.message?.type === "error") {
                    msgText = response?.data?.message?.data
                    msgType = response?.data?.message?.type
                } else {
                    msgText = response?.data?.message?.data
                    router.reload()
                    toggleModal()
                }
            })
        } catch (error) {
            msgText = error?.response?.data?.message?.data
            msgType = error?.response?.data?.message?.type
        }
        setFlashMessage(msgText, msgType)
        setIsDeleting(false)
    }

    return (
        <div className="flex flex-col text-sm">
            <TitleH3 text="Mais opções" className="" />
            <div className="flex flex-col items-start mt-[30px]">
                <div className="w-full">
                    {transaction?.type === "despesa" && (
                        <>
                            {transaction.paid ? (
                                <div className="flex items-center w-full justify-between ">
                                    <Button icon={<PencilIcon className="text-secondary dark:text-light" />} onClick={() => updateTransaction(transaction?.paid)} text={`Não paguei`} className={"text-secondary dark:text-light "} />
                                    <div onClick={() => updateTransaction(transaction?.paid)} className="cursor-pointer">
                                        {transaction.paid ? <ToggleThemeOnIcon /> : <ToggleThemeOffIcon />}
                                    </div>
                                </div>
                            ) :
                                (
                                    <div className="flex items-center w-full justify-between ">
                                        <Button icon={<PencilIcon className="text-secondary dark:text-light" />} onClick={() => updateTransaction(transaction?.paid)} text={`Já paguei`} className={"text-secondary dark:text-light "} />
                                        <div onClick={() => updateTransaction(transaction?.paid)} className="cursor-pointer">
                                            {transaction.paid ? <ToggleThemeOnIcon /> : <ToggleThemeOffIcon />}
                                        </div>
                                    </div>
                                )}
                        </>
                    )}
                    {transaction?.type === "receita" && (
                        <span className="rounded-full px-[5px] text-[10px] text-dark font-bold bg-success">recebido</span>
                    )}
                </div>

                <Button icon={<TrashIcon />} onClick={deleteTransaction} text={`${isDeleting ? "Excluindo..." : "Excluir movimentação"}`} className={"mt-[24px] text-red-400 "} />
            </div>
        </div>
    )
}

export default EditCategory;