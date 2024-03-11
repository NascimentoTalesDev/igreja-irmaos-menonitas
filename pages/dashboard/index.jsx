import { mongooseConnect } from "@/lib/mongoose";
import { Transaction } from "@/models/Transaction";
import Layout from "@/components/Layout";
import getMonth from "@/lib/getMonth";
import CardLinkHome from "@/components/CardLinkHome";
import Revenue from "@/components/Revenue";
import Expense from "@/components/Expense";
import CashBalance from "@/components/CashBalance";
import formatDate from "@/lib/formatDate";
import dynamic from "next/dynamic"
const Spreadsheet = dynamic(()=> import("@/components/Spreadsheet"), {
    ssr: false
})

const Dashboard = ({ monthsFour, monthTree, monthTwo, monthOne, dizimo }) => {
    let actualMonth = new Date().getMonth()+1

    return (
        <Layout>
            <div className="flex h-fi items-end mb-[24px]">
                <span className="font-normal">Resumo de</span>
                <h2 className="ml-[5px] font-normal">{getMonth(actualMonth)}</h2>
            </div>
            <div className="grid grid-cols-2 gap-[16px] mb-[16px]">
                <Revenue data={monthsFour} />
                <Expense data={monthsFour} />
                <CashBalance data={monthsFour} />
                <CardLinkHome icon="" text="Saldo no banco" bg="bg-success" />
            </div>
            {dizimo && (
                <div className="w-full mb-[16px]">
                    <CardLinkHome data={dizimo?.accountValue} icon="" text={`Dízimo do último culto: ${formatDate(dizimo.createdAt)}`} bg="bg-success" className={" w-full"}  />
                </div>
            )}

            <Spreadsheet monthsFour={monthsFour} monthTree={monthTree} monthTwo={monthTwo} monthOne={monthOne} actualMonth={actualMonth} />    
        </Layout>
    );
}

export default Dashboard;

export async function getServerSideProps(req) {
    await mongooseConnect()

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

    const dizimo = await Transaction.findOne({ name: "dízimo igreja" }, null, {sort: { "createdAt": -1 }, limit: 1,});

    return {
        props: {
            monthsFour: JSON.parse(JSON.stringify(monthsFour)),
            monthTree: JSON.parse(JSON.stringify(monthTree)),
            monthTwo: JSON.parse(JSON.stringify(monthTwo)),
            monthOne: JSON.parse(JSON.stringify(monthOne)),
            dizimo: JSON.parse(JSON.stringify(dizimo)),
        }
    }
}

// const months = await Transaction.find