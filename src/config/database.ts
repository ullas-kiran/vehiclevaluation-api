import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: ':memory:', 
  entities: ['src/models/*.ts'],
  synchronize: true,
  logging: false,
});