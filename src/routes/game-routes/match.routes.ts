import { Router } from "express";
import { container } from "tsyringe";
import {MatchController} from "../../controllers/game-controllers/match.controller";


const matchUserRouter = Router();
const matchAdminRouter = Router();
const matchController = container.resolve(MatchController);

matchUserRouter.get("/", matchController.get);
matchUserRouter.get("/:id", matchController.getById);
matchAdminRouter.post("/", matchController.post);
matchAdminRouter.delete("/:id", matchController.remove);
matchAdminRouter.put("/:id", matchController.update);

export {matchUserRouter, matchAdminRouter};