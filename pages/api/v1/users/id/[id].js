import { mongooseConnect } from "@/lib/mongoose";
import { User } from "@/models/User";
import bcrypt from "bcrypt"

export default async function UserId(req, res) {
    await mongooseConnect()
    const { method } = req

    if (method === "DELETE") {
        const { id } = req.query

        try {
            const user = await User.findById(id)

            await user.deleteOne()

            return res.send({ message: { type: "success", data: "Usuário excluido com sucesso" } })
        } catch (error) {
            return res.status(500).json({ message: { type: "error", data: "Aconteceu um erro inesperado" } });
        }
    }

    if (method === "PATCH") {

        const { id } = req.query
        const { name, email, password, rule } = req.body

        try {
            const user = await User.findById(id)
            if(!user) return res.json({ message: { type: "error", data: "Falha ao atualizar o usuário" } })

            if(name) user.name = name
            if(email) user.email = email
            if(rule) user.rule = rule
            
            if(password){
                const hash = await bcrypt.hash(password, 12)
                user.password = hash
            }

            await user.save()

            return res.send({ message: { type: "success", data: "Usuário atualizado com sucesso" } })
        } catch (error) {
            return res.status(500).json({ message: { type: "error", data: "Aconteceu um erro inesperado" } });
        }
    }
} 