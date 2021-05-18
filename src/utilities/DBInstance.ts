import dotenv from "dotenv";
import { Sequelize } from "sequelize";

class SequelizeInstance {
  public sqInstance: Sequelize;

  constructor() {
    dotenv.config();

    const dbName = String(process.env.DB);
    const dbUser = String(process.env.DBUSER);
    const dbPasswd = String(process.env.PASSWORD);

    this.sqInstance = new Sequelize(dbName, dbUser, dbPasswd, {
      host: "localhost",
      dialect: "mysql",
      define: {
        timestamps: false,
      },
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    });
  }
}
const sequelizeInstance = new SequelizeInstance().sqInstance;
export default sequelizeInstance;
