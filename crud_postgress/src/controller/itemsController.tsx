import { fetchAnItem, updateAnItem } from "../service/service.js"
import type { Context } from 'hono'
import * as itemService from '../service/service.js'
import { itemSchema } from "../validator/zodValidator.js"
import { HTTPException } from "hono/http-exception"

export const fetchItemController = async (c: Context) => {
    const items = await itemService.fetchAnItem()
    return c.json(items);
}

export const createItemController = async (c: Context) => {
    try {
        const body = await c.req.json();
        const validatation = itemSchema.safeParse(body);
        // do not return every error use global error handling 
        if (!validatation.success) {
            // return c.json({ error: validatation.error.format() }, 400)
            throw new HTTPException(400, {message: "validation Failed", cause: validatation.error.errors});
        }
        const item = await itemService.createAnItem(body.name, body.email);
        return c.json(item, 201);
    }
    catch (error) {
        // return c.json({ success: false, error: (error as Error).message })// .....this error is mentioned in from the service error 
        if (error instanceof HTTPException) {
            throw error;
        }
        throw new HTTPException(500, {message: "Internal Server Error", cause:error})
    }
}

export const updateItemController = async (c: Context) => {
    try {
        const body = await c.req.json();
        // const id = c.req.param("id")
        const validatation = itemSchema.safeParse(body);
        if (!validatation.success) {
            // return c.json({ error: validatation.error.format() }, 400)
            throw new HTTPException (400, {message: "Validation Failed", cause: validatation.error.format()})
        }
        const item = await itemService.updateAnItem(body.id, body.name, body.email);
        return c.json(item);
    }
    catch (error) {
        // return c.json({ error: 'Item not found' }, 404)
        throw new HTTPException(404, {message: 'Item not Found', cause: error})
    }

}

export const deleteItemController = async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        const item = await itemService.deleteAnItem(id);
        return c.json({ message: "Deleted successfully" })
    }
    catch (error) {
        throw new HTTPException(404, {message: 'Item not Found', cause: error})
    }
}