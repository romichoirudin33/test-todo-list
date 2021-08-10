// Import express
import express from "express";
import cors from "cors";
// Import connection
import db from "./config/database.js";
import dotenv from "dotenv";
import Router from "./routes/routes.js";
// const dotenv = require("dotenv").config();

// Init express
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Testing database connection
try {
  await db.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// use router
app.use(Router);

// listen on port
app.listen(process.env.APP_PORT, () =>
  console.log(
    "Server running at " + process.env.APP_HOST + ":" + process.env.APP_PORT
  )
);
