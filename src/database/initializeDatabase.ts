import { type SQLiteDatabase } from 'expo-sqlite';

export async function initializeDatabase(database: SQLiteDatabase) {
  await database.execAsync(/* sql */ `
    -- Tabela de tarefas
    CREATE TABLE IF NOT EXISTS todoList (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        content TEXT NOT NULL,
        status TEXT NOT NULL CHECK(status IN ('pending', 'completed'))
    );

    -- Tabela de contas
    CREATE TABLE IF NOT EXISTS financeAccount (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        balance REAL NOT NULL CHECK(balance >= 0)
    );

    -- -- Tabela de despesas
    -- CREATE TABLE IF NOT EXISTS expense (
    --     id INTEGER PRIMARY KEY AUTOINCREMENT,
    --     accountId INTEGER NOT NULL,
    --     description TEXT NOT NULL,
    --     createdAt TEXT NOT NULL, 
    --     type TEXT NOT NULL CHECK(type IN ('income', 'expense')),
    --     name TEXT NOT NULL,
    --     status TEXT NOT NULL CHECK(status IN ('pending', 'completed')), 
    --     FOREIGN KEY (accountId) REFERENCES account (id) ON DELETE CASCADE
    -- );
`);
}
