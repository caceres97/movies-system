import Routes from "../utilities/Routes";
import movieController from "../controllers/movieController";

class MovieRoutes extends Routes {
  constructor() {
    super();

    this.likeAction();
    this.getMovie();
    this.getMovies();
    this.createMovie();
    this.updateMovie();
    this.deleteMovie();

    // Always at last
    this.urlNotFound();
  }

  public likeAction = (): void => {
    this.router.post("/:idMovie/users/:idUser/likes", movieController.likeAction);
  };

  public getMovie = (): void => {
    this.router.get("/:id", movieController.getSingleResource);
  };

  public getMovies = (): void => {
    this.router.get("/", movieController.getResources);
  };

  public createMovie = (): void => {
    this.router.post("/", movieController.createResource);
  };

  public updateMovie = (): void => {
    this.router.put("/:id", movieController.updateResource);
  };

  public deleteMovie = (): void => {
    this.router.delete("/:id", movieController.deleteResource);
  };
}

const movieRoutes = new MovieRoutes();
export default movieRoutes.router;
