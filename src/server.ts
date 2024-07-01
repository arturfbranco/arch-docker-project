import { json } from "body-parser";
import { connectToDatabase } from "./connection";
import express, { Request, Response, Express } from "express";
import { Expense } from "./expense";

export const main = async () => {


const servicePort = process.env.PORT;

connectToDatabase();

const app: Express = express();
app.use(json());

app.post('/register', async (req: Request, res: Response) => {

    const { description, category, amount } = req.body;

    if(!description || !category || !amount) {
        res.status(400).send('Invalid request');
    }

    const expense = new Expense({description, category, amount});

    try{
        const response = await expense.save();
        res.send({description: response.description, category: response.category, amount: response.amount});

    } catch(err) {
        res.status(500).send('Failed to register');
    }

});

app.post('/fetch', async (req: Request, res: Response) => {

    const {category} = req.body;


    const response = await Expense.find({...category && {category}}) as {description: string, category: string, amount: number}[];

    const sanitizedResponse = response.map(expense => ({description: expense.description, category: expense.category, amount: expense.amount}));
    const sum = response.reduce((acc, expense) => acc + expense.amount, 0);
    res.send({ total: `$ ${sum}`, expenses: sanitizedResponse});
});

app.listen(servicePort, () => {
    console.log(`Server running on port ${servicePort}`);
});
}