import CategoryCardButton from "@/components/CategoryCardButton";
import DefaultCategories from "@/components/DefaultCategories";
import Layout from "@/components/Layout";
import NewCategory from "@/components/NewCategory";
import Title from "@/components/Title";
import TitleH2 from "@/components/TitleH2";
import { ModalContext } from "@/providers/ModalProvider";
import { useContext } from "react";

const Categories = () => {
    const {setDataModal, toggleModal} = useContext(ModalContext)

    return (
        <Layout>
            <Title text="Categorias" className="mb-[24px]" />
            <CategoryCardButton onClick={()=> {toggleModal(), setDataModal(<NewCategory />)}} />
            
            <TitleH2 text="Categorias padrões" className="mt-[24px]" />
            <DefaultCategories />
        </Layout>
    );
}

export default Categories;