import Routes from "../utilities/Routes";
import movieController from "../controllers/movieController";

class MovieRoutes extends Routes {
  constructor() {
    super();

    this.getMovie();
    this.createMovie();
    this.updateMovie();

    // Always at last
    this.urlNotFound();
  }

  public getMovie = (): void => {
    this.router.get("/", movieController.getSingleResource);
  };

  public createMovie = (): void => {
    this.router.post("/", movieController.createResource);
  };

  public updateMovie = (): void => {
    this.router.put("/:id", movieController.updateResource);
  };
}

const movieRoutes = new MovieRoutes();
export default movieRoutes.router;
