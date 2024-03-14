import { mongooseConnect } from "@/lib/mongoose";
import { Transaction } from "@/models/Transaction";
import Layout from "@/components/Layout";
import getMonth from "@/lib/getMonth";
import CardLinkHome from "@/components/CardLinkHome";
import Revenue from "@/components/Revenue";
import Expense from "@/components/Expense";
import CashBalance from "@/components/CashBalance";
import CashInTheBank from "@/components/CashInTheBank";
import formatDate from "@/lib/formatDate";
import dynamic from "next/dynamic"
import TitleH3 from "@/components/TitleH3";
import DizimoIcon from "@/components/icons/DizimoIcon";
import { useEffect } from "react";
import axios from "axios";
import { api, versionApi } from "@/lib/configApi";
import { useRouter } from "next/router";
import useFlashMessage from "@/hooks/useFlashMessage";

const Spreadsheet = dynamic(() => import("@/components/Spreadsheet"), {
    ssr: false
})

const Spreadsheet2 = dynamic(() => import("@/components/Spreadsheet2"), {
    ssr: false
})

const Dashboard = ({ monthsFour, monthTree, monthTwo, monthOne, dizimo, categories, performance }) => {
    const { setFlashMessage } = useFlashMessage()

    let actualMonth = new Date().getMonth() + 1
    const router = useRouter();
    
    useEffect(()=>{
        let msgText = router.query.error || '';

        if (msgText) {
            setFlashMessage(msgText, 'error')
        }
    },[router, setFlashMessage])

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
                <CashInTheBank  data={performance} />

            </div>
            {dizimo && (
                <div className="w-full mb-[16px]">
                    <CardLinkHome data={dizimo?.accountValue} icon={<DizimoIcon />} text={`Dízimo do último culto: ${formatDate(dizimo.createdAt)}`} bg="bg-success" path={"dashboard/transactions"} className={" w-full"} />
                </div>
            )}

            <Spreadsheet monthsFour={monthsFour} monthTree={monthTree} monthTwo={monthTwo} monthOne={monthOne} actualMonth={actualMonth} />
            
            {categories?.length > 4 && (
                <>
                    <TitleH3 text="Top 5 gastos por categoria"  className="my-[16px]" />
                    <Spreadsheet2 categories={categories}  />
                </>
            )}
        </Layout>
    );
}

export default Dashboard;

export async function getServerSideProps(req) {
    await mongooseConnect()

    var actualYear = new Date().getFullYear();
    var actualMonth = new Date().getMonth() + 1;

    function firstDayOfMonth(year, month) {
        return new Date(year, month - 1, 1);
    }

    function lastDayOfMonth(year, month) {
        return new Date(year, month, 1);
    }

    const monthsFour = await Transaction.find({
        date: { $gte: firstDayOfMonth(actualYear, new Date().getMonth() + 1), $lt: lastDayOfMonth(actualYear, new Date().getMonth() + 1) }
    })

    const monthTree = await Transaction.find({
        date: { $gte: firstDayOfMonth(actualYear, new Date().getMonth()), $lt: lastDayOfMonth(actualYear, new Date().getMonth()) }
    })

    const monthTwo = await Transaction.find({
        date: { $gte: firstDayOfMonth(actualYear, new Date().getMonth() - 1), $lt: lastDayOfMonth(actualYear, new Date().getMonth() - 1) }
    })

    const monthOne = await Transaction.find({
        date: { $gte: firstDayOfMonth(actualYear, new Date().getMonth() - 2), $lt: lastDayOfMonth(actualYear, new Date().getMonth() - 2) }
    })

    const dizimo = await Transaction.findOne({ name: "dízimo igreja" }, null, { sort: { "createdAt": -1 }, limit: 1, });


    const categories = await Transaction.aggregate([
        {
            $match: {
                type: "despesa",
                date: {
                    $gte: new Date(actualYear, actualMonth - 1, 1), 
                    $lt: new Date(actualYear, actualMonth, 1) 
                }
            },
        },
        {
            $group: {
                _id: "$name",
                total: {
                    $sum: {
                        $cond: {
                            if: { $gt: ["$inInstallmentsQtt", 0] },
                            then: "$inInstallmentValue", 
                            else: "$accountValue"
                        }
                    }
                }
            }
        },
        {
            $sort: {
                total: -1 
            }
        },
        {
            $limit: 5
        }
    ])

    const performance =  await Transaction.aggregate([
        {
            $match: {
                name: "rendimento",
                type: "rendimentos",
            },
        },
        {
            $group: {
                _id: "$name", // Não agrupa as transações, queremos somar todas
              total: { $sum: "$accountValue" } // Calcula o valor total somando todos os valores das transações
            }
        }
    ])

    return {
        props: {
            monthsFour: JSON.parse(JSON.stringify(monthsFour)),
            monthTree: JSON.parse(JSON.stringify(monthTree)),
            monthTwo: JSON.parse(JSON.stringify(monthTwo)),
            monthOne: JSON.parse(JSON.stringify(monthOne)),
            dizimo: JSON.parse(JSON.stringify(dizimo)),
            categories: JSON.parse(JSON.stringify(categories)),
            performance: JSON.parse(JSON.stringify(performance)),
        }
    }
}
