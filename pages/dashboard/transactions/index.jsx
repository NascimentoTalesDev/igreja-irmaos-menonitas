import { mongooseConnect } from "@/lib/mongoose";
import { Transaction } from "@/models/Transaction";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import Card from "@/components/Card";
import CardTransaction from "@/components/CardTransaction";

const Transactions = ({ transactionsDb }) => {
  return (
    <Layout>
      <Title text="Movimentações" className="mb-[24px]" />
      {transactionsDb.length > 0 && (
        <Card>
          {transactionsDb.map(transaction => (
            <CardTransaction key={transaction?._id} transaction={transaction} />
          ))}
        </Card> 
        )}
    </Layout>
  );
}

export default Transactions;

export async function getServerSideProps(req) {
  await mongooseConnect()

  var anoAtual = new Date().getFullYear();

    function primeiroDiaDoMes(ano, mes) {
        return new Date(ano, mes - 1, 1);
    }

    function ultimoDiaDoMes(ano, mes) {
        return new Date(ano, mes, 0);
    }

    const transactionsDb = await Transaction.find({
      date: { $gte: primeiroDiaDoMes(anoAtual, new Date().getMonth() + 1), $lt: ultimoDiaDoMes(anoAtual, new Date().getMonth() + 1) }
    }).sort({"date": -1})

  return {
      props: {
          transactionsDb: JSON.parse(JSON.stringify(transactionsDb)),
      }
  }
}