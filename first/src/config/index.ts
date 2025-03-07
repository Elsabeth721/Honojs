import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URL= process.env.MONGO_URL || "";

 export const connectDB= async ()=>{
    try{
        await mongoose.connect(MONGO_URL);
        console.log('Connected to the database');
    }
    catch(error){
        console.log('Error connecting to the database', error);
        process.exit(1);
    }
}