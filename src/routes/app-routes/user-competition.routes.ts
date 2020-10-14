import { Router } from "express";
import { container } from "tsyringe";
import {UserCompetitionController} from "../../controllers/app-controllers/user-competition.controller";


const userCompetitionRouter = Router();
const userCompetitionController = container.resolve(UserCompetitionController);

userCompetitionRouter.get("/", userCompetitionController.get);
userCompetitionRouter.get("/:id", userCompetitionController.getById);
userCompetitionRouter.post("/", userCompetitionController.post);
userCompetitionRouter.delete("/:id", userCompetitionController.remove);

export {userCompetitionRouter};