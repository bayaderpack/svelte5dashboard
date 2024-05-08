import { promises as fs } from 'fs';
import { drizzle, type BetterSQLite3Database } from 'drizzle-orm/better-sqlite3'
import { env } from '$env/dynamic/private'
import Database from 'better-sqlite3'

const file = await fs.readFile(process.cwd() + env.DB_PATH, 'utf8');
const sqlite = new Database(file)
// export const db: BetterSQLite3Database = drizzle(sqlite)
export const db: BetterSQLite3Database = drizzle(sqlite)
