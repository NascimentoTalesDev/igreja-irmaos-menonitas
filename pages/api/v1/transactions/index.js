import { mongooseConnect } from "@/lib/mongoose";
import { Transaction } from "@/models/Transaction";

export default async function Transactions(req, res) {
    await mongooseConnect();
    const { method } = req;

    if (method === "POST") {
        
        const { type, name, icon, accountValue, date, doc, inInstallments, recurrent, inInstallmentsQtt, paid } = req.body;
        console.log(name, icon, type, accountValue, date, doc, inInstallments, recurrent, inInstallmentsQtt, paid);

        if (!name) return res.status(422).json({ message: { type: "error", data: "Nome não pode ficar vazio" } });
        if (!accountValue || accountValue == 0) return res.status(422).json({ message: { type: "error", data: "Valor não pode ficar vazio" } });
        if (!date) return res.status(422).json({ message: { type: "error", data: "Selecione uma data" } });
        //if (!doc || !doc.length) return res.status(422).json({ message: { type: "error", data: "Insira um comprovante" } });
        if (inInstallments && !inInstallmentsQtt) return res.status(422).json({ message: { type: "error", data: "Selecione as parcelas" } });

        let value = parseInt(accountValue)

        try {
            if(inInstallments){
                const inInstallmentValue = accountValue / inInstallmentsQtt
                const dateOfFirstInstallment = new Date(date)

                for (let i = 1; i <= inInstallmentsQtt; i++) {
                    const expirationData = new Date(dateOfFirstInstallment);
                    expirationData.setMonth(expirationData.getMonth() + i - 1); // Adiciona 'i-1' meses à data da primeira parcela
        
                    await Transaction.create({
                        name,
                        icon,
                        type,
                        accountValue: value.toFixed(2) ,
                        date: expirationData,
                        doc,
                        inInstallments,
                        recurrent,
                        inInstallmentsQtt,
                        paid,
                        inInstallmentNumber: i,
                        inInstallmentValue: inInstallmentValue.toFixed(2),
                    });
                }
                return res.json({ message: { type: "success", data: "Transação criada com sucesso" } })
            }

            if(type === "Receita"){
                await Transaction.create({
                    name,
                    icon,
                    type,
                    accountValue: value.toFixed(2),
                    date,
                    doc,
                    inInstallments,
                    recurrent,
                    inInstallmentsQtt,
                    paid: true
                })
                return res.json({ message: { type: "success", data: "Transação criada com sucesso" } })
            }

            await Transaction.create({
                name,
                icon,
                type,
                accountValue: value.toFixed(2),
                date,
                doc,
                inInstallments,
                recurrent,
                inInstallmentsQtt,
                paid
            })

            return res.json({ message: { type: "success", data: "Transação criada com sucesso" } })
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: { type: "error", data: "Aconteceu um erro inesperado" } });
        }
    }
}