import { Router } from "express";
import { container } from "tsyringe";
import {TeamStatusController} from "../../controllers/game-controllers/team-status.controller";


const teamStatusUserRouter = Router();
const teamStatusAdminRouter = Router();
const teamStatusController = container.resolve(TeamStatusController);

teamStatusUserRouter.get("/", teamStatusController.get);
teamStatusUserRouter.get("/:id", teamStatusController.getById);
teamStatusAdminRouter.post("/", teamStatusController.post);
teamStatusAdminRouter.delete("/:id", teamStatusController.remove);

export {teamStatusUserRouter, teamStatusAdminRouter};