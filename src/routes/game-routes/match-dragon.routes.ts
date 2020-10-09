import { Router } from "express";
import { container } from "tsyringe";
import {MatchDragonController} from "../../controllers/game-controllers/match-dragon.controller";


const matchDragonRouter = Router();
const matchDragonController = container.resolve(MatchDragonController);

matchDragonRouter.get("/", matchDragonController.get);
matchDragonRouter.get("/:id", matchDragonController.getById);
matchDragonRouter.post("/", matchDragonController.post);
matchDragonRouter.delete("/:id", matchDragonController.remove);

export {matchDragonRouter};