import { mongooseConnect } from "@/lib/mongoose";
import { Document } from "@/models/Document";
import bcrypt from "bcrypt"
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";
const bucketName = "igreja-irmaos-menonitas"

export default async function DocumentId(req, res, next) {
    await mongooseConnect()
    const { method } = req

    const client = new S3Client({
        region: 'sa-east-1',
        credentials: {
            accessKeyId: process.env.S3_ACCESS_KEY,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        }
    });

    if (method === "DELETE") {
        const { id } = req.query

        try {
            const document = await Document.findById(id)
            
            let ima = document?.doc[0]?.split('.com/')[1]
            console.log(ima);
            if (ima) {
                await client.send(new DeleteObjectCommand ({
                    Bucket: bucketName,
                    Key: ima
                }))
            }
                    
            await document.deleteOne()

            return res.json({message: { type: "success", data: "Documento excluido com sucesso" } })
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