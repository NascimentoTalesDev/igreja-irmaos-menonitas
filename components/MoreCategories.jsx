import { useContext } from "react";
import CategoryCard from "./CategoryCard";
import TitleH3 from "./TitleH3";
import { ModalSecondContext } from "@/providers/ModalSecondProvider";
import GridLayout from "./GridLayout";

const MoreCategories = () => {
    const { toggleModalSecond, setInfo } = useContext(ModalSecondContext)

    return (
        <section>
            <TitleH3 className="text-center" text="Mais categorias"/>
            <GridLayout className="mt-[14px]">
                <CategoryCard id="acampamento-nova-vida" onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-gray-200 dark:bg-gray-600 bg-gray-100" img="/categories/acampamento-nova-vida.png" />
                <CategoryCard id="despesas-pastorais" onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-gray-200 dark:bg-gray-600 bg-gray-100" img="/categories/despesas-pastorais.png" />
                <CategoryCard id="dizimo-escolinha" onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-gray-200 dark:bg-gray-600 bg-gray-100" img="/categories/dizimo-escolinha.png" />
                <CategoryCard id="dizimo-igreja"onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-gray-200 dark:bg-gray-600 bg-gray-100" img="/categories/dizimo-igreja.png" />
                <CategoryCard id="energia-eletrica"onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-gray-200 dark:bg-gray-600 bg-gray-100" img="/categories/energia-eletrica.png" />
                <CategoryCard id="investimento"onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-gray-200 dark:bg-gray-600 bg-gray-100" img="/categories/investimento.png" />
                <CategoryCard id="lanches"onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-gray-200 dark:bg-gray-600 bg-gray-100" img="/categories/lanches.png" />
                <CategoryCard id="limpeza-patio"onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-gray-200 dark:bg-gray-600 bg-gray-100" img="/categories/limpeza-patio.png" />
                <CategoryCard id="manutencao"onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-gray-200 dark:bg-gray-600 bg-gray-100" img="/categories/manutencao.png" />
                <CategoryCard id="materiais-escolinhas"onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-gray-200 dark:bg-gray-600 bg-gray-100" img="/categories/materiais-escolinhas.png" />
                <CategoryCard id="oferta-extra"onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-gray-200 dark:bg-gray-600 bg-gray-100" img="/categories/oferta-extra.png" />
                <CategoryCard id="redizimo"onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-gray-200 dark:bg-gray-600 bg-gray-100" img="/categories/redizimo.png" />
                <CategoryCard id="salario-pastor"onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-gray-200 dark:bg-gray-600 bg-gray-100" img="/categories/salario-pastor.png" />
            </GridLayout>
        </section>
    );
}
 
export default MoreCategories;