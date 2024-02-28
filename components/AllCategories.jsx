import { useContext } from "react";
import CategoryCard from "./CategoryCard";
import TitleH3 from "./TitleH3";
import { ModalSecondContext } from "@/providers/ModalSecondProvider";

const AllCategories = () => {
    const { toggleModalSecond, setInfo } = useContext(ModalSecondContext)

    return (
        <section>
            <TitleH3 className="text-center" text="Mais categorias"/>
            <div className="grid grid-cols-4 md:grid-cols-5 gap-[16px]  pt-[30px] ">
                <CategoryCard id="acampamento-nova-vida" onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-mygray_more dark:bg-gray-600 transition-all " img="/categories/acampamento-nova-vida.png" />
                <CategoryCard id="despesas-pastorais" onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-mygray_more dark:bg-gray-600 transition-all bg-mygray_less" img="/categories/despesas-pastorais.png" />
                <CategoryCard id="dizimo-escolinha" onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-mygray_more dark:bg-gray-600 transition-all bg-mygray_less" img="/categories/dizimo-escolinha.png" />
                <CategoryCard id="dizimo-igreja"onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-mygray_more dark:bg-gray-600 transition-all bg-mygray_less" img="/categories/dizimo-igreja.png" />
                <CategoryCard id="energia-eletrica"onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-mygray_more dark:bg-gray-600 transition-all bg-mygray_less" img="/categories/energia-eletrica.png" />
                <CategoryCard id="investimento"onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-mygray_more dark:bg-gray-600 transition-all bg-mygray_less" img="/categories/investimento.png" />
                <CategoryCard id="lanches"onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-mygray_more dark:bg-gray-600 transition-all bg-mygray_less" img="/categories/lanches.png" />
                <CategoryCard id="limpeza-patio"onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-mygray_more dark:bg-gray-600 transition-all bg-mygray_less" img="/categories/limpeza-patio.png" />
                <CategoryCard id="manutencao"onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-mygray_more dark:bg-gray-600 transition-all bg-mygray_less" img="/categories/manutencao.png" />
                <CategoryCard id="materiais-escolinhas"onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-mygray_more dark:bg-gray-600 transition-all bg-mygray_less" img="/categories/materiais-escolinhas.png" />
                <CategoryCard id="oferta-extra"onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-mygray_more dark:bg-gray-600 transition-all bg-mygray_less" img="/categories/oferta-extra.png" />
                <CategoryCard id="redizimo"onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-mygray_more dark:bg-gray-600 transition-all bg-mygray_less" img="/categories/redizimo.png" />
                <CategoryCard id="salario-pastor"onClick={(ev)=> {toggleModalSecond(), setInfo(ev.target.id)}} className="cursor-pointer hover:bg-mygray_more dark:bg-gray-600 transition-all bg-mygray_less" img="/categories/salario-pastor.png" />
            </div>
        </section>
    );
}
 
export default AllCategories;