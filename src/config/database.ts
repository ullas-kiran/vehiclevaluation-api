import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: ':memory:', // In-memory SQLite
  entities: ['src/models/*.ts'],
  synchronize: true, // Auto-create tables (development only)
  logging: false,
});