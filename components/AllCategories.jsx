import { useContext } from "react";
import TitleH3 from "./TitleH3";
import { ModalSecondContext } from "@/providers/ModalSecondProvider";

const AllCategories = () => {
    const { toggleModalSecond, setInfo } = useContext(ModalSecondContext)

    return (
        <section>
            <TitleH3 className="text-center" text="Todas as categorias"/>
            

        </section>
    );
}
 
export default AllCategories;