import { Router } from "express";
import { container } from "tsyringe";
import {TeamController} from "../../controllers/game-controllers/team.controller";


const teamUserRouter = Router();
const teamAdminRouter = Router();
const teamController = container.resolve(TeamController);

teamUserRouter.get("/", teamController.get);
teamUserRouter.get("/:id", teamController.getById);
teamAdminRouter.post("/", teamController.post);
teamAdminRouter.delete("/:id", teamController.remove);

export {teamUserRouter, teamAdminRouter};