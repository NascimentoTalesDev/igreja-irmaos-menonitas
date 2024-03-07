import Image from "next/image";
import formatDate from "@/lib/formatDate"
import formatName from "@/lib/formatName";

const CardTransaction = ({ transaction }) => {
    console.log(transaction.date);
    
    return (
        <div className="flex justify-between items-center py-[4px] border-b-[0.5px] border-b-gray-500 ">
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
                                    <span className="rounded-full px-[5px] text-[10px] bg-success">pago</span>
                                ):
                                (
                                    <span className="rounded-full px-[5px] text-[10px] bg-danger">não pago</span>
                                )}
                            </div>
                        )}
                        {transaction?.type === "receita" && (
                            <span className="rounded-full px-[5px] text-[10px] bg-success">recebido</span>
                        )}
                    </div>
                </div>
            </div>

            <div className="text-right">
                {transaction?.type === "despesa" && (
                    <span className="text-[10px]">
                        {transaction?.inInstallments && "parcelado"}
                    </span>
                )}
                <div>
                {transaction?.type === "despesa" ? (
                    <div className="text-danger">
                        <span>{transaction?.accountValue}</span>
                        <span>,00</span>
                    </div>
                ):(
                    <div className="text-success">
                        <span>{transaction?.accountValue}</span>
                        <span>,00</span>
                    </div>
                )}
                    
                </div>
                <div>
                    <span className="text-[10px] ">
                        {formatDate(transaction?.date)}
                    </span>
                    {transaction?.type === "despesa" && (
                        <>
                            {transaction?.inInstallments && (
                                <span className="text-[10px] pl-[5px]">
                                    {transaction?.inInstallmentsQtt > 1 ?
                                        `${transaction?.inInstallmentsQtt} parcelas` :
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