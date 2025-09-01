import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "giftshuffle",
  password: "giftshuffle2025",
  database: "giftshufflebd",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: []
})
