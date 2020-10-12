import { Router } from "express";
import { container } from "tsyringe";
import {PlayerStatusController} from "../../controllers/game-controllers/player-status.controller";


const playerStatusAdminRouter = Router();
const playerStatusUserRouter = Router();
const playerStatusController = container.resolve(PlayerStatusController);

playerStatusUserRouter.get("/", playerStatusController.get);
playerStatusUserRouter.get("/:id", playerStatusController.getById);
playerStatusAdminRouter.post("/", playerStatusController.post);
playerStatusAdminRouter.delete("/:id", playerStatusController.remove);

export {playerStatusAdminRouter, playerStatusUserRouter};