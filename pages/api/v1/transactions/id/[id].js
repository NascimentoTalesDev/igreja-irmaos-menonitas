import { mongooseConnect } from "@/lib/mongoose";
import { Transaction } from "@/models/Transaction";

export default async function TransactionId(req, res) {
    await mongooseConnect()
    const { method } = req

    if (method === "DELETE") {
        const { id } = req.query
        try {
            const transaction = await Transaction.findById(id)

            await transaction.deleteOne()

            return res.send({ message: { type: "success", data: "Transação excluida com sucesso" } })
        } catch (error) {
            return res.status(500).json({ message: { type: "error", data: "Aconteceu um erro inesperado" } });
        }
    }

    if (method === "PATCH") {
        const { id } = req.query
        const { paid } = req.body

        try {
            const transaction = await Transaction.findById(id)
            
            transaction.paid = !paid
            
            await transaction.save()

            return res.send({ message: { type: "success", data: "Movimentação atualizada com sucesso" } })
        } catch (error) {
            return res.status(500).json({ message: { type: "error", data: "Aconteceu um erro inesperado" } });
        }
    }
} 