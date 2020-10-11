import { Router } from 'express';
import {UserPasswordController} from '../../controllers/auth-controllers/user_password.controller';
import {UserController} from '../../controllers/auth-controllers/user.controller';
import { container } from 'tsyringe';

const userPasswordController = new UserPasswordController();
const userController = container.resolve(UserController)
const userRouter = Router();

userRouter.get("/", userController.get);
userRouter.get("/:id", userController.getById);
userRouter.post("/", userPasswordController.post);
userRouter.delete("/:id", userController.remove);

export {userRouter};