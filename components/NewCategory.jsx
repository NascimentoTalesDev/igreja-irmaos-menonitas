import { useContext, useState } from "react";
import TitleH3 from "./TitleH3";
import InputContainerModal from "@/components/InputContainerModal";
import AllCategories from "@/components/AllCategories";
import Button from "./Button";
import SelectContainer from "./SelectContainer";
import { ModalSecondContext } from "@/providers/ModalSecondProvider";

const NewCategory = () => {
    const {setDataModalSecond, toggleModalSecond} = useContext(ModalSecondContext)

    const [categoryName, setCategoryName] = useState()

    const categoriesType = ["Despesa", "Investimento", "Receita"]

    return (
        <div className="flex flex-col text-sm">
            <TitleH3 text="Nome da categoria" className="mt-[30px]" />
            <InputContainerModal required={true} className={"mt-[16px] bg-primary"}  classNameInput="bg-primary" value={categoryName} onChange={(ev) => setCategoryName(ev.target.value)} placeholder="Nome" />
            
            <TitleH3 text="Tipo da categoria" className="my-[16px]" />
            <SelectContainer required={true} data={categoriesType}  className={"mt-[16px]"} value={categoryName} onChange={(ev) => setCategoryName(ev.target.value)} placeholder="Selecione a categoria" />
            
            <TitleH3 text="Ícone da categoria" className="my-[16px]" />
            <div onClick={()=> {toggleModalSecond(), setDataModalSecond(<AllCategories />)}} className="w-full cursor-auto px-[10px] flex rounded items-center bg-secondary border-[0.1px] border-gray-500 h-[44px]">
                click para selecionar o ícone
            </div>

            <Button onClick={()=> {}} text="Cadastrar" className="bg-primary mt-[24px]" />
        </div>
    );
}
 
export default NewCategory;