import { Router } from "express";
import { container } from "tsyringe";
import {PlayerMatchController} from "../../controllers/game-controllers/player-match.controller";


const playerMatchRouter = Router();
const playerMatchController = container.resolve(PlayerMatchController);

playerMatchRouter.get("/", playerMatchController.get);
playerMatchRouter.get("/:id", playerMatchController.getById);
playerMatchRouter.post("/", playerMatchController.post);
playerMatchRouter.delete("/:id", playerMatchController.remove);

export {playerMatchRouter};