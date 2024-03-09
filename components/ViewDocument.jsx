import formatName from "@/lib/formatName";
import Title from "./Title";
import TitleH2 from "./TitleH2";
import TitleH3 from "./TitleH3";
import Image from "next/image";
import Link from "next/link";
import formatFirstWordToUpperCase from "@/lib/formatFirstWordToUpperCase";
import { api, versionApi } from "@/lib/configApi";
import useFlashMessage from "@/hooks/useFlashMessage";
import { useState } from "react";
import axios from "axios";

const ViewDocument = ({ document }) => {
    const { setFlashMessage } = useFlashMessage()
    const [ isDownloading, setIsDownloading ] = useState()

    const download = async (doc) => {
        console.log(doc);
        setIsDownloading(true)

        let msgText;
        let msgType = 'success'
        const data = { doc }

        try {
            await axios.get(`${api}/${versionApi}/download`, data).then(response => {
                if (response?.data?.message?.type === "error") {
                    msgText = response?.data?.message?.data
                    msgType = response?.data?.message?.type
                } else {
                    msgText = response?.data?.message?.data
                }
            })
        } catch (error) {
            msgText = error?.response?.data?.message?.data
            msgType = error?.response?.data?.message?.type
        }
        setFlashMessage(msgText, msgType)
        setIsDownloading(false)
    }

    return (
        <div className="w-full h-full ">
            <Title className="text-center text-secondary dark:text-light " text={formatName(document?.name)} />
            <div className="flex gap-[10px] mt-[30px] items-center ">
                <TitleH2 text="Data:" />
                <TitleH3 text={new Date(document?.date).toLocaleDateString()} />
            </div>
            <div className="flex gap-[10px] my-[10px] items-center">
                <TitleH2 text="Descrição:" />
                <TitleH3 text={formatFirstWordToUpperCase(document?.description)} />
            </div>
            <div className="text-right text-sm p-2">
                <button onClick={() => download(document?.doc[0])} className="bg-primary p-2 rounded text-light">{isDownloading ? "BAIXANDO...": "BAIXAR DOCUMENTO"}</button>
                <Link target="_blank" className="underline" href={`${document?.doc[0]}`}>
                    Abrir arquivo em outra janela
                </Link>
            </div>
            <div className="flex items-center bg-mygray justify-center p-1">
                {document?.doc[0].includes(".png", ".jpg", ".jpeg") ?
                    <div className="h-full sm:h-[400px] md:h-[330px]">
                        <Image height={350} width={350} alt={document?.name} src={`${document?.doc}`} />
                    </div>
                    : (
                        <div className="flex justify-center items-center w-[400px] h-full">
                            <iframe className="h-[600px] sm:h-[400px] md:h-[330px]" src={`${document?.doc[0]}`} title="W3Schools Free Online Web Tutorials"></iframe>
                        </div>
                    )}
            </div>
        </div>
    );
}

export default ViewDocument;