import { mongooseConnect } from "@/lib/mongoose";
import { Transaction } from "@/models/Transaction";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import Card from "@/components/Card";
import CardTransaction from "@/components/CardTransaction";
import TitleH3 from "@/components/TitleH3";
import DatePicker from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from "react";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import axios from "axios";
import { api, versionApi } from "@/lib/configApi";
import CardError from "../../../components/CardError";

const Transactions = ({ transactionsDb }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [transactions, setTransactions] = useState(transactionsDb);
  const [nodata, setNodata] = useState(false);

  const getData = (date) => {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    const data = { month, year }

    axios.post(`${api}/${versionApi}/transactions/get-by-year-and-month`, data).then(response => {
      if (!response.data.length) {
        setTransactions([])
        setNodata(true)
      }else{
        setNodata(false)
        setTransactions(response.data);
      }
    })
  }
  return (
    <Layout>
      <Title text="Movimentações" className="mb-[24px]" />
      <div className="flex items-center gap-2 mb-[20px]">
        <TitleH3 text="Buscar por data" className="my-[5px]" />
        <div className="w-[150px] h-[44px] rounded border border-gray-200 dark:border-gray-500 bg-gray-100 dark:bg-secondary overflow-hidden flex items-center justify-center">
          <DatePicker showMonthYearPicker dateFormat="MM/yyyy" locale={ptBR} className="bg-transparent w-full mx-[10px]" selected={startDate} onChange={(date) => { setStartDate(date), getData(date) }} />
          <ChevronDownIcon className="w-4 h-4 mr-[8px]" />
        </div>
      </div>
      {transactions.length > 0 && (
        <Card>
          {transactions.map(transaction => (
            <CardTransaction key={transaction?._id} transaction={transaction} />
          ))}
        </Card>
      )}
      {nodata && (
        <CardError message="Nenhum dado encontrado." />
      )}
    </Layout>
  );
}

export default Transactions;

export async function getServerSideProps(req) {
  await mongooseConnect()

  let anoAtual = new Date().getFullYear();

  function primeiroDiaDoMes(ano, mes) {
    return new Date(ano, mes - 1, 1);
  }

  function ultimoDiaDoMes(ano, mes) {
    return new Date(ano, mes, 1);
  }

  const transactionsDb = await Transaction.find({
    date: { $gte: primeiroDiaDoMes(anoAtual, new Date().getMonth() + 1), $lt: ultimoDiaDoMes(anoAtual, new Date().getMonth() + 1) }
  }).sort({ "date": -1 })

  return {
    props: {
      transactionsDb: JSON.parse(JSON.stringify(transactionsDb)),
    }
  }
}