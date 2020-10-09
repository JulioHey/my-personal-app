import { Router } from "express";
import { container } from "tsyringe";
import {PlayerStatusController} from "../../controllers/game-controllers/player-status.controller";


const playerStatusRouter = Router();
const playerStatusController = container.resolve(PlayerStatusController);

playerStatusRouter.get("/", playerStatusController.get);
playerStatusRouter.get("/:id", playerStatusController.getById);
playerStatusRouter.post("/", playerStatusController.post);
playerStatusRouter.delete("/:id", playerStatusController.remove);

export {playerStatusRouter};