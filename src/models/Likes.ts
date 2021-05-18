import { DataTypes } from "sequelize";
import sequelize from "../utilities/DBInstance";
import { User } from "../models/Users";
import { Movie } from "../models/Movies";

export interface MovieAttributes {
  id: number;
  idUser: number;
  idMovie: number;
}

export const Like = sequelize.define("Movies", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  id_user: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
  id_movie: {
    type: DataTypes.INTEGER,
    references: {
      model: Movie,
      key: "id",
    },
  },
});