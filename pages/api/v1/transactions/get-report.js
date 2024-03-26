import { mongooseConnect } from "@/lib/mongoose";
import { Transaction } from "@/models/Transaction";

export default async function Reports(req, res, next) {
    await mongooseConnect();
    const { method } = req;

    function firstDayOfMonth(year, month) {
        return new Date(year, month - 1, 1);
    }

    function lastDayOfMonth(year, month) {
        return new Date(year, month, 1);
    }

    if (method === "POST") {
        var actualYear = new Date().getFullYear();
        const { startDate, endDate, category } = req.body

        if (!startDate ) return res.status(422).json({ message: { type: "error", data: "Selecione uma data inicial" } });
        if (!endDate ) return res.status(422).json({ message: { type: "error", data: "Selecione uma data final" } });

        var startMonth = new Date(startDate).getMonth() + 1
        var startYear = new Date(startDate).getFullYear()

        var endMonth = new Date(endDate).getMonth() + 1
        var endYear = new Date(endDate).getFullYear()

        const diffMeses = (endYear - startYear) * 12 + (endMonth - startMonth);

        if (startYear >= endYear && endMonth < startMonth || endYear < startYear ) return res.status(422).json({ message: { type: "error", data: "Data final deve ser futura" } });
        if ( diffMeses > 12 ) return res.status(422).json({ message: { type: "error", data: "Máximo 12 meses" } });

        let months = []

        if(category){
            for (let index = 1; index <= diffMeses; index++) {
                const transactions = await Transaction.aggregate([
                    {
                        $match: {
                            $or: [
                                { name: category,  paid: true, date: { $gte: firstDayOfMonth(actualYear, startMonth), $lt: lastDayOfMonth(actualYear, startMonth) }  },
                            ]
                        }
                    },
                    {
                        $group: {
                            _id: "$name",
                            total: {
                                $sum: {
                                    $cond: {
                                        if: { $gt: ["$inInstallmentsQtt", 0] },
                                        then: "$inInstallmentValue",
                                        else: "$accountValue"
                                    }
                                }
                            },
                        }
                    },
                ]);
                months.push(transactions)
                startMonth++
    
                if (startMonth > 11) {
                    startMonth = 1
                    actualYear++
                }
            }

            return res.json(months)
            
        }

        for (let index = 1; index <= diffMeses; index++) {
            const transactions = await Transaction.aggregate([
                {
                    $match: {
                        $or: [
                            { type: "receita",  paid: true, date: { $gte: firstDayOfMonth(actualYear, startMonth), $lt: lastDayOfMonth(actualYear, startMonth) }  },
                            { $and: [{ type: "despesa" }, { paid: true }, { date: { $gte: firstDayOfMonth(actualYear, startMonth), $lt: lastDayOfMonth(actualYear, startMonth) }}] },
                        ]
                    }
                },
                {
                    $group: {
                        _id: "$type",
                        total: {
                            $sum: {
                                $cond: {
                                    if: { $gt: ["$inInstallmentsQtt", 0] },
                                    then: "$inInstallmentValue",
                                    else: "$accountValue"
                                }
                            }
                        },
                    }
                },
                {
                    $group: {
                        _id: "$type",
                        receitas: {
                            $sum: { $cond: { if: { $eq: ["$_id", "receita"] }, then: "$total", else: 0 } }
                        },
                        despesas: {
                            $sum: { $cond: { if: { $eq: ["$_id", "despesa"] }, then: "$total", else: 0 } }
                        }
                    }
                }
            ]);

            months.push(transactions)
            startMonth++

            if (startMonth > 11) {
                startMonth = 1
                actualYear++
            }
        }
        return res.json(months)
    }
}