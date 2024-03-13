import { mongooseConnect } from "@/lib/mongoose";
import { Transaction } from "@/models/Transaction";
import { Document } from "@/models/Document";
import { Log } from "@/models/Log";

export default async function Transactions(req, res, next) {
    await mongooseConnect();
    const { method } = req;

    if (method === "POST") {
        
        const { type, name, icon, accountValue, date, doc, inInstallments, recurrent, inInstallmentsQtt, paid } = req.body;
        const { userId } = req.query

        if (!name) return res.status(422).json({ message: { type: "error", data: "Nome não pode ficar vazio" } });
        if (!accountValue || accountValue == 0) return res.status(422).json({ message: { type: "error", data: "Valor não pode ficar vazio" } });
        if (!date) return res.status(422).json({ message: { type: "error", data: "Selecione uma data" } });
        if (inInstallments && !inInstallmentsQtt) return res.status(422).json({ message: { type: "error", data: "Selecione as parcelas" } });

        let value = parseInt(accountValue)

        try {
            if (doc.length > 0) {
                try {
                    Document.create({
                        name,
                        date,
                        description: `${name} R$${value.toFixed(2)} ${new Date().toLocaleString('pt-BR')}`,
                        doc,
                    })
                    Log.create({
                        message: `criou uma ${type} ${name} com documento `,
                        date,
                        user: userId
                    })
                } catch (error) {
                    console.log(error);
                }
            }

            if(inInstallments){
                const inInstallmentValue = accountValue / inInstallmentsQtt
                const dateOfFirstInstallment = new Date(date)

                for (let i = 1; i <= inInstallmentsQtt; i++) {
                    const expirationData = new Date(dateOfFirstInstallment);
                    expirationData.setMonth(expirationData.getMonth() + i - 1); // Adiciona 'i-1' meses à data da primeira parcela
                    
                    const paidStatus = paid && i === 1

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
                        paid: paidStatus,
                        inInstallmentNumber: i,
                        inInstallmentValue: inInstallmentValue.toFixed(2),
                    });
                }

                try {
                    Log.create({
                        message: `criou uma ${type} parcelada em ${inInstallmentsQtt}x${inInstallmentValue.toFixed(2)} - ${name}/${value.toFixed(2)}`,
                        date,
                        user: userId
                    })
                } catch (error) {
                    console.log(error);
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

                try {
                    Log.create({
                        message: `criou uma ${type} - ${name}/${value.toFixed(2)}`,
                        date,
                        user: userId
                    })
                } catch (error) {
                    console.log(error);
                }

                return res.json({ message: { type: "success", data: "Transação criada com sucesso" } })
            }

            if(type === "Rendimentos"){
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

                try {
                    Log.create({
                        message: `adicionou um rendimento - ${value.toFixed(2)}`,
                        date,
                        user: userId
                    })
                } catch (error) {
                    console.log(error);
                }

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

            try {
                Log.create({
                    message: `criou uma ${type} - ${name}/${value.toFixed(2)}`,
                    date,
                    user: userId
                })
            } catch (error) {
                console.log(error);
            }

            return res.json({ message: { type: "success", data: "Transação criada com sucesso" } })
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: { type: "error", data: "Aconteceu um erro inesperado" } });
        }
    }
}