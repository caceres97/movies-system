import dotenv from "dotenv";
import { Sequelize } from "sequelize";

// TODO: Improve this shit
class SequelizeInstance {
  // private config: {}
  public sqInstance: Sequelize;

  constructor() {
    this.sqInstance = new Sequelize("movies_system", "poma", "poma1324", {
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
