"use strict";

// import sequelize
import { Sequelize } from "sequelize";
import db from "../config/database.js";
const { DataTypes } = Sequelize;

// Define schema
const Todo = db.define(
  "Todos",
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Todo;
