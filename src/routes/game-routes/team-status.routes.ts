import { Router } from "express";
import { container } from "tsyringe";
import {TeamStatusController} from "../../controllers/game-controllers/team-status.controller";


const teamStatusRouter = Router();
const teamStatusController = container.resolve(TeamStatusController);

teamStatusRouter.get("/", teamStatusController.get);
teamStatusRouter.get("/:id", teamStatusController.getById);
teamStatusRouter.post("/", teamStatusController.post);
teamStatusRouter.delete("/:id", teamStatusController.remove);

export {teamStatusRouter};