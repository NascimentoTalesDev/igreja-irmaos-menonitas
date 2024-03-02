import { useContext } from "react";
import AddCardButton from "./AddCardButton";
import TitleH2 from "./TitleH2";
import Calculator from "./Calculator";
import { ModalSecondContext } from "@/providers/ModalSecondProvider";

const Add = () => {
    const {setDataModalSecond, toggleModalSecond} = useContext(ModalSecondContext)

    return (
        <div>
            <TitleH2 text="O que você quer adicionar" className="mb-[30px]" />
            <div className="flex flex-wrap gap-[16px]">
                <AddCardButton onClick={() => { toggleModalSecond(), setDataModalSecond(<Calculator option="Despesa"/>) }} className="border border-red-500" text="Despesa" icon="" />
                <AddCardButton onClick={() => { toggleModalSecond(), setDataModalSecond(<Calculator option="Receira"/>) }} className="border border-green-500" text="Receira" icon="" />
                <AddCardButton onClick={() => { toggleModalSecond(), setDataModalSecond(<Calculator option="Transferência"/>) }} className="border border-green-500" text="Transferência" icon="" />
                <AddCardButton onClick={() => { toggleModalSecond(), setDataModalSecond(<Calculator option="Rendimentos"/>) }} className="border border-green-500" text="Rendimentos" icon="" />
            </div>          
        </div>
    );
}
 
export default Add;