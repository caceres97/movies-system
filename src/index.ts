import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import userRoutes from "./routes/userRoutes";
import movieRoutes from "./routes/movieRoutes";

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(cors());
    // this.app.use(fileUpload());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    // Middlewares
  }

  routes(): void {
    this.app.use("/users", userRoutes);
    this.app.use("/movies", movieRoutes);
  }

  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server on port " + this.app.get("port"));
    });
  }
}

const server = new Server();
server.start();
