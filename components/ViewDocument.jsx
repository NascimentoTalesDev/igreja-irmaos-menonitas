import formatName from "@/lib/formatName";
import Title from "./Title";
import TitleH2 from "./TitleH2";
import TitleH3 from "./TitleH3";
import Image from "next/image";
import Link from "next/link";
import formatFirstWordToUpperCase from "@/lib/formatFirstWordToUpperCase";

const ViewDocument = ({ document }) => {

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