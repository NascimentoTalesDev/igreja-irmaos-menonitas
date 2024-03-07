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

  const date = new Date();
  let year = date.getFullYear()
  let month = date.getMonth()+1
  let nextMonth = month+1

  const transactionsDb = await Transaction.find({ date: {$gt: (`${year}-${month}-01`), $lt: (`${year}-${nextMonth}-01`)}}).sort({"date": -1})
  return {
      props: {
          transactionsDb: JSON.parse(JSON.stringify(transactionsDb)),
      }
  }
}