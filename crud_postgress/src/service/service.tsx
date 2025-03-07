import { db } from "../database/index.js"
import { createItem, deleteItem, fetchItem, updateItem } from "../models/items.js"

export const fetchAnItem = async ()=>{
    return await fetchItem()
} 
export const createAnItem = async(name: string, email: string)=>{
    const existingItem = await db.query.items.findFirst({
        where: (item, {eq})=>eq(item.email, email)
    });
    if (existingItem){
        throw new Error('Email already exist, Use another')
    }

    return await createItem(name, email)
}
export const updateAnItem  = async ( id: number, name: string, email: string)=>{
    return await updateItem(id, name, email)
}
export const deleteAnItem = async(id:number)=>{
    return  await deleteItem(id)
}


