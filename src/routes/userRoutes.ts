import Routes from "../utilities/Routes";
import userController from "../controllers/userController";

class UserRoutes extends Routes {
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
}

const userRoutes = new UserRoutes();
export default userRoutes.router;
