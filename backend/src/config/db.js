// Importa path, fs y better-sqlite3
import path from "path";
import fs from "fs";
import Database from "better-sqlite3";

const rutaBD = path.join(import.meta.dirname, "..", "..", "db", "examenes.db");

// Crea la carpeta db si no existe
fs.mkdirSync(path.join(import.meta.dirname, "..", "..", "db"), { recursive: true });

// Exporta la conexión a la BD
export const db = new Database(rutaBD); 