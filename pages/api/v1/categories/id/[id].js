import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import { error } from "console";

export default async function CategoryId(req, res) {
    await mongooseConnect()
    const { method } = req

    if (method === "DELETE") {
        const { id } = req.query

        try {
            const category = await Category.findById(id)

            await category.deleteOne()

            return res.send({ message: { type: "success", data: "Categoria excluida com sucesso" } })
        } catch (error) {
            return res.status(500).json({ message: { type: "error", data: "Error ao buscar categorias" } });
        }
    }

    if (method === "PATCH") {

        console.log("AQUI");
        const { id } = req.query
        const { name, type, icon } = req.body

        console.log(id, name, type, icon);
        try {
            const category = await Category.findById(id)
            if(!category) return res.json({ message: { type: "error", data: "Falha ao atualizar a categoria" } })

            if(name) category.name = name
            if(type) category.type = type
            if(icon) category.icon = icon

            await category.save()

            return res.send({ message: { type: "success", data: "Categoria atualizada com sucesso" } })
        } catch (error) {
            return res.status(500).json({ message: { type: "error", data: "Error ao atualizar categoria" } });
        }
    }
} 