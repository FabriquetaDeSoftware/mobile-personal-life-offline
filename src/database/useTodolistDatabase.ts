import { useSQLiteContext } from 'expo-sqlite';

export enum TodoStatus {
  Pending = 'pending',
  Completed = 'completed',
  Trash = 'trash',
}

export interface todoListDatabase {
  id: number;
  content: string;
  status: TodoStatus;
}

export function useTodoListDatabase() {
  const database = useSQLiteContext();

  async function create(data: Omit<todoListDatabase, 'id'>) {
    const query = /* sql */ `
      INSERT INTO todoList (content, status)
      VALUES (?, ?);
    `;

    const statement = await database.prepareAsync(query);

    try {
      const result = await statement.executeAsync([data.content, data.status]);

      const insertedRowId = result.lastInsertRowId.toLocaleString();

      return { insertedRowId };
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function read(status: TodoStatus) {
    const query = /* sql */ `
        SELECT *
        FROM todoList
        WHERE status = ?;
      `;

    try {
      const result = await database.getAllAsync<todoListDatabase>(query, [
        status,
      ]);

      return result;
    } catch (error) {
      throw error;
    }
  }

  async function update() {}

  async function remove() {}

  return { create, read, update, remove };
}
