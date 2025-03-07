import { Hono } from "hono"
import { PORT } from "./config/env.js";
import { serve } from "@hono/node-server";
import itemRoute from "./routes/items.js";
import { HTTPException } from "hono/http-exception";

const app = new Hono();
app.route('/items', itemRoute);

app.onError((err, c)=>{
  if (err instanceof HTTPException){
    return err.getResponse();
  }
  return c.json({message: "Something went wrong"}, 500);
})


serve({
    fetch: app.fetch,
    port: 3001
  }, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
  })






// import { serve } from '@hono/node-server'
// import { Hono } from 'hono'
// import dotenv from 'dotenv'
// import itemsRouter from './routes/items.js';

// dotenv.config();
// const app = new Hono();
// app.route('/items', itemsRouter);



