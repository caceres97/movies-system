import Routes from "../utilities/Routes";
import userController from "../controllers/userController";

class MovieRoutes extends Routes {
  constructor() {
    super();

    this.getUser();
    this.createUser();

    // Always at last
    this.urlNotFound();
  }

  public getUser = (): void => {
    this.router.get("/", userController.getSingleResource);
  };

  public createUser = (): void => {
    this.router.post("/", userController.createResource);
  };

  public updateMovie = (): void => {
    this.router.post("/:id", userController.updateResource);
  };
}

const movieRoutes = new MovieRoutes();
export default movieRoutes.router;
