import { Router } from "express";
import { container } from "tsyringe";
import ChampionController from "../../controllers/game-controllers/champion.controller";


const championRoutes = Router();
const championController = container.resolve(ChampionController);

championRoutes.get("/", championController.get);
championRoutes.get("/:id", championController.getById);
championRoutes.post("/", championController.post);
championRoutes.delete("/:id", championController.remove);

export default championRoutes;