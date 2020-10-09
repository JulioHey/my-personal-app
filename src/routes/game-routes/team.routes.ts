import { Router } from "express";
import { container } from "tsyringe";
import {TeamController} from "../../controllers/game-controllers/team.controller";


const teamRouter = Router();
const teamController = container.resolve(TeamController);

teamRouter.get("/", teamController.get);
teamRouter.get("/:id", teamController.getById);
teamRouter.post("/", teamController.post);
teamRouter.delete("/:id", teamController.remove);

export {teamRouter};