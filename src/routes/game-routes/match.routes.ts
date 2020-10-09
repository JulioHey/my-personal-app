import { Router } from "express";
import { container } from "tsyringe";
import {MatchController} from "../../controllers/game-controllers/match.controller";


const matchRouter = Router();
const matchController = container.resolve(MatchController);

matchRouter.get("/", matchController.get);
matchRouter.get("/:id", matchController.getById);
matchRouter.post("/", matchController.post);
matchRouter.delete("/:id", matchController.remove);

export {matchRouter};