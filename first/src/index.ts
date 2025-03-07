import {Hono} from 'hono'
import { connectDB } from './config/index.js';
import itemsRouter from './routes/index.js';
import { serve } from '@hono/node-server';


const app =new Hono();
const port =3001;

connectDB();

app.route('/items', itemsRouter)

serve( {fetch:app.fetch, port}, ()=>{
  console.log(`Server is running on port ${port}`)
})

export default app;











// import { Hono } from "hono";
// import { serve } from "@hono/node-server";

// const app =new Hono();
// const port =3001;
// let items :{id:number, name:string}[]=[];
// let nextId=1;
// //getting items created...
// app.get('/items',(c)=>{
//   return c.json(items);
// })
// //creating items ....
// app.post('/items', async(c)=>{
//   const item = await c.req.json<{ name: string; }>();
//   console.log(item)
//   const newItem={id:nextId++, name:item.name};
//   items.push(newItem);
// return c.json(newItem);
// })
// //updating items...
// app.put('/items/:id', async(c)=>{
//   const id =parseInt(c.req.param('id'));
//   const item = await c.req.json<{name:string;}>();
//   const index= items.findIndex((i)=>i.id===id);
//   if(index===-1){
//     return c.json({error:'Item not found'})
//   }
//   items[index].name=item.name;
//   return c.json(items[index])
// })

// //deleting items...
// app.delete('/items/:id', async (c)=>{
//   const id = parseInt(c.req.param('id'));
//   const index = items.findIndex((i)=>i.id===id);
//   if(index===-1){
//     return c.json({error:'Item not found'});
//   }
//   items.splice(index, 1);
// })

// //trying html returning 
// const View=()=>{
//   return `<html><body><h1>This is my first try</h1></body></html>`

// }
// app.get('/',(c)=>{
//   return c.html(View())
// })//.....Returning a html 
// // app.get('/', (c)=>{
// //   return c.text('Hey this is my first try')
// // })
 




