import CategoryCard from "./CategoryCard";
import TitleH3 from "./TitleH3";

const AllCategories = () => {
    return (
        <section>
            <TitleH3 className="text-center" text="Todas as Categorias"/>
            <div className="grid grid-cols-4 md:grid-cols-5 gap-[16px]  pt-[30px] ">
                <CategoryCard className="cursor-pointer hover:bg-secondary_more transition-all bg-secondary" img="/categories/acampamento-nova-vida.png" text="Acampamento Nova Vida" />
                <CategoryCard className="cursor-pointer hover:bg-secondary_more transition-all bg-secondary" img="/categories/despesas-pastorais.png" text="Despesas Pastorais" />
                <CategoryCard className="cursor-pointer hover:bg-secondary_more transition-all bg-secondary" img="/categories/dizimo-escolinha.png" text="Dízimo Escolinha" />
                <CategoryCard className="cursor-pointer hover:bg-secondary_more transition-all bg-secondary" img="/categories/dizimo-igreja.png" text="Dízimo Igreja" />
                <CategoryCard className="cursor-pointer hover:bg-secondary_more transition-all bg-secondary" img="/categories/energia-eletrica.png" text="Energia Elétrica" />
                <CategoryCard className="cursor-pointer hover:bg-secondary_more transition-all bg-secondary" img="/categories/investimento.png" text="Investimento" />
                <CategoryCard className="cursor-pointer hover:bg-secondary_more transition-all bg-secondary" img="/categories/lanches.png" text="Lanches" />
                <CategoryCard className="cursor-pointer hover:bg-secondary_more transition-all bg-secondary" img="/categories/limpeza-patio.png" text="Limpeza Pátio" />
                <CategoryCard className="cursor-pointer hover:bg-secondary_more transition-all bg-secondary" img="/categories/manutencao.png" text="Manutencao" />
                <CategoryCard className="cursor-pointer hover:bg-secondary_more transition-all bg-secondary" img="/categories/materiais-escolinhas.png" text="Materiais Escolinhas" />
                <CategoryCard className="cursor-pointer hover:bg-secondary_more transition-all bg-secondary" img="/categories/oferta-extra.png" text="Oferta Extra" />
                <CategoryCard className="cursor-pointer hover:bg-secondary_more transition-all bg-secondary" img="/categories/redizimo.png" text="Redízimo" />
                <CategoryCard className="cursor-pointer hover:bg-secondary_more transition-all bg-secondary" img="/categories/salario-pastor.png" text="Salário Pastor" />
            </div>
        </section>
    );
}
 
export default AllCategories;