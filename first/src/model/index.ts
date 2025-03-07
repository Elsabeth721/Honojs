import mongoose from "mongoose";

const itemsSchema = new mongoose.Schema({
    name:{type:String, required:true}
})

export const Item=mongoose.model('Item', itemsSchema);