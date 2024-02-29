import Layout from "@/components/Layout";
import Title from "@/components/Title";
import Button from "@/components/Button";
import NewDocument from "@/components/NewDocument";
import PlusIcon from "@/components/icons/PlusIcon";
import { useContext } from "react";
import { ModalContext } from "@/providers/ModalProvider";

const Documents = () => {
  const { toggleModal, setDataModal } = useContext(ModalContext)
  return (
    <Layout>
      <div className="flex justify-between">
        <Title text="Documentos" className="mb-[24px]" />
        <Button icon={<PlusIcon className=" text-light w-[18px] h-[18px] " />} onClick={() => { toggleModal(), setDataModal(<NewDocument />) }} text={"Novo"} className="bg-primary gap-[2px] h-[40px] w-[80px]" />
      </div>
    </Layout>
  );
}

export default Documents;