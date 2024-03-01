import multiparty from "multiparty";
import fs from "fs"
import { PutObjectCommand, S3Client, DeleteObjectCommand, GetObjectAclCommand } from "@aws-sdk/client-s3";
import mime from "mime-types"

const bucketName = "igreja-irmaos-menonitas"

export default async function handle(req, res) {
    const { method } = req
    
    const client = new S3Client({
        region: 'sa-east-1',
        credentials: {
            accessKeyId: process.env.S3_ACCESS_KEY,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        }
    });

    
    if (method === "POST") {

        const form = new multiparty.Form();
        const {fields, files } = await new Promise((resolve, reject) => {
            form.parse(req, (err, fields, files) => {
                if(err) reject(err);
                resolve({fields, files});
            });
        });
    
        const links = [];
        
        for (const file of files.file) {
            const ext = file.originalFilename.split('.').pop();
            const newFileName = Date.now() + '.' + ext;

            await client.send(new PutObjectCommand({
                Bucket: bucketName,
                Key: newFileName,
                Body: fs.readFileSync(file.path),
                ACL: 'public-read', 
                ContentType: mime.lookup(file.path)
            }));
            
            const link = `https://${bucketName}.s3.amazonaws.com/${newFileName}`
            links.push(link)
        }
        return res.json({ links })
    }

    if (method === "DELETE") {

        const { image } = req.query;
        let ima = image.split('.com/')[1]

        try {
            const resp = await client.send(new DeleteObjectCommand ({
                Bucket: bucketName,
                Key: ima
            }))

            return res.send({ resp, deleted: true })
        } catch (error) {
            return res.status(500).json({ message: {type: "error", data: "Aconteceu um erro inesperado"}})
        }
    }
}

export const config = {
    api: {bodyParser: false}
}