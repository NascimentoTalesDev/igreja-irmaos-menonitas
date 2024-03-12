import Image from "next/image";
import formatDate from "@/lib/formatDate"
import formatName from "@/lib/formatName";
import formatLocalCurrency from "@/lib/formatLocalCurrency";
import EditTransaction from "@/components/EditTransaction";
import { ModalContext } from "@/providers/ModalProvider";
import { useContext } from "react";

const CardTransaction = ({ transaction }) => { 
    const { toggleModal, setDataModal } = useContext(ModalContext)
   
    return (
        <div onClick={() => { toggleModal(), setDataModal(<EditTransaction transaction={transaction}/>)}} className="flex cursor-pointer mb-[2px] justify-between items-center min-h-[60px] border-b-[0.5px] border-b-gray-300 dark:border-b-secondary  ">
            <div className="flex justify-center items-center">
                <Image id={transaction?.icon} width={30} height={30} alt="Image" src={`/categories/${transaction?.icon}.png`} />
                <div className="flex flex-col ml-[10px]">
                    <span className="">
                        {formatName(transaction?.name)}
                    </span>
                    <div className="-mt-[5px]">
                        {transaction?.type === "despesa" && (
                            <div>
                                {transaction.paid ? (
                                    <span className="rounded-full px-[7px] py-[2px] text-[10px] text-light dark:text-light font-bold bg-success">Pago</span>
                                ):
                                (
                                    <span className="rounded-full px-[7px] py-[2px] text-[10px] text-light dark:text-light font-bold bg-danger">Não pago</span>
                                )}
                            </div>
                        )}
                        {transaction?.type === "receita" && (
                            <div>
                                {transaction.paid ? (
                                    <span className="rounded-full px-[7px] py-[2px] text-[10px] text-light dark:text-light font-bold bg-success">Recebido</span>
                                ):
                                (
                                    <span className="rounded-full px-[7px] py-[2px] text-[10px] text-light dark:text-light font-bold bg-danger">Não recebido</span>
                                )}
                            </div>                        )}
                    </div>
                </div>
            </div>

            <div className="text-right flex flex-col">
                {transaction?.type === "despesa" ? (
                    <>
                        {transaction?.inInstallments ? (
                            <div className="flex items-center justify-end gap-[2px]">
                                <span className="text-[10px]">R$</span>
                                <span className="text-danger min-w-[50px]">{formatLocalCurrency(transaction?.inInstallmentValue)}</span>
                            </div>
                        ):(
                            <div className="flex items-center justify-end gap-[2px]">
                                <span className="text-[10px]">R$</span>
                                <span className="text-danger min-w-[50px]">{formatLocalCurrency(transaction?.accountValue)}</span>
                            </div>
                        )}
                    </>
                ):(
                    <div className="flex items-center justify-end gap-[2px]">
                        <span className="text-[10px]">R$</span>
                        <span className="text-success min-w-[50px]">{formatLocalCurrency(transaction?.accountValue)}</span>
                    </div>
                )}
                <div className="-mt-[2px] flex flex-col justify-end sm:flex-row ">
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