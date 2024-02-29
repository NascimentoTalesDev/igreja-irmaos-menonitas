import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import { error } from "console";

export default async function Categories (req, res) {
    await mongooseConnect()
    const {method} = req
    console.log("NODE");
    if (method === "POST") {            
        
        const { name, type, icon } = req.body;
        
        if(!name) return res.status(422).json({ message: { type: "error", data: "Nome não pode ficar vazio" } })
        if(!type) return res.status(422).json({ message: { type: "error", data: "Tipo não pode ficar vazio"} });
        if(!icon) return res.status(422).json({ message: { type: "error", data: "Ícone não pode ficar vazio"} });
        
        try {
            const categoryExists = await Category.findOne({ name: name })
            if(categoryExists) return res.status(401).json({ message: { type: "error", data: "Já existe categoria com este nome."} });
            
            const category = await Category.create({
                name,
                type,
                icon
            })

            return res.json({category, message: { type: "success", data: "Categoria cadastrada com sucesso"}})

        } catch (error) {
            return res.status(500).json({ message: { type: "error", data: "Error ao cadastrar categoria"} });
        }
    }

    if (method === "GET") {
        try {
            const categories = await Category.find({})
            
            return res.json(categories)
        } catch (error) {
            return res.status(500).json({ message: { type: "error", data: "Error ao buscar categorias"} });
        }
    }
         
} 