import { Router } from "express";
import { container } from "tsyringe";
import {TeamDragonController} from "../../controllers/game-controllers/team-dragon.controller";


const teamDragonRouter = Router();
const teamDragonController = container.resolve(TeamDragonController);

teamDragonRouter.get("/", teamDragonController.get);
teamDragonRouter.get("/:id", teamDragonController.getById);
teamDragonRouter.post("/", teamDragonController.post);
teamDragonRouter.delete("/:id", teamDragonController.remove);

export {teamDragonRouter};