import formatDate from "@/lib/formatDate"
import formatName from "@/lib/formatName"
import formatHourAndMinutes from "../lib/formatHourAndMinutes";

const CardLog = ({ log }) => { 
   console.log(log);
   const [firstName, secondName, thirdName] = log?.user?.name.split(" ");

    return (
        <div className="flex py-[8px] flex-col min-h-[50px] border-b-[0.5px] border-b-gray-300 dark:border-b-secondary  ">
            <div className="flex gap-[6px] text-[16px] font-bold">
                <span>{formatDate(log?.createdAt)}</span>
                <span>às</span>
                <span>{formatHourAndMinutes(log?.createdAt)}</span>
            </div>
            <div className="text-[10px] ">
                <span>{formatName(firstName)}</span>
                <span className="ml-[3px]">{formatName(secondName)}</span>
                <span className="hidden md:inline-block md:ml-[4px]">{formatName(thirdName)}</span>
                <span className="mx-[3px]">-</span>
                <span>{log?.message}</span>
                <span className="ml-[3px]">{log?.category_type === 1 && "despesa"}{log?.category_type === 2 && "investimento"}{log?.category_type === 3 && "receita"}</span>
                <span>{log?.date && `/${formatDate(log?.date)}`}</span>
            </div>
        </div>
    );
}

export default CardLog;