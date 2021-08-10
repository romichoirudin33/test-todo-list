"use strict";

// import sequelize
import { Sequelize } from "sequelize";
import db from "../config/database.js";
const { DataTypes } = Sequelize;

// Define schema
const Activity = db.define(
  "Activities",
  {
    name: DataTypes.STRING,
    check: DataTypes.BOOLEAN,
    todoId: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);

export default Activity;
