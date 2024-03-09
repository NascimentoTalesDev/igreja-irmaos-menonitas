import fs from 'fs';
import path from 'path';

export default function Download ( req, res, next ) {
    
    const { method } = req; 
    
    if (method === "GET"){

        const filePath = path.join(process.cwd(), '/download/arquivo.pdf');
        const fileStream = fs.createReadStream(filePath);

        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Disposition', 'attachment; filename=arquivo.pdf');

        fileStream.pipe(res); 
    }
}





// const filePath = path.join(process.cwd(), '/download/arquivo.pdf');
//         const fileStream = fs.createReadStream(filePath);

//         res.setHeader('Content-Type', 'text/plain');
//         res.setHeader('Content-Disposition', 'attachment; filename=arquivo-a-baixar.txt');

//         fileStream.pipe(res);


// try {
//     const response = await axios.get(`${api}/${versionApi}/download`, {
//       responseType: 'blob',
//       });
    
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = window.document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', 'arquivo-a-baixar.pdf'); // Nome do arquivo a ser baixado
//       window.document.body.appendChild(link);
//       link.click();
//   } catch (error) {
//     console.error('Erro ao baixar o arquivo:', error);
//   }