import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import CategoryCardButton from "@/components/CategoryCardButton";
import CategoryOptions from "@/components/CategoryOptions";
import DefaultCategories from "@/components/DefaultCategories";
import Layout from "@/components/Layout";
import NewCategory from "@/components/NewCategory";
import Title from "@/components/Title";
import TitleH2 from "@/components/TitleH2";
import { ModalContext } from "@/providers/ModalProvider";
import { useContext } from "react";
import GridLayout from "@/components/GridLayout";
import CategoryCard from "@/components/CategoryCard";

const Categories = ({ categoriesDb }) => {
    const {setDataModal, toggleModal} = useContext(ModalContext)
    const categories = categoriesDb

    return (
        <Layout>
            <Title text="Categorias" className="mb-[24px]" />
            <CategoryCardButton onClick={()=> {toggleModal(), setDataModal(<NewCategory />)}} />
            {categories.length > 0 && (
                <>
                    <TitleH2 text="Minhas categorias" className="mt-[24px] mb-[14px]" />
                    <GridLayout>
                    {categories.map(category=> (
                        <CategoryCard onClick={()=> {toggleModal(), setDataModal(<CategoryOptions id={category?._id}/>)}} key={category._id} text={category.name} img={`/categories/${category.icon}.png`} />
                    ))}
                    </GridLayout>
                </>
            )}
            <TitleH2 text="Categorias padrões" className="mt-[24px]" />
            <DefaultCategories />
        </Layout>
    );
}

export default Categories;

export async function getServerSideProps(req) {
    await mongooseConnect()
    const categoriesDb = await Category.find({})
  
    return {
      props: {
        categoriesDb: JSON.parse(JSON.stringify(categoriesDb)),
      }
    }
  }