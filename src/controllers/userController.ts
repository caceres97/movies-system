import Controller from "../utilities/Controller";
import { Request, Response } from "express";
import { User, UserAttributes } from "../models/Users";

class UserController extends Controller {
  constructor() {
    super("users");
  }

  getSingleResource = (req: Request, res: Response) => {
    res.send("hello");
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

  updateResource = (req: Request, res: Response) => {
    res.send("hello");
  };
}

const userController = new UserController();
export default userController;
