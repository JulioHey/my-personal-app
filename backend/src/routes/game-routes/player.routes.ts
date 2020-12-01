import { Router } from "express";
import { container } from "tsyringe";
import {PlayerController} from "../../controllers/game-controllers/player.controller";


const playerUserRouter = Router();
const playerAdminRouter = Router();
const playerController = container.resolve(PlayerController);

playerUserRouter.get("/", playerController.get);
playerUserRouter.post("/team", playerController.get);
playerUserRouter.get("/:id", playerController.getById);
playerAdminRouter.post("/", playerController.post);
playerAdminRouter.delete("/:id", playerController.remove);
playerAdminRouter.put("/:id", playerController.update);

export {playerUserRouter, playerAdminRouter};