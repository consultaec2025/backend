import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

if (process.env.NODE_ENV === 'local') {
  dotenv.config({ path: './env/local.env' });
}

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'consulta',
  entities: [__dirname + '/../../../**/*.entity{.ts,.js}'],
  synchronize: false,
  schema: process.env.DATABASE_SCHEMA,
  migrationsRun: true,
  migrationsTableName: 'migration_todo',
  migrations: [__dirname + '/../../../../database/migrations/*{.ts,.js}'],
  // ssl: {
  //   rejectUnauthorized: false,
  // },
};

console.log(config);

export const connectionSourse = new DataSource(config);
