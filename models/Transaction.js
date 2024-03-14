import { model, Schema, models } from "mongoose"

const TransactionSchema = new Schema ({
    name: { type: String, lowercase: true, required: true },
    icon: { type: String, lowercase: true, required: true },
    type: { type: String, lowercase: true, required: true },
    accountValue: { type: Number, required: true },
    date: { type: Date, required: true },
    doc: { type: Array },
    inInstallments: { type: Boolean },
    recurrent: { type: Boolean },
    paid: { type: Boolean },
    inInstallmentsQtt: { type: Number },
    inInstallmentValue: { type: Number },
    inInstallmentNumber: { type: Number },
    hash: { type: String },
}, {
    timestamps: true,
});

export const Transaction = models.Transaction || model('Transaction', TransactionSchema);