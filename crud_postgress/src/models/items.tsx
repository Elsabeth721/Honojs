import { db } from "../database/index.js"
import { eq } from "drizzle-orm/expressions";
import { items } from "../database/schema.js";

export const fetchItem = async ()=>{
    return await db.select({name: items.name , email:items.email}).from(items);
} 

export const createItem = async (name:string, email:string)=>{
    return  await db.insert(items).values({name, email}).returning({name:items.name, email: items.email});   
}

export const updateItem = async( id: number, name : string , email: string)=>{
    return await db.update(items).set({name, email}).where(eq(items.id, id)).returning({name:items.name, email: items.email});
}
export const deleteItem = async(id:number)=>{
    return await db.delete(items).where(eq(items.id, id)).returning();
}

