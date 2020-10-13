import { Router } from "express";
import { container } from "tsyringe";
import {UserTeamController} from "../../controllers/app-controllers/user-team.controller";


const userTeamRouter = Router();
const userTeamController = container.resolve(UserTeamController);

userTeamRouter.get("/", userTeamController.get);
userTeamRouter.get("/:id", userTeamController.getById);
userTeamRouter.post("/", userTeamController.post);
userTeamRouter.delete("/:id", userTeamController.remove);

export {userTeamRouter};