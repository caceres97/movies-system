import Controller from "../utilities/Controller";
import { Request, Response } from "express";
import { Movie, MovieAttributes } from "../models/Movies";
import snakecaseKeys from "snakecase-keys";

class MovieController extends Controller {
  constructor() {
    super("movies");
  }

  getSingleResource = (req: Request, res: Response) => {
    res.send("hello");
  };

  createResource = async (req: Request, res: Response) => {
    const movieData = snakecaseKeys(req.body);
    // res.send(movieData)
    try {
      const createdMovie = await Movie.create(movieData);
      if (createdMovie) {
        res.status(201).send({
          message: "Resource created successfully",
          resource: createdMovie,
        });
      } else {
        res.status(204).send({
          message: "Resource wasn't created",
          resource: createdMovie,
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "Unexpected error",
        error,
      });
    }
  };

  updateResource = async (req: Request, res: Response) => {
    try {
      if (req.params) {
        const id: number = Number(req.params.id);
        const movieData = snakecaseKeys(req.body);

        const updatedMovie = await Movie.update(movieData, {
          where: { id },
        });

        if (updatedMovie) {
          res.status(200).send({
            message: "Resource updated successfully",
            resource: updatedMovie,
          });
        } else {
          res.status(200).send({
            message: "Resource wasn't updated",
            resource: updatedMovie,
          });
        }
      } else {
        res.status(400).send({
          message: "Param 'id' expected",
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "Unexpected error",
        error,
      });
    }
  };

  deleteResource = async (req: Request, res: Response) => {
    try {
      if (req.params) {
        const id: number = Number(req.params.id);

        const deletedMovie = await Movie.destroy({
          where: { id },
        });

        if (deletedMovie) {
          res.status(200).send({
            message: "Resource deleted successfully",
            resource: deletedMovie,
          });
        } else {
          res.status(204).send({
            message: "Resource wasn't deleted",
            resource: deletedMovie,
          });
        }
      } else {
        res.status(400).send({
          message: "Param 'id' expected",
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "Unexpected error",
        error,
      });
    }
  };
}

const movieController = new MovieController();
export default movieController;
