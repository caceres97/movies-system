import { DataTypes } from "sequelize";
import sequelize from "../utilities/DBInstance";

export interface UserAttributes {
  id: number;
  name: string;
  username: string;
  passwd: string;
  type: number;
}

const User = sequelize.define("Users", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  name: DataTypes.STRING(120),
  username: DataTypes.STRING(64),
  passwd: DataTypes.STRING(500),
  type: DataTypes.STRING(1),
});

export default User;
