import { Database } from "bun:sqlite";
import { mkdirSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const path = resolve(process.env.SQLITE_DB_PATH || "./data/scolarite.sqlite");
mkdirSync(dirname(path), { recursive: true });

const db = new Database(path);
db.exec("PRAGMA foreign_keys = ON;");
db.exec(readFileSync(resolve("db/schema.sql"), "utf8"));

console.log("Base initialisée :", path);
db.close();