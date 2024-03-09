import Image from "next/image";
import formatDate from "@/lib/formatDate"
import formatName from "@/lib/formatName";
import checkDecimalNumbers from "@/lib/checkDecimalNumbers";
import EditTransaction from "@/components/EditTransaction";
import { ModalContext } from "@/providers/ModalProvider";
import { useContext } from "react";

const CardTransaction = ({ transaction }) => { 
    const { toggleModal, setDataModal } = useContext(ModalContext)
   
    return (
        <div onClick={() => { toggleModal(), setDataModal(<EditTransaction transaction={transaction}/>)}} className="flex cursor-pointer mb-[2px] justify-between items-center min-h-[60px] border-b-[0.5px] border-b-gray-300 ">
            <div className="flex justify-center items-center">
                <Image id={transaction?.icon} width={30} height={30} alt="Image" src={`/categories/${transaction?.icon}.png`} />
                <div className="flex flex-col ml-[10px]">
                    <span className="">
                        {formatName(transaction?.name)}
                    </span>
                    <div>
                        {transaction?.type === "despesa" && (
                            <div>
                                {transaction.paid ? (
                                    <span className="rounded-full px-[5px] text-[10px] text-dark font-bold bg-success">pago</span>
                                ):
                                (
                                    <span className="rounded-full px-[5px] text-[10px] text-dark font-bold bg-danger">não pago</span>
                                )}
                            </div>
                        )}
                        {transaction?.type === "receita" && (
                            <span className="rounded-full px-[5px] text-[10px] text-dark font-bold bg-success">recebido</span>
                        )}
                    </div>
                </div>
            </div>

            <div className="text-right flex flex-col">
                {transaction?.type === "despesa" && (
                    <span className="text-[10px]">
                        {transaction?.inInstallments && "parcelado"}
                    </span>
                )}
                {transaction?.type === "despesa" ? (
                    <>
                        {transaction?.inInstallments ? (
                            <span className="text-danger">{checkDecimalNumbers(transaction?.inInstallmentValue)}</span>
                        ):(
                            <span className="text-danger">{checkDecimalNumbers(transaction?.accountValue)}</span>
                        )}
                    </>
                ):(
                    <span className="text-success">{checkDecimalNumbers(transaction?.accountValue)}</span>
                )}
                <div>
                    <span className="text-[10px] ">
                        {formatDate(transaction?.date)}
                    </span>
                    {transaction?.type === "despesa" && (
                        <>
                            {transaction?.inInstallments && (
                                <span className="text-[10px] pl-[5px]">
                                    {transaction?.inInstallmentsQtt > 1 ?
                                        `${transaction?.inInstallmentNumber} de ${transaction?.inInstallmentsQtt} parcelas` :
                                        `${transaction?.inInstallmentsQtt} parcela`
                                    }
                                </span>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CardTransaction;