import { Router } from "express";
import { container } from "tsyringe";
import {ChampionController} from "../../controllers/game-controllers/champion.controller";


const championRouter = Router();
const championController = container.resolve(ChampionController);

championRouter.get("/", championController.get);
championRouter.get("/:id", championController.getById);
championRouter.post("/", championController.post);
championRouter.delete("/:id", championController.remove);

export {championRouter};