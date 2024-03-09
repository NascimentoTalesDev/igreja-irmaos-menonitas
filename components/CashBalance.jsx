import CardLinkHome from "@/components/CardLinkHome";
import sumNumbers from "@/lib/sumNumbers";
import MoneyIcon from "./icons/MoneyIcon";
import checkDecimalNumbers from "@/lib/checkDecimalNumbers";

const CashBalance = ({ data }) => {
    let month = { receita : [], despesa : [] }

    data.forEach(element => {
        switch (element.type) {
            case "despesa":
                if(element.inInstallmentValue > 1){
                    month.despesa.push(element.inInstallmentValue)
                }else{
                    month.despesa.push(element.accountValue)
                }
                break;
                case "receita":
                    month.receita.push(element.accountValue)
                break;
            default:
                break;
        }
    });

    let rec = sumNumbers(month.receita)
    let des = sumNumbers(month.despesa)

    let res = rec - des

    return (
        <CardLinkHome icon={<MoneyIcon />} text="Saldo em caixa" data={res.toFixed(2)} bg="bg-success" />
    );
}
 
export default CashBalance;