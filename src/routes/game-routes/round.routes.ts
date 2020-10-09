import { Router } from "express";
import { container } from "tsyringe";
import {RoundController} from "../../controllers/game-controllers/round.controller";


const roundRouter = Router();
const roundController = container.resolve(RoundController);

roundRouter.get("/", roundController.get);
roundRouter.get("/:id", roundController.getById);
roundRouter.post("/", roundController.post);
roundRouter.delete("/:id", roundController.remove);

export {roundRouter};