import { useSQLiteContext } from 'expo-sqlite';

export enum TodoStatus {
  Pending = 'pending',
  Completed = 'completed',
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

  async function update(
    id: number,
    data: Partial<Omit<todoListDatabase, 'id'>>
  ) {
    const updates = [];
    const values = [];

    if (data.content) {
      updates.push('content = ?');
      values.push(data.content);
    }

    if (data.status) {
      updates.push('status = ?');
      values.push(data.status);
    }

    values.push(id);

    const query = /* sql */ `
      UPDATE todoList
      SET ${updates.join(', ')}
      WHERE id = ?;
    `;

    const statement = await database.prepareAsync(query);
    try {
      const result = await statement.executeAsync(values);

      return result;
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function remove(id: number) {
    const query = /* sql */ `
      DELETE FROM todoList
      WHERE id = ?;
    `;

    const statement = await database.prepareAsync(query);
    try {
      await statement.executeAsync([id]);

      return { success: true };
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  return { create, read, update, remove };
}
