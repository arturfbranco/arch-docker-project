import mongoose from "mongoose";

const mongoHost = process.env.MONGO_HOST || "localhost";
const mongoPort = process.env.MONGO_PORT || 27017;

export const connectToDatabase = async () => {
    try{
        await mongoose.connect(`mongodb://${mongoHost}:${mongoPort}/admin`);
        console.log('Connected to database.');
    }
    catch(err) {
        console.log(err);
    }
};