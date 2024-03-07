import { useContext, useState } from "react";
import TitleH3 from "./TitleH3";
import UploadFiles from "./UploadFiles";
import { ModalSecondContext } from "@/providers/ModalSecondProvider";
import Image from "next/image";
import AllCategories from "./AllCategories";
import ChevronRightIcon from "./icons/ChevronRightIcon";
import ToggleThemeOnIcon from "./icons/ToggleThemeOnIcon";
import ToggleThemeOffIcon from "./icons/ToggleThemeOffIcon";
import Button from "./Button";
import InInstallmentsPage from "./InInstallmentsPage";
import axios from "axios";
import { api, versionApi } from "@/lib/configApi";
import useFlashMessage from "@/hooks/useFlashMessage";
import { ModalThirdContext } from "@/providers/ModalThirdProvider";
import { ModalContext } from "@/providers/ModalProvider";

const InfoAdd = ({ valueCalc, type }) => {
    const { setFlashMessage } = useFlashMessage()
    const { setDataModalSecond, toggleModalSecond, info, setInfo } = useContext(ModalSecondContext)
    const { setDataModalThird, toggleModalThird } = useContext(ModalThirdContext)
    const { toggleModal } = useContext(ModalContext)

    const accountValue = valueCalc?.join("");
    const [date, setDate] = useState("")
    const [doc, setDoc] = useState([])

    const [inInstallmentsQtt, setInInstallmentsQtt] = useState(0)

    const [inInstallments, setInInstallments] = useState(false)

    const [recurrent, setRecurrent] = useState(false)

    const [paid, setPaid] = useState(false)

    const [isSaving, setIsSaving] = useState(false)

    const saveTransaction = async () => {
        setIsSaving(true)

        let msgText;
        let msgType = 'success'
        let name;
        let icon;

        if (info) {
            name = info?.childNodes[2]?.innerText;
            icon = info?.childNodes[1]?.id
        }

        const data = { name, icon, type, accountValue, date, doc, inInstallments, recurrent, inInstallmentsQtt, paid }

        try {
            await axios.post(`${api}/${versionApi}/transactions`, data).then(response => {
                if (response?.data?.message?.type === "error") {
                    msgText = response?.data?.message?.data
                    msgType = response?.data?.message?.type
                } else {
                    msgText = response?.data?.message?.data
                    setDataModalThird("")
                    setInfo("")
                    toggleModalThird()
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
    console.log(type);
    return (
        <div>
            {type === "Despesa" && (
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
                                <span>click para selecionar o ícone</span>
                            )}
                    </div>

                    <TitleH3 text="Data" className="my-[5px]" />
                    <div className="w-full">
                        <div className={`px-[10px] flex items-center justify-between h-[44px] rounded bg-gray-100 dark:bg-secondary border-[0.1px] border-gray-200 dark:border-gray-500`}>
                            <input value={date} onChange={(ev) => setDate(ev.target.value)} className="custom-input w-[50%] bg-gray-100 dark:bg-secondary h-full text-secondary dark:text-light tracking-wide text-sm md:text-base placeholder:text-placeholder" type="date" name="date" id="date" />
                        </div>
                    </div>

                    <TitleH3 text="Comprovante" className="my-[5px]" />
                    <UploadFiles className={`flex gap-3 mb-[10px]`} files={doc} setFiles={setDoc} />

                    <div className={`flex mb-[10px] justify-between items-center ${recurrent ? "hidden " : "flex "}`}>
                        <span>É parcelado?</span>
                        <button onClick={(ev) => setInInstallments(!inInstallments)}>{inInstallments ? <ToggleThemeOnIcon /> : <ToggleThemeOffIcon />}</button>
                    </div>
                    {inInstallments && (
                        <InInstallmentsPage onChange={(ev) => setInInstallmentsQtt(ev.target.value)} />
                    )}

                    <div className={`flex mb-[10px] justify-between items-center ${inInstallments ? "hidden" : " flex"}`}>
                        <span>É recorrente?</span>
                        <button onClick={(ev) => setRecurrent(!recurrent)}>{recurrent ? <ToggleThemeOnIcon /> : <ToggleThemeOffIcon />}</button>
                    </div>
                    {recurrent && (
                        <div>Selecione a recorrência</div>
                    )}

                    {type === "Despesa" && (
                        <div className={`flex mb-[10px] justify-between items-center`}>
                            <span>Já está pago?</span>
                            <button onClick={(ev) => setPaid(!paid)}>{paid ? <ToggleThemeOnIcon /> : <ToggleThemeOffIcon />}</button>
                        </div>
                    )}
                </>
            )}

            {type === "Receita" && (
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
                                <span>click para selecionar o ícone</span>
                            )}
                    </div>

                    <TitleH3 text="Data" className="my-[5px]" />
                    <div className="w-full">
                        <div className={`px-[10px] flex items-center justify-between h-[44px] rounded bg-gray-100 dark:bg-secondary border-[0.1px] border-gray-200 dark:border-gray-500`}>
                            <input value={date} onChange={(ev) => setDate(ev.target.value)} className="custom-input w-[50%] bg-gray-100 dark:bg-secondary h-full text-secondary dark:text-light tracking-wide text-sm md:text-base placeholder:text-placeholder" type="date" name="date" id="date" />
                        </div>
                    </div>

                    <TitleH3 text="Comprovante" className="my-[5px]" />
                    <UploadFiles className={`flex gap-3 mb-[10px]`} files={doc} setFiles={setDoc} />
                                
                </>
            )}
            <Button onClick={saveTransaction} text={`${isSaving ? "Cadastrando..." : "Cadastrar"}`} className={`mt-[24px] w-full ${isSaving ? "bg-neutral-500" : "bg-primary"}`} />
        </div>

    );
}

export default InfoAdd;