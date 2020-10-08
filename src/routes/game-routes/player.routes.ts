import { Router } from "express";
import { container } from "tsyringe";
import PlayerController from "../../controllers/game-controllers/player.controller";


const playerRoutes = Router();
const playerController = container.resolve(PlayerController);

playerRoutes.get("/", playerController.get);
playerRoutes.get("/:id", playerController.getById);
playerRoutes.post("/", playerController.post);
playerRoutes.delete("/:id", playerController.remove);

export default playerRoutes;