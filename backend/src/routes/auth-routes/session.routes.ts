import { Router } from 'express';
import {UserController} from '../../controllers/auth-controllers/user.controller';
import {LoginController} from '../../controllers/auth-controllers/login.controller';
import { container } from 'tsyringe';

const loginController = container.resolve(LoginController);
const userController = container.resolve(UserController);
const sessionRouter = Router();

sessionRouter.get("/", userController.get);
sessionRouter.get("/:id", userController.getById);
sessionRouter.post("/", loginController.create);
sessionRouter.post("/login", loginController.login);
sessionRouter.delete("/:id", userController.remove);

export {sessionRouter};