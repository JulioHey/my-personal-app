import { Router } from "express";
import { container } from "tsyringe";
import {RoundController} from "../../controllers/game-controllers/round.controller";


const roundUserRouter = Router();
const roundAdminRouter = Router();
const roundController = container.resolve(RoundController);

roundUserRouter.get("/", roundController.get);
roundUserRouter.get("/:id", roundController.getById);
roundAdminRouter.post("/", roundController.post);
roundAdminRouter.delete("/:id", roundController.remove);
roundAdminRouter.put("/:id", roundController.update);

export {roundUserRouter, roundAdminRouter};