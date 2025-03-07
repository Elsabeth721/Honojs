import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg"; // node-postgres library used for connecting to PostgreSQL.
import * as schema from "./schema.js"

const { Pool } = pg;

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "12345678",
  database: "crud_postgres",
});

export const db = drizzle(pool, { schema });