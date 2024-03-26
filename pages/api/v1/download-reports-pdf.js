import PdfPrinter from "pdfmake";
import fs from 'fs'

export default function downloadReportsPDF(req, res) {
    const { method } = req;

    const { startDate, endDate, chart } = req.body
    console.log(chart);
    var fonts = {
        Helvetica: {
            normal: 'Helvetica',
            bold: 'Helvetica-Bold',
            italics: 'Helvetica-Oblique',
            bolditalics: 'Helvetica-BoldOblique'
        }
    };

    const printer = new PdfPrinter(fonts);

    const definitions = {
        defaultStyle: { font: "Helvetica" },
        content: [
            { text: `${startDate} até ${endDate}`, style: 'header' },
            { text: `[receita]  [despesa]`, alignment: 'center' },
            {
                svg: `${chart}`,
                width: 100
            },
            { text: `[svg] [crescimento]`, alignment: 'center' },
            { text: `[saldo em caixa] [saldo no banco]`, alignment: 'center' },
            { text: `Principais Métricas:`, alignment: 'left' },
            { text: `Receitas`, alignment: 'left' },
            { text: `Despesas`, alignment: 'left' },
            { text: `Rendimentos`, alignment: 'left' },
            { text: `Investimentos`, alignment: 'left' },
        ],
        styles: {
            header: {
                alignment: 'center',
                fontSize: 22,
                bold: false                
            },
            anotherStyle: {
                italics: true,
                alignment: 'right'
            }
        }
    };

    const pdfDocGenerator = printer.createPdfKitDocument(definitions);
    pdfDocGenerator.pipe(fs.createWriteStream('relatorio.pdf'))
    // pdfDocGenerator.pipe(res);
    pdfDocGenerator.end();
}