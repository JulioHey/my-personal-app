import { Router } from "express";
import { container } from "tsyringe";
import {MatchDragonController} from "../../controllers/game-controllers/match-dragon.controller";


const matchDragonUserRouter = Router();
const matchDragonAdminRouter = Router();
const matchDragonController = container.resolve(MatchDragonController);

matchDragonUserRouter.get("/", matchDragonController.get);
matchDragonUserRouter.get("/:id", matchDragonController.getById);
matchDragonAdminRouter.post("/", matchDragonController.post);
matchDragonAdminRouter.delete("/:id", matchDragonController.remove);

export {matchDragonUserRouter, matchDragonAdminRouter};