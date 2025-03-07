import { Hono } from "hono";
import { createItemController, deleteItemController, fetchItemController, updateItemController } from "../controller/itemsController.js";

const itemRoute = new Hono()
.get("", fetchItemController)
.post('/', createItemController)
.put('/:id', updateItemController)
.delete('/:id', deleteItemController)


export default itemRoute


// import { db } from "../db/index.js";
// import { items } from "../db/schema.js";
// import { eq } from "drizzle-orm";

// const fetchAllItems = async () => {
//     return await db.select({name: items.name, id: items.id}).from(items)
// }

// const createItem = async (name: string) => {
//     return await db.insert(items).values({name}).returning({id: items.id});
// }

// const itemsRouter = new Hono()
//     .get('/', async (c)=>{
//     try{
//         const allItems = await fetchAllItems();
//         return c.json(allItems);
//     }
//     catch(error){
//         return c.json({errror: 'Failed to fetch items'}, 500); 
//     }
// })
// .post('/', zValid async(c)=>{
//     try{
//         const body = await c.req.json<{name:string}>();
//         const newItem = await createItem(body.name);
//         return c.json(newItem);
//     }
//     catch(error){
//         console.log(error);
//         return c.json({error: 'Failed to create an item '}, 500);
//     }
// })
// .put('/:id', async(c)=>{
//     try {
//         const id =Number(c.req.param('id'));
//         const body = await c.req.json<{name:string}>();
//         const [updatedItem]= await db.update(items).set({name:body.name}).where(eq(items.id, id)).returning();
//         return c.json(updatedItem);
//     }
//     catch(error){
//         return c.json({error: "Failed to update item"}, 500);
//     }
// })
// .delete('/:id', async(c)=> {
//     try{
//         const id = Number(c.req.param('id'));
//         const body = await c.req.json<{name:string}>();
//         const [deletedItem] = await db.delete(items).where(eq(items.id, id )).returning();
//         return c.json(deletedItem);
//     }
//     catch(error){
//         return c.json({error: "Failed to delete item"}, 500);
//     }
// })

// export default itemsRouter;