import { DataTypes } from "sequelize";
import sequelize from "../utilities/DBInstance";
import Category from "../models/Category";
import User from "./Users";
import Like from "./Likes";

export interface MovieAttributes {
  id: number;
  idCategory: number;
  name: string;
  releaseYear: number;
  coverPhoto: string;
}

const Movie = sequelize.define("Movies", {
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

Category.hasOne(Movie, { foreignKey: "id" });
Movie.belongsTo(Category, { foreignKey: "id_category" });

export default Movie;
