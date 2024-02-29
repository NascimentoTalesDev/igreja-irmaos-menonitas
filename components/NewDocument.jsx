import { useContext, useEffect, useState } from "react";
import TitleH3 from "./TitleH3";
import InputContainerModal from "@/components/InputContainerModal";
import Button from "./Button";
import SelectContainer from "./SelectContainer";
import axios from "axios";
import useFlashMessage from "@/hooks/useFlashMessage";
import { api, versionApi } from "@/lib/configApi";
import { useRouter } from "next/router";
import TitleH2 from "./TitleH2";
import { ModalContext } from "@/providers/ModalProvider";
import { getCurrentUser } from "@/helpers/getCurrentUser"

const NewDocument = () => {
    const { setFlashMessage } = useFlashMessage()
    const { toggleModal, setDataModal } = useContext(ModalContext)
    const router = useRouter()

    const [user, setUser] = useState("")

    useEffect(()=>{
        let currentUser = getCurrentUser()
        setUser(currentUser)
    },[])

    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [doc, setDoc] = useState("")
    
    const [isSaving, setIsSaving] = useState(false)

    const saveNewDocument = async () => {
        setIsSaving(true)
        let msgText;
        let msgType = 'success'
        const data = { name, date, description, doc }
        console.log(data);

        try {
            await axios.post(`${api}/${versionApi}/documents?userId=${user?._id}`, data).then(response => {
                if (response?.data?.message?.type === "error") {
                    msgText = response?.data?.message?.data
                    msgType = response?.data?.message?.type
                } else {
                    msgText = response?.data?.message?.data
                    toggleModal()
                    setDataModal("")
                    router.push("/dashboard/documents")
                }
            })
        } catch (error) {
            msgText = error?.response?.data?.message?.data
            msgType = error?.response?.data?.message?.type
        }
        setFlashMessage(msgText, msgType)
        setIsSaving(false)
    }

    return (
        <div className="flex flex-col text-sm">
            <TitleH2 text="Criar Novo usuário" className="mb-[24px]" />

            <TitleH3 text="Nome" />
            <InputContainerModal required={true} className={"my-[10px] bg-mygray_less dark:bg-secondary"}  classNameInput="bg-mygray_less dark:bg-secondary" value={name} onChange={(ev) => setName(ev.target.value)} placeholder="Nome" />
                        
            <TitleH3 text="Data" />
            <div className="w-full">
                <div className={`px-[10px] flex items-center justify-between h-[44px] rounded bg-mygray_less dark:bg-secondary border-[0.1px] border-gray-500`}>
                    <input value={date} onChange={(ev)=> setDate(ev.target.value)} className="custom-input w-full bg-mygray_less dark:bg-secondary h-full text-secondary dark:text-light tracking-wide text-sm md:text-base placeholder:text-mygray_more" type="date" name="date" id="date" />    
                </div>    
            </div>

            <TitleH3 text="Descrição" />
            <InputContainerModal required={true} className={"my-[10px] bg-mygray_less dark:bg-secondary"}  classNameInput="bg-mygray_less dark:bg-secondary" value={description} onChange={(ev) => setDescription(ev.target.value)} placeholder="Nome" />
        

            <Button onClick={saveNewDocument} text={`${isSaving ? "Salvando..." : "Salvar"}`} className={`mt-[24px] ${isSaving ? "bg-neutral-500" : "bg-primary"}`} />
        </div>
    );
}
 
export default NewDocument;

