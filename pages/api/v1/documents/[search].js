import { mongooseConnect } from "@/lib/mongoose";
import { Document } from "@/models/Document";

export default async function Documents(req, res){
    await mongooseConnect();
    const { method } = req; 
    
    if (method === "GET"){
        const { search } = req.query
        const searchP = new RegExp(search, "i")
        try {            
            const documents = await Document.find({ name: { $regex: searchP } })
            return res.json(documents)
        } catch (error) {
            return res.status(500).json({ message: { type: "error", data: "Aconteceu um erro inesperado" } });
        }
    }
}