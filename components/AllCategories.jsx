import { useContext, useEffect, useState } from "react";
import TitleH3 from "./TitleH3";
import { ModalSecondContext } from "@/providers/ModalSecondProvider";
import CategoryCard from "./CategoryCard";
import { api, versionApi } from "@/lib/configApi";
import axios from "axios";
import formatName from "@/lib/formatName";

const AllCategories = () => {
    const { toggleModalSecond, setInfo } = useContext(ModalSecondContext)
    const [myCategories, setMyCategories] = useState()

    useEffect(()=>{
        axios.get(`${api}/${versionApi}/categories`).then(response=> {
            setMyCategories(response.data);
        })
    },[myCategories])

    return (
        <section>
            <TitleH3 className="text-center mb-[30px]" text="Todas as categorias" />
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-[16px]">
                <CategoryCard id="acampamento-nova-vida" onClick={(ev) => { toggleModalSecond(), setInfo(ev.target.offsetParent) }} className="cursor-pointer hover:bg-gray-200 bg-gray-100  dark:hover:bg-secondary dark:bg-secondary_less" img="/categories/acampamento-nova-vida.png" text="Acampamento Nova Vida" />
                <CategoryCard id="despesas-pastorais"  onClick={(ev) => { toggleModalSecond(), setInfo(ev.target.offsetParent) }} className="cursor-pointer hover:bg-gray-200 bg-gray-100  dark:hover:bg-secondary dark:bg-secondary_less" img="/categories/despesas-pastorais.png" text="Despesas Pastorais" />
                <CategoryCard id="dizimo-escolinha"  onClick={(ev) => { toggleModalSecond(), setInfo(ev.target.offsetParent) }} className="cursor-pointer hover:bg-gray-200 bg-gray-100  dark:hover:bg-secondary dark:bg-secondary_less" img="/categories/dizimo-escolinha.png" text="Dízimo Escolinha" />
                <CategoryCard id="dizimo-igreja"  onClick={(ev) => { toggleModalSecond(), setInfo(ev.target.offsetParent) }} className="cursor-pointer hover:bg-gray-200 bg-gray-100  dark:hover:bg-secondary dark:bg-secondary_less" img="/categories/dizimo-igreja.png" text="Dízimo Igreja" />
                <CategoryCard id="energia-eletrica"  onClick={(ev) => { toggleModalSecond(), setInfo(ev.target.offsetParent) }} className="cursor-pointer hover:bg-gray-200 bg-gray-100  dark:hover:bg-secondary dark:bg-secondary_less" img="/categories/energia-eletrica.png" text="Energia Elétrica" />
                <CategoryCard id="investimento" onClick={(ev) => { toggleModalSecond(), setInfo(ev.target.offsetParent) }} className="cursor-pointer hover:bg-gray-200 bg-gray-100  dark:hover:bg-secondary dark:bg-secondary_less" img="/categories/investimento.png" text="Investimento" />
                <CategoryCard id="lanches" onClick={(ev) => { toggleModalSecond(), setInfo(ev.target.offsetParent) }} className="cursor-pointer hover:bg-gray-200 bg-gray-100  dark:hover:bg-secondary dark:bg-secondary_less" img="/categories/lanches.png" text="Lanches" />
                <CategoryCard id="limpeza-patio"  onClick={(ev) => { toggleModalSecond(), setInfo(ev.target.offsetParent) }} className="cursor-pointer hover:bg-gray-200 bg-gray-100  dark:hover:bg-secondary dark:bg-secondary_less" img="/categories/limpeza-patio.png" text="Limpeza Pátio" />
                <CategoryCard id="manutencao" onClick={(ev) => { toggleModalSecond(), setInfo(ev.target.offsetParent) }} className="cursor-pointer hover:bg-gray-200 bg-gray-100  dark:hover:bg-secondary dark:bg-secondary_less" img="/categories/manutencao.png" text="Manutencao" />
                <CategoryCard id="materiais-escolinhas"  onClick={(ev) => { toggleModalSecond(), setInfo(ev.target.offsetParent) }} className="cursor-pointer hover:bg-gray-200 bg-gray-100  dark:hover:bg-secondary dark:bg-secondary_less" img="/categories/materiais-escolinhas.png" text="Materiais Escolinhas" />
                <CategoryCard id="oferta-extra"  onClick={(ev) => { toggleModalSecond(), setInfo(ev.target.offsetParent) }} className="cursor-pointer hover:bg-gray-200 bg-gray-100  dark:hover:bg-secondary dark:bg-secondary_less" img="/categories/oferta-extra.png" text="Oferta Extra" />
                <CategoryCard id="redizimo" onClick={(ev) => { toggleModalSecond(), setInfo(ev.target.offsetParent) }} className="cursor-pointer hover:bg-gray-200 bg-gray-100  dark:hover:bg-secondary dark:bg-secondary_less" img="/categories/redizimo.png" text="Redízimo" />
                <CategoryCard id="salario-pastor"  onClick={(ev) => { toggleModalSecond(), setInfo(ev.target.offsetParent) }} className="cursor-pointer hover:bg-gray-200 bg-gray-100  dark:hover:bg-secondary dark:bg-secondary_less" img="/categories/salario-pastor.png" text="Salário Pastor" />
                {myCategories?.length > 0 && myCategories.map(category => (
                    <CategoryCard key={category?._id} id={category?.icon}  onClick={(ev) => { toggleModalSecond(), setInfo(ev.target.offsetParent) }} className="cursor-pointer bg-gray-100 dark:bg-secondary_less" img={`/categories/${category?.icon}.png`} text={formatName(category?.name)} />
                ))}
            </div>
        </section>
    );
}

export default AllCategories;