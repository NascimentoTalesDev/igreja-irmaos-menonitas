import CardLinkHome from "@/components/CardLinkHome";
import BankIcon from "./icons/BankIcon";

const CashInTheBank = ({ data }) => {
    return (
        <CardLinkHome icon={<BankIcon />} data={data || 0} text="Saldo no banco" bg="bg-success" path={"dashboard/transactions"} />
    );
}
 
export default CashInTheBank;