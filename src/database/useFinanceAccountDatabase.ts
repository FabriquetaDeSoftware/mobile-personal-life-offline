import { useSQLiteContext } from 'expo-sqlite';

export interface financeAccountDatabase {
  id: number;
  name: string;
  balance: number;
}

export function useFinanceAccountDatabase() {
  const database = useSQLiteContext();

  async function create(data: Omit<financeAccountDatabase, 'id'>) {
    const query = /* sql */ `
        INSERT INTO financeAccount (name, balance)
        VALUES (?, ?)
    `;

    const statement = await database.prepareAsync(query);

    try {
      const result = await statement.executeAsync([data.name, data.balance]);

      const insertedRowId = result.lastInsertRowId.toLocaleString();

      return { insertedRowId };
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function read() {
    const query = /* sql */ `
        SELECT *
        FROM financeAccount
    `;

    try {
      const result = await database.getAllAsync<financeAccountDatabase>(query);

      return result;
    } catch (error) {
      throw error;
    }
  }

  async function remove(id: number) {
    const query = /* sql */ `
      DELETE FROM financeAccount
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

  return { create, read, remove };
}
