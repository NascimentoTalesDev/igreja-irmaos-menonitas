import CategoryCardButton from "@/components/CategoryCardButton";
import DefaultCategories from "@/components/DefaultCategories";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import TitleH2 from "@/components/TitleH2";

const Categories = () => {
    return (
        <Layout>
            <Title text="Categorias" className="mb-[24px]" />
            <CategoryCardButton />
            <TitleH2 text="Minhas Categorias" className="mt-[24px]" />
            <DefaultCategories />
            <TitleH2 text="Categorias padrões" className="mt-[24px]" />
            <DefaultCategories />
        </Layout>
    );
}

export default Categories;