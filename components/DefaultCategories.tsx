import CategoryCard from "./CategoryCard";
import GridLayout from "./GridLayout";

const DefaultCategories = () => {
    return (
        <GridLayout className="mt-[14px]">
            <CategoryCard img="/categories/acampamento-nova-vida.png" text="Acampamento Nova Vida" />
            <CategoryCard img="/categories/despesas-pastorais.png" text="Despesas Pastorais" />
            <CategoryCard img="/categories/dizimo-escolinha.png" text="Dízimo Escolinha" />
            <CategoryCard img="/categories/dizimo-igreja.png" text="Dízimo Igreja" />
            <CategoryCard img="/categories/energia-eletrica.png" text="Energia Elétrica" />
            <CategoryCard img="/categories/investimento.png" text="Investimento" />
            <CategoryCard img="/categories/lanches.png" text="Lanches" />
            <CategoryCard img="/categories/limpeza-patio.png" text="Limpeza Pátio" />
            <CategoryCard img="/categories/manutencao.png" text="Manutencao" />
            <CategoryCard img="/categories/materiais-escolinhas.png" text="Materiais Escolinhas" />
            <CategoryCard img="/categories/oferta-extra.png" text="Oferta Extra" />
            <CategoryCard img="/categories/redizimo.png" text="Redízimo" />
            <CategoryCard img="/categories/salario-pastor.png" text="Salário Pastor" />
        </GridLayout>
    );
}
 
export default DefaultCategories;