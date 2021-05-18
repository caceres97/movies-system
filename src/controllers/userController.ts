import Controller from "../utilities/Controller";
import { Request, Response } from "express";
import User, { UserAttributes } from "../models/Users";
import Like from "../models/Likes";
import Movie from "../models/Movies";

class UserController extends Controller {
  constructor() {
    super("users");
  }

  getUserLikes = async (req: Request, res: Response) => {
    try {
      const idUser = req.params.idUser;

      const userLikes = await Like.findAll({
        where: {
          id_user: idUser,
        },
        include: [{ model: Movie, required: true }],
      });

      res.send(userLikes);
    } catch (error) {
      res.status(500).send({
        message: "Unexpected error",
        error,
      });
    }
  };
  getSingleResource = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      const movie = await User.findAll({
        where: {
          id,
        },
      });

      if (movie) {
        res.status(200).send(movie);
      } else {
        res.status(404).send({
          message: "Resource not found",
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "Unexpected error",
        error,
      });
    }
  };

  createResource = async (req: Request, res: Response) => {
    const userData = req.body as UserAttributes;
    try {
      const createdUser = await User.create(userData);
      if (createdUser) {
        res.status(201).send({
          message: "Resource created successfully",
          resource: createdUser,
        });
      } else {
        res.status(204).send({
          message: "Resource wasn't created",
          resource: createdUser,
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

        const deletedMovie = await User.destroy({
          where: { id },
        });

        if (deletedMovie) {
          res.status(200).send({
            message: "Resource deleted successfully",
            resourceId: deletedMovie,
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

const userController = new UserController();
export default userController;
