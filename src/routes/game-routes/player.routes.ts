import { Router } from "express";
import { container } from "tsyringe";
import {PlayerController} from "../../controllers/game-controllers/player.controller";


const playerRouter = Router();
const playerController = container.resolve(PlayerController);

playerRouter.get("/", playerController.get);
playerRouter.get("/:id", playerController.getById);
playerRouter.post("/", playerController.post);
playerRouter.delete("/:id", playerController.remove);

export {playerRouter};