import { DataTypes } from "sequelize";
import sequelize from "../utilities/DBInstance";

export const Category = sequelize.define("Categories", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  name: DataTypes.STRING(120),
});
