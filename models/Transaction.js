import { model, Schema, models } from "mongoose"

const TransactionSchema = new Schema ({
    name: { type: String, lowercase: true, required: true },
    icon: { type: String, lowercase: true, required: true },
    type: { type: String, lowercase: true, required: true },
    accountValue: { type: Number, required: true },
    date: { type: Date, required: true },
    doc: { type: Array, required: true },
    inInstallments: { type: Boolean, required: true },
    recurrent: { type: Boolean, required: true },
    inInstallmentsQtt: { type: Number },
    paid: { type: Boolean, required: true },
}, {
    timestamps: true,
});

export const Transaction = models.Transaction || model('Transaction', TransactionSchema);