import mongoose, { Schema } from "mongoose";

const expenseSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }});

export const Expense = mongoose.model('Expense', expenseSchema);