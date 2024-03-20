import CardLinkHome from "@/components/CardLinkHome";
import MoneyIcon from "./icons/MoneyIcon";

const CashBalance = ({ data }) => {
    
    return (
        <CardLinkHome icon={<MoneyIcon />} text="Saldo em caixa" data={data} bg="bg-success" path={"dashboard/transactions"} />
    );
}
 
export default CashBalance;