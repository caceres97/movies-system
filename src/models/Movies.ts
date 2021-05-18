import { DataTypes } from "sequelize";
import sequelize from "../utilities/DBInstance";
import { Category } from "../models/Category";

export interface MovieAttributes {
  id: number;
  idCategory: number;
  name: string;
  releaseYear: number;
  coverPhoto: string;
}

export const Movie = sequelize.define("Movies", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  id_category: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: "id",
    },
  },
  name: DataTypes.STRING(120),
  release_year: DataTypes.INTEGER,
  cover_photo: DataTypes.STRING(500),
});
