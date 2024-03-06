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

const InfoAdd = ({ valueCalc, option }) => {
    const [date, setDate] = useState("")
    const [doc, setDoc] = useState([])
    const { setDataModalSecond, toggleModalSecond, info, setInfo } = useContext(ModalSecondContext)

    const [inInstallments, setInInstallments] = useState(false)
    const [InInstallmentsQtt, setInInstallmentsQtt] = useState(0)
    const [recurrent, setRecurrent] = useState(false)

    const [isSaving, setIsSaving] = useState("")   
    const valordaconta =  valueCalc?.join("");

    function cadastrar() {
        const data = {valordaconta, date, doc, inInstallments, recurrent, InInstallmentsQtt}
        console.log(data);
        
    }
    
    return (
        <div>
            {valordaconta}{option}
            <TitleH3 text="Nome por categoria" className="my-[16px]" />
            <div onClick={() => { toggleModalSecond(), setDataModalSecond(<AllCategories />) }} className="w-full text-mygray_more dark:text-mygray_more cursor-pointer px-[10px] flex rounded items-center bg-gray-100 dark:bg-secondary border-[0.1px] border-gray-500 h-[44px]">
                {info ?
                    (
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center  gap-4">
                                <Image id={info} width={30} height={30} alt="Image" src={"/categories/" + info + ".png"} />
                                <span className="text-secondary dark:text-light">alterar ícone{info?.text}</span>
                            </div>
                            <ChevronRightIcon />
                        </div>

                    ) :
                    (
                        <span>click para selecionar o ícone</span>
                    )}
            </div>

            <TitleH3 text="Data" />
            <div className="w-full my-[5px]">
                <div className={`px-[10px] flex items-center justify-between h-[44px] rounded bg-gray-100 dark:bg-secondary border-[0.1px] border-gray-200 dark:border-gray-500`}>
                    <input value={date} onChange={(ev) => setDate(ev.target.value)} className="custom-input w-[50%] bg-gray-100 dark:bg-secondary h-full text-secondary dark:text-light tracking-wide text-sm md:text-base placeholder:text-placeholder" type="date" name="date" id="date" />
                </div>
            </div>

            <TitleH3 text="Comprovante" className="mb-[10px]" />
            <UploadFiles className={`flex gap-3 mb-[10px]`} files={doc} setFiles={setDoc} />

            <div className={`flex mb-[10px] justify-between items-center ${recurrent ? "hidden " : "flex "}`}>
                <span>É parcelado?</span>
                <button onClick={(ev) => setInInstallments(!inInstallments)}>{inInstallments ? <ToggleThemeOnIcon /> : <ToggleThemeOffIcon />}</button>
            </div>
            {inInstallments && (
                <InInstallmentsPage onChange={(ev)=> setInInstallmentsQtt(ev.target.value)} />
            )}

            <div className={`flex mb-[10px] justify-between items-center ${inInstallments ? "hidden" : " flex"}`}>
                <span>É recorrente?</span>
                <button onClick={(ev) => setRecurrent(!recurrent)}>{recurrent ? <ToggleThemeOnIcon /> : <ToggleThemeOffIcon />}</button>
            </div>
            {recurrent && (
                <div>Selecione a recorrência</div>
            )}

            <Button onClick={cadastrar} text={`${isSaving ? "Cadastrando..." : "Cadastrar"}`} className={`mt-[24px] w-full ${isSaving ? "bg-neutral-500" : "bg-primary"}`} />
        </div>

    );
}

export default InfoAdd;