import { useSQLiteContext } from 'expo-sqlite';

export enum TodoStatus {
  Pending = 'pending',
  Completed = 'completed',
  Trash = 'trash',
}

interface todoListDatabase {
  id: number;
  content: string;
  status: TodoStatus;
}

export async function useTodoListDatabase() {
  const database = useSQLiteContext();

  async function create(data: Omit<todoListDatabase, 'id'>) {
    const query = /* sql */ `
      INSERT INTO todoList (content, status)
      VALUES (?, ?);
    `;

    const statement = await database.prepareAsync(query);

    try {
      const result = await statement.executeAsync([data.content, data.status]);

      const id = result.lastInsertRowId.toLocaleString();

      return { id };
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
      const result = await database.getAllAsync(query, [status]);

      return result;
    } catch (error) {
      throw error;
    }
  }

  async function update() {}

  async function remove() {}

  return { create, read, update, remove };
}
