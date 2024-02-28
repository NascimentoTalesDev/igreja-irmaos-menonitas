import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import { error } from "console";

export default async function CategoryId (req, res) {
    await mongooseConnect()
    const {method} = req

    if (method === "DELETE") {
        const { id } = req.query

        try {
            const category = await Category.findById(id)
            
            await category.deleteOne()

            return res.send({ message: { type: "success", data: "Categoria excluida com sucesso" } })
        } catch (error) {
            return res.status(500).json({ message: { type: "error", data: "Error ao buscar categorias"} });
        }
    }  
} 