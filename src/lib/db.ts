import { DataSource } from "typeorm";
import { DB_HOST_DEV, DB_NAME_DEV, DB_PASSWORD_DEV, DB_USERNAME_DEV } from "../config/envs.js";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST_DEV,
  port: 5432,
  username: DB_USERNAME_DEV,
  password: DB_PASSWORD_DEV,
  database: DB_NAME_DEV,
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: []
})
