import { Router } from "express";
import { container } from "tsyringe";
import {TeamMatchController} from "../../controllers/game-controllers/team-match.controller";


const teamMatchRouter = Router();
const teamMatchController = container.resolve(TeamMatchController);

teamMatchRouter.get("/", teamMatchController.get);
teamMatchRouter.get("/:id", teamMatchController.getById);
teamMatchRouter.post("/", teamMatchController.post);
teamMatchRouter.delete("/:id", teamMatchController.remove);

export {teamMatchRouter};