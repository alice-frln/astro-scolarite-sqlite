import { Database } from "bun:sqlite";
import { mkdirSync, readFileSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("SQLite-compatible wrapper for this project.");
  console.log("Usage: sqlite3 <dbfile> \".read <schema.sql>\"");
  process.exit(0);
}

const dbPath = resolve(args[0]);
mkdirSync(dirname(dbPath), { recursive: true });
const db = new Database(dbPath);

db.exec("PRAGMA foreign_keys = ON;");

const rawCommand = args[1] ?? "";
const command = rawCommand.trim().split(/\s+/)[0] ?? "";
const sqlArg = rawCommand.trim().split(/\s+/).slice(1).join(" ") || "db/schema.sql";

if (command === ".read") {
  const sqlFile = resolve(sqlArg);
  if (!existsSync(sqlFile)) {
    console.error(`Fichier SQL introuvable: ${sqlFile}`);
    db.close();
    process.exit(1);
  }

  const sql = readFileSync(sqlFile, "utf8");
  db.exec(sql);
  console.log(`Base initialisée : ${dbPath}`);
  db.close();
  process.exit(0);
}

if (command === ".tables") {
  const rows = db
    .query("SELECT name FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%' ORDER BY name")
    .all();

  for (const row of rows) {
    console.log(row.name);
  }

  db.close();
  process.exit(0);
}

if (command === ".quit" || command === ".exit") {
  db.close();
  process.exit(0);
}

console.log(`Commande non prise en charge: ${rawCommand}`);
db.close();
process.exit(1);
