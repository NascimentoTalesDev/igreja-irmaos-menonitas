import { useContext, useEffect, useState } from "react";
import TitleH3 from "./TitleH3";
import UploadFiles from "./UploadFiles";
import { ModalSecondContext } from "@/providers/ModalSecondProvider";
import Image from "next/image";
import AllCategories from "./AllCategories";
import ChevronRightIcon from "./icons/ChevronRightIcon";
import ToggleThemeOnIcon from "./icons/ToggleThemeOnIcon";
import ToggleThemeOffIcon from "./icons/ToggleThemeOffIcon";
import Button from "./Button";
import CalculatorEdit from "@/components/CalculatorEdit";
import axios from "axios";
import { api, versionApi } from "@/lib/configApi";
import useFlashMessage from "@/hooks/useFlashMessage";
import { ModalThirdContext } from "@/providers/ModalThirdProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ChevronDownIcon from "./icons/ChevronDownIcon";
import ptBR from 'date-fns/locale/pt-BR';
import { getCurrentUser } from "@/helpers/getCurrentUser";
import formatName from "@/lib/formatName";
import formatLocalCurrency from "@/lib/formatLocalCurrency";
import sumNumbers from "@/lib/sumNumbers";

const EditCategory = ({ transaction }) => {
    const { setFlashMessage } = useFlashMessage()
    const [isSaving, setIsSaving] = useState(false)
    const { setDataModalSecond, toggleModalSecond, info, setInfo } = useContext(ModalSecondContext)
    const { infoThird, setInfoThird } = useContext(ModalThirdContext)
    const [startDate, setStartDate] = useState(new Date());
    const [doc, setDoc] = useState([])
    const [recurrent, setRecurrent] = useState(false)
    const [updateAll, setUpdateAll] = useState(false)
    const [paid, setPaid] = useState(false)
    const [user, setUser] = useState("")

    useEffect(()=>{
        let currentUser = getCurrentUser()
        setUser(currentUser)
    },[])

    const updateTransaction = async () => {
        setIsSaving(true)
        let msgText;
        let msgType = 'success'

        let name;
        let icon;
        if (info) {
            name = info?.childNodes[2].innerHTML
            icon = info?.childNodes[1]?.id
        }

        let accountValue;
        if (infoThird) {
            accountValue = infoThird?.join("");
        }

        const data = { type:transaction?.type, name, icon, date: startDate, doc, paid, accountValue, updateAll, hash: transaction?.hash }

        try {
            await axios.patch(`${api}/${versionApi}/transactions/id/${transaction?._id}?userId=${user?._id}`, data).then(response => {
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
        setIsSaving(false)
    }

    const MyContainerDate = ({ children }) => {
        return (
            <div className="absolute text-sm top-0 -left-5 px-[10px] bg-gray-100 border-[4px] rounded border-gray-200 " >
                {children}
            </div>
        );
    };

    useEffect(() => {
        setInfo("")
        setInfoThird("")
        setStartDate(transaction?.date)
        setDoc(transaction?.doc || [])
        setPaid(transaction?.paid)
    }, [])

    return (
        <div>
            {transaction?.type === "despesa" && (
                <>
                    <TitleH3 text="Nome por categoria" className="my-[5px]" />
                    <div onClick={() => { toggleModalSecond(), setDataModalSecond(<AllCategories />) }} className="w-full text-mygray_more dark:text-mygray_more cursor-pointer px-[10px] flex rounded items-center bg-gray-100 dark:bg-secondary border-[0.1px] border-gray-200 dark:border-gray-500 h-[44px]">
                        {info ?
                            (
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center  gap-4">
                                        <Image id={info} width={30} height={30} alt="Image" src={"/categories/" + info?.childNodes[1]?.id + ".png"} />
                                        <span className="text-secondary dark:text-light">{info?.childNodes[2]?.innerText}</span>
                                    </div>
                                    <ChevronRightIcon />
                                </div>

                            ) :
                            (
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center  gap-4">
                                        <Image id={transaction?.icon} width={30} height={30} alt="Image" src={"/categories/" + transaction?.icon + ".png"} />
                                        <span className="text-secondary dark:text-light">{formatName(transaction?.name)}</span>
                                    </div>
                                    <ChevronRightIcon />
                                </div>
                            )}
                    </div>

                    <TitleH3 text="Data" className="my-[5px]" />
                    <div className="w-[50%] h-[44px] rounded border border-gray-200 dark:border-gray-500 bg-gray-100 dark:bg-secondary overflow-hidden flex items-center justify-center">
                        <DatePicker calendarContainer={MyContainerDate} dateFormat="dd/MM/yyyy" locale={ptBR} className="custom-datepicker bg-transparent w-full mx-[10px]" selected={startDate} onChange={(date) => setStartDate(date)} />
                        <ChevronDownIcon className="w-4 h-4 mr-[8px]" />
                    </div>

                    <TitleH3 text="Comprovante" className="my-[5px]" />
                    <UploadFiles className={`flex gap-3 mb-[10px]`} files={doc} setFiles={setDoc} />
                    <div className={`flex mb-[10px] justify-between items-center ${recurrent ? "hidden " : "flex "}`}>
                        {paid ? 
                        (
                            <TitleH3 text="Já paguei" />
                        ):(
                            <TitleH3 text="Não paguei" />
                        )}
                        <button value={paid} onClick={() => setPaid(!paid)} >{paid ? <ToggleThemeOnIcon /> : <ToggleThemeOffIcon />}</button>
                    </div>
                    {transaction?.inInstallments && (
                        <div className={`flex mb-[10px] justify-between items-center ${recurrent ? "hidden " : "flex "}`}>
                            <span>Alterar todas as parcelas?</span>
                            <button value={updateAll} onClick={() => setUpdateAll(!updateAll)} >{updateAll ? <ToggleThemeOnIcon /> : <ToggleThemeOffIcon />}</button>
                        </div>
                    )}

                    <TitleH3 text="Valor" className="my-[5px]" />
                    <div onClick={() => { toggleModalSecond(), setDataModalSecond(<CalculatorEdit />) }} className="w-full text-mygray_more dark:text-light cursor-pointer px-[10px] flex rounded items-center bg-gray-100 dark:bg-secondary border-[0.1px] border-gray-200 dark:border-gray-500 h-[44px]">
                        <>
                            {infoThird ?
                                (
                                    <>
                                       <span>{formatLocalCurrency(sumNumbers(infoThird))}</span> 
                                    </>
                                ) : (
                                    <>
                                        <span>{transaction?.inInstallments ? formatLocalCurrency(transaction?.inInstallmentValue) : formatLocalCurrency(transaction?.accountValue)}</span>
                                    </>
                                )}
                        </>
                    </div>

                    <Button onClick={updateTransaction} text={`${isSaving ? "Atualizando..." : "Atualizar"}`} className={`mt-[24px] w-full ${isSaving ? "bg-neutral-500" : "bg-primary"}`} />
                </>
            )}
        </div>
    )
}

export default EditCategory;