import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// create connection
dotenv.config();
const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DRIVER,
  }
);

export default db;
