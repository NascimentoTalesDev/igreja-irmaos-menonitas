import { mongooseConnect } from "@/lib/mongoose";
import { Transaction } from "@/models/Transaction";
import Layout from "@/components/Layout";
import getMonth from "@/lib/getMonth";
import Spreadsheet from "@/components/Spreadsheet";

const Dashboard = ({ monthsFour, monthTree, monthTwo, monthOne }) => {
    let actualMonth = new Date().getMonth()+1

    console.log(actualMonth);
    return (
        <Layout>
            <div className="flex h-fi items-end mb-[24px]">
                <span className="font-normal">Resumo de</span>
                <h2 className="ml-[5px] font-normal">{getMonth(actualMonth)}</h2>
            </div>
            <Spreadsheet monthsFour={monthsFour} monthTree={monthTree} monthTwo={monthTwo} monthOne={monthOne} actualMonth={actualMonth} />

        </Layout>
    );
}

export default Dashboard;

export async function getServerSideProps(req) {
    await mongooseConnect()

    // Definindo o ano atual
    var anoAtual = new Date().getFullYear();

    function primeiroDiaDoMes(ano, mes) {
        return new Date(ano, mes - 1, 1);
    }

    function ultimoDiaDoMes(ano, mes) {
        return new Date(ano, mes, 1);
    }

    const monthsFour = await Transaction.find({
        date: { $gte: primeiroDiaDoMes(anoAtual, new Date().getMonth() + 1), $lt: ultimoDiaDoMes(anoAtual, new Date().getMonth() + 1) }
    })

    const monthTree = await Transaction.find({
        date: { $gte: primeiroDiaDoMes(anoAtual, new Date().getMonth()), $lt: ultimoDiaDoMes(anoAtual, new Date().getMonth()) }
    })

    const monthTwo = await Transaction.find({
        date: { $gte: primeiroDiaDoMes(anoAtual, new Date().getMonth() - 1), $lt: ultimoDiaDoMes(anoAtual, new Date().getMonth() - 1) }
    })

    const monthOne = await Transaction.find({
        date: { $gte: primeiroDiaDoMes(anoAtual, new Date().getMonth() - 2), $lt: ultimoDiaDoMes(anoAtual, new Date().getMonth() - 2) }
    })

    return {
        props: {
            monthsFour: JSON.parse(JSON.stringify(monthsFour)),
            monthTree: JSON.parse(JSON.stringify(monthTree)),
            monthTwo: JSON.parse(JSON.stringify(monthTwo)),
            monthOne: JSON.parse(JSON.stringify(monthOne)),
        }
    }
}

// const months = await Transaction.find