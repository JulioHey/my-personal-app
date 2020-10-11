import { Router } from 'express';
import {UserController} from '../../controllers/auth-controllers/user.controller';
import {LoginController} from '../../controllers/auth-controllers/login.controller';
import { container } from 'tsyringe';

const loginController = container.resolve(LoginController)
const userController = container.resolve(UserController)
const userRouter = Router();

userRouter.get("/", userController.get);
userRouter.get("/:id", userController.getById);
userRouter.post("/", loginController.create);
userRouter.post("/login", loginController.login);
userRouter.delete("/:id", userController.remove);

export {userRouter};