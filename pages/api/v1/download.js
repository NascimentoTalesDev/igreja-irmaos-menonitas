import fs from 'fs';
import path from 'path';

export default function Download ( req, res, next ) {
    
    const { method } = req; 
    
    if (method === "GET"){

        const filePath = path.join(process.cwd(), 'arquivo-a-baixar.pdf');
        const fileStream = fs.createReadStream(filePath);

        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Disposition', 'attachment; filename=arquivo-a-baixar.pdf');

        fileStream.pipe(res); 
    }
}