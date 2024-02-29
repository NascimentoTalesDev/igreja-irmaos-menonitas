import { mongooseConnect } from "@/lib/mongoose";
import { Document } from "@/models/Document";

export default async function Documents(req, res){
    await mongooseConnect();
    const { method } = req; 
    
    if (method === "POST"){
        console.log("DOCUMENTS");

        const {userId} = req.query
        const {name, date, description} = req.body;

        console.log(userId, name, date, description);
        
        if (!name) return res.status(422).json({ message: { type: "error", data: "Nome não pode ficar vazio"} });
        if (!date) return res.status(422).json({ message: { type: "error", data: "Data não pode ficar vazia"} });
        if (!description) return res.status(422).json({ message: { type: "error", data: "Descrição não pode ficar vazia"} });
                
        try {            
            const documentExists = await Document.findOne({ name })
            if(documentExists) return res.status(401).json({ message: { type: "error", data: "Já existe documento com este nome."} });

            const document = await Document.create({
                name,
                date,
                description,
                user: userId
            })

            return res.json({ document, message: { type: "success", data: "Documento registrado com sucesso" }  })

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: { type: "error", data: "Aconteceu um erro inesperado" } });
        }
    }

    if (method === "GET"){
                
        try {            
            const rules = await Rule.find({ })

            return res.json(rules)

        } catch (error) {
            return res.status(500).json({ message: { type: "error", data: "Aconteceu um erro inesperado" } });
        }
    }
}