import { type SQLiteDatabase } from 'expo-sqlite';

export async function initializeDatabase(database: SQLiteDatabase) {
  await database.execAsync(/* sql */ `
    CREATE TABLE IF NOT EXISTS todoList (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        content TEXT NOT NULL,
        status TEXT NOT NULL CHECK(status IN ('pending', 'completed'))
    );

    CREATE TABLE IF NOT EXISTS financeAccount (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        balance REAL NOT NULL
    );
`);
}
