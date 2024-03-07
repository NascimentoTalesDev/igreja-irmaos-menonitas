import { mongooseConnect } from "@/lib/mongoose";
import { Transaction } from "@/models/Transaction";

export default async function Transactions(req, res) {
    await mongooseConnect();
    const { method } = req;

    if (method === "POST") {
        
        const { type, name, icon, accountValue, date, doc, inInstallments, recurrent, inInstallmentsQtt, paid } = req.body;
        console.log("TYPE", type);
        console.log(name, icon, type, accountValue, date, doc, inInstallments, recurrent, inInstallmentsQtt, paid);

        if (!name) return res.status(422).json({ message: { type: "error", data: "Nome não pode ficar vazio" } });
        if (!accountValue || accountValue == 0) return res.status(422).json({ message: { type: "error", data: "Valor não pode ficar vazio" } });
        if (!date) return res.status(422).json({ message: { type: "error", data: "Selecione uma data" } });
        if (!doc || !doc.length) return res.status(422).json({ message: { type: "error", data: "Insira um comprovante" } });
        if (inInstallments && !inInstallmentsQtt) return res.status(422).json({ message: { type: "error", data: "Selecione as parcelas" } });


        try {
            const transaction = await Transaction.create({
                name,
                icon,
                type,
                accountValue,
                date,
                doc,
                inInstallments,
                recurrent,
                inInstallmentsQtt,
                paid
            })

            return res.json({ transaction, message: { type: "success", data: "Transação criada com sucesso" } })
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: { type: "error", data: "Aconteceu um erro inesperado" } });
        }
    }
}