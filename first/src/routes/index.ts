import { Hono } from "hono";
import { Item } from "../model/index.js";

const itemsRouter =new Hono();

itemsRouter.get('/', async (c)=>{
    const items = await Item.find();
    return c.json(items);
})

itemsRouter.post('/', async(c)=>{
    const body = await c.req.json<{name: string}>();
    const item = new Item({name:body.name});
    await item.save();
    return c.json(item);
})

itemsRouter.put('/:id', async(c)=>{
    const id = c.req.param('id');
    const body = await c.req.json<{name:string}>();
    const updatedItem= await Item .findByIdAndUpdate(id, {name:body.name}, {new:true});
    return c.json(updatedItem);
})

itemsRouter.delete('/:id', async(c)=>{
    const id =c.req.param('id');
    const body =await c.req.json<{name:string}>();
    const deletedItem= await Item.findByIdAndDelete(id);
    return c.json({message: 'Items deleted successfully '});
})


export default itemsRouter;