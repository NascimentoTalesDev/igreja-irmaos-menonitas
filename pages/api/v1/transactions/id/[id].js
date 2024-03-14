import { mongooseConnect } from "@/lib/mongoose";
import { Transaction } from "@/models/Transaction";
import { Log } from "@/models/Log";

export default async function TransactionId(req, res) {
    await mongooseConnect()
    const { method } = req

    if (method === "DELETE") {
        const { id, userId, deleteAll, hash } = req.query
        try {

            if (deleteAll === "true") {
                const allTransaction = await Transaction.find({ hash })

                await Promise.all(allTransaction.map(async (transaction) => {
                    await transaction.deleteOne()
                }))

                try {
                    Log.create({
                        message: `excluiu as transações ${allTransaction[0]?.name} - ${allTransaction[0]?.type}`,
                        user: userId
                    })
                } catch (error) {
                    console.log(error);
                }
                return res.send({ message: { type: "success", data: "Transações excluidas com sucesso" } })
            }else{
                const transaction = await Transaction.findById(id)
    
                await transaction.deleteOne()
    
                try {
                    Log.create({
                        message: `excluiu a transação ${transaction?.name} - ${transaction?.type}`,
                        user: userId
                    })
                } catch (error) {
                    console.log(error);
                }

                return res.send({ message: { type: "success", data: "Transação excluida com sucesso" } })
            }
        } catch (error) {
            return res.status(500).json({ message: { type: "error", data: "Aconteceu um erro inesperado" } });
        }
    }

    if (method === "PATCH") {
        const { id, userId } = req.query
        const { type, name, icon, date, doc, paid, accountValue, updateAll, hash } = req.body

        let value = parseInt(accountValue)

        try {
            if (type === "despesa") {
                if (updateAll) {
                    const allTransaction = await Transaction.find({ hash })
                    
                    await Promise.all(allTransaction.map(async (transaction, i) => {
                        if (paid && paid !== transaction.paid) transaction.paid = paid
                        if (name && name !== transaction.name) transaction.name = name
                        if (icon && icon !== transaction.icon) transaction.icon = icon
                        if (accountValue) {
                            transaction.accountValue = value * transaction.inInstallmentsQtt
                            transaction.inInstallmentValue = value 
                        } 
                        if (doc && doc !== transaction.doc) transaction.doc = doc
                        
                        if (date && date !== transaction.date) {
                            const expirationData = new Date(date)
                            expirationData.setMonth(expirationData.getMonth() + i );
                            transaction.date = expirationData
                        }
    
                        await transaction.save()
                        
                    }))
                    try {
                        Log.create({
                            message: `Atualizou a transação parcelada ${transaction?.name}`,
                            user: userId
                        })
                    } catch (error) {
                        console.log(error);
                    }
    
                    return res.send({ message: { type: "success", data: "Transação atualizada com sucesso" } })
                }

                const transaction = await Transaction.findById(id)

    
                if (paid && paid !== transaction.paid) transaction.paid = paid
                if (name && name !== transaction.name) transaction.name = name
                if (icon && icon !== transaction.icon) transaction.icon = icon
                if (date && date !== transaction.date) transaction.date = date
                if(transaction.inInstallmentValue){
                    if (accountValue && accountValue !== transaction.inInstallmentValue) transaction.inInstallmentValue = value
                }else{
                    if (accountValue && accountValue !== transaction.accountValue) transaction.accountValue = value
                }
                if (doc && doc !== transaction.doc) transaction.doc = doc
    
                await transaction.save()
    
                try {
                    Log.create({
                        message: `atualizou a transação ${transaction?.name}`,
                        user: userId
                    })
                } catch (error) {
                    console.log(error);
                }
    
                return res.send({ message: { type: "success", data: "Transação atualizada com sucesso" } })
            }
            
            
        } catch (error) {
            return res.status(500).json({ message: { type: "error", data: "Aconteceu um erro inesperado" } });
        }
    }
} 