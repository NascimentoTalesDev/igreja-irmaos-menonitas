import { Chart } from "react-google-charts";
import getMonth from "@/lib/getMonth"
import sumNumbers from "@/lib/sumNumbers"
import { useEffect, useState } from "react";

const Spreadsheet = ({ monthsFour, monthTree, monthTwo, monthOne, actualMonth }) => {
    
    let monthsFourChart = { despesa : [], receita : [] }
    let monthTreeChart = { despesa : [], receita : [] }
    let monthTwoChart = { despesa : [], receita : [] }
    let monthOneChart = { despesa : [], receita : [] }
    
    const [chartI, setChartI ] = useState()
    
    
    function getChart() {
        let chart = document.getElementById('reactgooglegraph-2');
        let chart1 = document.getElementById('reactgooglegraph-1');
        setChartI(chart)
        console.log(chart);
        console.log(chart1);
    }

    monthsFour.forEach(element => {
        switch (element.type) {
            case "despesa":
                if(element.inInstallmentValue > 1){
                    monthsFourChart.despesa.push(element.inInstallmentValue)
                }else{
                    monthsFourChart.despesa.push(element.accountValue)
                }
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
                if(element.inInstallmentValue > 1){
                    monthTreeChart.despesa.push(element.inInstallmentValue)
                }else{
                    monthTreeChart.despesa.push(element.accountValue)
                }
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
                if(element.inInstallmentValue > 1){
                    monthTwoChart.despesa.push(element.inInstallmentValue)
                }else{
                    monthTwoChart.despesa.push(element.accountValue)
                }
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
                if(element.inInstallmentValue > 1){
                    monthOneChart.despesa.push(element.inInstallmentValue)
                }else{
                    monthOneChart.despesa.push(element.accountValue)
                }
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
        ['', 'Receita', 'Despesa'],
        [ month4, sumNumbers(monthOneChart.receita), sumNumbers(monthOneChart.despesa)],
        [ month3, sumNumbers(monthTwoChart.receita), sumNumbers(monthTwoChart.despesa)],
        [ month2, sumNumbers(monthTreeChart.receita), sumNumbers(monthTreeChart.despesa)],
        [ getMonth(actualMonth), sumNumbers(monthsFourChart.receita), sumNumbers(monthsFourChart.despesa)],
    ]);

    var options = {
        chart: { title: 'Últimos 4 meses' },
        chart: { backgroundColor: 'red' },
        legend: { position: 'none' },
        colors: ['#1CD174', '#FF5658'],
        vAxis: { format: 'decimal' },
        bars: 'vertical',
    };
    console.log(chartI);
    return (
        <div onLoad={getChart} id="chart" className="border-[10px] border-gray-100 dark:border-secondary_less  rounded overflow-hidden">
            <Chart
                chartType="Bar"
                width="100%"
                height="400px"
                data={data}
                padding={"10px"}
                options={options}
            />
        </div>
    );
    
}
 
export default Spreadsheet;