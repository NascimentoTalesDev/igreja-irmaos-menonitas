import { Chart } from "react-google-charts";
import getMonth from "@/lib/getMonth"
import sumNumbers from "@/lib/sumNumbers"
import formatCharacterLimit from "@/lib/formatCharacterLimit";

const Spreadsheet = ({ monthsFour, monthTree, monthTwo, monthOne, actualMonth }) => {

    let monthsFourChart = { despesa : [], receita : [] }
    let monthTreeChart = { despesa : [], receita : [] }
    let monthTwoChart = { despesa : [], receita : [] }
    let monthOneChart = { despesa : [], receita : [] }

    monthsFour.forEach(element => {
        switch (element.type) {
            case "despesa":
                    monthsFourChart.despesa.push(element.accountValue)
                break;
                case "receita":
                    monthsFourChart.receita.push(element.accountValue)
                break;
            default:
                break;
        }
    });

    monthTree.forEach(element => {
        switch (element.type) {
            case "despesa":
                    monthTreeChart.despesa.push(element.accountValue)
                break;
                case "receita":
                    monthTreeChart.receita.push(element.accountValue)
                break;
            default:
                break;
        }
    });

    monthTwo.forEach(element => {
        switch (element.type) {
            case "despesa":
                    monthTwoChart.despesa.push(element.accountValue)
                break;
                case "receita":
                    monthTwoChart.receita.push(element.accountValue)
                break;
            default:
                break;
        }
    });

    monthOne.forEach(element => {
        switch (element.type) {
            case "despesa":
                    monthOneChart.despesa.push(element.accountValue)
                break;
                case "receita":
                    monthOneChart.receita.push(element.accountValue)
                break;
            default:
                break;
        }
    });

    let month4 = getMonth(actualMonth - 3)
    let month3 = getMonth(actualMonth - 2)
    let month2 = getMonth(actualMonth -1 )

    var data = ([
        [`${new Date().getFullYear()}`, 'Receita', 'Despesa', 'Saldo'],
        [formatCharacterLimit(3, month4), sumNumbers(monthOneChart.receita), sumNumbers(monthOneChart.despesa), 0],
        [formatCharacterLimit(3, month3), sumNumbers(monthTwoChart.receita), sumNumbers(monthTwoChart.despesa), 0],
        [formatCharacterLimit(3, month2), sumNumbers(monthTreeChart.receita), sumNumbers(monthTreeChart.despesa), 0],
        [formatCharacterLimit(3, getMonth(actualMonth)), sumNumbers(monthsFourChart.receita), sumNumbers(monthsFourChart.despesa), 0],
    ]);

    var options = {
        chart: {
          title: 'Igreja Irmãos Menonitas',
          subtitle: 'Despesa, Expenses, and Profit: 2014-2017',
        }
    };

    return (
        <div>
            <Chart
                chartType="Bar"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </div>
    );
}
 
export default Spreadsheet;