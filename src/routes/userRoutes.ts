import Routes from "../utilities/Routes";
import userController from "../controllers/userController";

class UserRoutes extends Routes {
  constructor() {
    super();

    this.getUserLikes();
    this.getUser();
    this.createUser();
    this.deleteMovie();

    // Always at last
    this.urlNotFound();
  }

  public getUserLikes = () => {
    this.router.get("/:idUser/movies", userController.getUserLikes);
  };

  public getUser = (): void => {
    this.router.get("/:id", userController.getSingleResource);
  };

  public createUser = (): void => {
    this.router.post("/", userController.createResource);
  };

  public deleteMovie = (): void => {
    this.router.delete("/:id", userController.deleteResource);
  };
}

const userRoutes = new UserRoutes();
export default userRoutes.router;
