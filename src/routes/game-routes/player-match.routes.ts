import { Router } from "express";
import { container } from "tsyringe";
import {PlayerMatchController} from "../../controllers/game-controllers/player-match.controller";


const playerMatchUserRouter = Router();
const playerMatchAdminRouter = Router();
const playerMatchController = container.resolve(PlayerMatchController);

playerMatchUserRouter.get("/", playerMatchController.get);
playerMatchUserRouter.get("/:id", playerMatchController.getById);
playerMatchUserRouter.put("/:id", playerMatchController.update);
playerMatchAdminRouter.post("/", playerMatchController.post);
playerMatchAdminRouter.delete("/:id", playerMatchController.remove);

export {playerMatchAdminRouter, playerMatchUserRouter};