import CategoryCard from "./CategoryCard";
import GridLayout from "./GridLayout";

const DefaultCategories = () => {
    return (
        <GridLayout className="mt-[14px]">
            <CategoryCard className="bg-mygray_less sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] dark:bg-secondary_less" img="/categories/acampamento-nova-vida.png" text="Acampamento Nova Vida" />
            <CategoryCard className="bg-mygray_less sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] dark:bg-secondary_less" img="/categories/despesas-pastorais.png" text="Despesas Pastorais" />
            <CategoryCard className="bg-mygray_less sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] dark:bg-secondary_less" img="/categories/dizimo-escolinha.png" text="Dízimo Escolinha" />
            <CategoryCard className="bg-mygray_less sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] dark:bg-secondary_less" img="/categories/dizimo-igreja.png" text="Dízimo Igreja" />
            <CategoryCard className="bg-mygray_less sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] dark:bg-secondary_less" img="/categories/energia-eletrica.png" text="Energia Elétrica" />
            <CategoryCard className="bg-mygray_less sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] dark:bg-secondary_less" img="/categories/investimento.png" text="Investimento" />
            <CategoryCard className="bg-mygray_less sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] dark:bg-secondary_less" img="/categories/lanches.png" text="Lanches" />
            <CategoryCard className="bg-mygray_less sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] dark:bg-secondary_less" img="/categories/limpeza-patio.png" text="Limpeza Pátio" />
            <CategoryCard className="bg-mygray_less sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] dark:bg-secondary_less" img="/categories/manutencao.png" text="Manutencao" />
            <CategoryCard className="bg-mygray_less sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] dark:bg-secondary_less" img="/categories/materiais-escolinhas.png" text="Materiais Escolinhas" />
            <CategoryCard className="bg-mygray_less sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] dark:bg-secondary_less" img="/categories/oferta-extra.png" text="Oferta Extra" />
            <CategoryCard className="bg-mygray_less sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] dark:bg-secondary_less" img="/categories/redizimo.png" text="Redízimo" />
            <CategoryCard className="bg-mygray_less sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] dark:bg-secondary_less" img="/categories/salario-pastor.png" text="Salário Pastor" />
        </GridLayout>
    );
}
 
export default DefaultCategories;