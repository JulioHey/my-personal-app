import { Router } from "express";
import { container } from "tsyringe";
import {ChampionController} from "../../controllers/game-controllers/champion.controller";


const championAdminRouter = Router();
const championUserRouter = Router();
const championController = container.resolve(ChampionController);

championAdminRouter.get("/", championController.get);
championAdminRouter.get("/:id", championController.getById);
championUserRouter.post("/", championController.post);
championUserRouter.delete("/:id", championController.remove);

export {championAdminRouter, championUserRouter};