import { useContext, useState } from "react";
import TitleH3 from "./TitleH3";
import InputContainerModal from "@/components/InputContainerModal";
import AllCategories from "@/components/AllCategories";
import Button from "./Button";
import SelectContainer from "./SelectContainer";
import { ModalSecondContext } from "@/providers/ModalSecondProvider";
import Image from "next/image";
import ChevronRightIcon from "./icons/ChevronRightIcon";
import axios from "axios";
import useFlashMessage from "@/hooks/useFlashMessage";
import { api, versionApi } from "@/lib/configApi";
import { ModalContext } from "@/providers/ModalProvider";
import { useRouter } from "next/router";

const NewCategory = () => {
    const { setDataModalSecond, toggleModalSecond, info, setInfo } = useContext(ModalSecondContext)
    const { toggleModal, setDataModal } = useContext(ModalContext)
    const router = useRouter()
    const categoriesType = [
        {
            _id: 1,
            name: "Despesa"
        },
        {
            _id: 2,
            name: "Investimento"
        },
        {
            _id: 3,
            name: "Receita"
        }]

    const { setFlashMessage } = useFlashMessage()

    const [name, setName] = useState("")
    const [type, setType] = useState("")

    const [isSetting, setIsSetting] = useState(false)

    const saveNewCategory = async () => {
        setIsSetting(true)
        let msgText;
        let msgType = 'success'
        const data = { name, type, icon: info }
        try {
            await axios.post(`${api}/${versionApi}/categories`, data).then(response => {
                if (response?.data?.message?.type === "error") {
                    msgText = response?.data?.message?.data
                    msgType = response?.data?.message?.type
                } else {
                    msgText = response?.data?.message?.data
                    toggleModal()
                    setInfo("")
                    setDataModal("")
                    router.push("/dashboard/categories")
                }
            })
        } catch (error) {
            msgText = error?.response?.data?.message?.data
            msgType = error?.response?.data?.message?.type
        }
        setFlashMessage(msgText, msgType)
        setIsSetting(false)
    }

    return (
        <div className="flex flex-col text-sm">
            <TitleH3 text="Nome da categoria" className="mt-[30px]" />
            <InputContainerModal required={true} className={"mt-[16px] bg-mygray_less dark:bg-secondary"} classNameInput="bg-mygray_less dark:bg-secondary" value={name} onChange={(ev) => setName(ev.target.value)} placeholder="Nome" />

            <TitleH3 text="Tipo da categoria" className="my-[16px]" />
            <SelectContainer required={true} data={categoriesType} value={type} onchange={(ev) => setType(ev.target.value)} className={"mt-[16px]"} placeholder="Selecione a categoria" />

            <TitleH3 text="Ícone da categoria" className="my-[16px]" />
            <div onClick={() => { toggleModalSecond(), setDataModalSecond(<AllCategories />) }} className="w-full text-mygray_more dark:text-mygray_more cursor-pointer px-[10px] flex rounded items-center bg-mygray_less dark:bg-secondary border-[0.1px] border-gray-500 h-[44px]">
                {info ?
                    (
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center  gap-4">
                                <Image id={info} width={30} height={30} alt="Image" src={"/categories/" + info + ".png"} />
                                <span className="text-secondary dark:text-light">alterar ícone</span>
                            </div>
                            <ChevronRightIcon />
                        </div>

                    ) :
                    (
                        <span>click para selecionar o ícone</span>
                    )}
            </div>

            <Button onClick={saveNewCategory} text={`${isSetting ? "Cadastrando..." : "Cadastrar"}`} className={`mt-[24px] ${isSetting ? "bg-neutral-500" : "bg-primary"}`} />
        </div>
    );
}

export default NewCategory;