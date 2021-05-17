import { Router } from "express";

class Routes {
  public router: Router = Router();

  constructor() {
    // this.urlNotFound()
  }

  // TODO: Make default components

  public urlNotFound = (message?: string): void => {
    if (!message) {
      message = "URL NOT FOUND";
    }

    this.router.all("*", (req, res) => {
      res.status(404).send(message);
    });
  };
}

export default Routes;
