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
    const statement = await database.prepareAsync(/* sql */ `
        INSERT INTO todoList (content, status)
        VALUES (?, ?);
    `);

    try {
      const result = await statement.executeAsync([data.content, data.status]);

      const id = result.lastInsertRowId.toLocaleString();

      return { id };
    } catch (error) {
      throw error;
    }
  }

  async function read() {}

  async function update() {}

  async function remove() {}

  return { create, read, update, remove };
}
