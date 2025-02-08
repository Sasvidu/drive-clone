import dotenv from 'dotenv';
dotenv.config();

import { type Config } from "drizzle-kit";


if (!process.env.SINGLESTORE_HOST) throw new Error('SINGLESTORE_HOST is required');
if (!process.env.SINGLESTORE_DB_NAME) throw new Error('SINGLESTORE_DB_NAME is required');

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "mysql",
  dbCredentials: {
    host: process.env.SINGLESTORE_HOST,
    port: Number(process.env.SINGLESTORE_PORT) || 3333,
    user: process.env.SINGLESTORE_USER || 'root',
    password: process.env.SINGLESTORE_DB_PASSWORD || '',
    database: process.env.SINGLESTORE_DB_NAME,
    ssl: {}
  }
} satisfies Config;
