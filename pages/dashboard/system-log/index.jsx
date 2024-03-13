import { mongooseConnect } from "@/lib/mongoose";
import { Log } from "@/models/Log";
import { User } from "@/models/User";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import Card from "@/components/Card";
import CardError from "@/components/CardError";
import CardLog from "../../../components/CardLog";

const SystemLog = ({logs}) => {

  return (
    <Layout>
      <Title text="Log do sistema" className="mb-[24px]" />
      {logs.length > 0 ? (
        <Card>
          {logs.map(log => (
            <CardLog key={log?._id} log={log} />
          ))}
        </Card>
      ):(
        <CardError message="Nenhum log encontrado." />
      )}
    </Layout>
  );
}

export default SystemLog;

export async function getServerSideProps(req) {
  await mongooseConnect()

  const logs =  await Log.find({}).sort({ "createdAt": -1})
  logs.docs = await Promise.all(logs.map(async (log) => {
    log.user = await User.findById(log.user).select("name")
    return log
  }))

  return {
      props: {
          logs: JSON.parse(JSON.stringify(logs)),
      }
  }
}
