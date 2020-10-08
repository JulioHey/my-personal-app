import { Router } from "express";
import { container } from "tsyringe";
import PlayerMatchController from "../../controllers/game-controllers/player-match.controller";


const playerMatchRoutes = Router();
const playerMatchController = container.resolve(PlayerMatchController);

playerMatchRoutes.get("/", playerMatchController.get);
playerMatchRoutes.get("/:id", playerMatchController.getById);
playerMatchRoutes.post("/", playerMatchController.post);
playerMatchRoutes.delete("/:id", playerMatchController.remove);

export default playerMatchRoutes;