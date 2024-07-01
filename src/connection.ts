import mongoose from "mongoose";

const mongoHost = process.env.MONGO_HOST;
const mongoPort = process.env.MONGO_PORT;
const database = process.env.MONGO_DATABASE;

export const connectToDatabase = async () => {
    try{
        const connectionString = `mongodb://${mongoHost}:${mongoPort}/${database}`;
        console.log(`Connection string: ${connectionString}`)
        await mongoose.connect(connectionString);
        console.log('Connected to database.');
    }
    catch(err) {
        console.log(err);
    }
};