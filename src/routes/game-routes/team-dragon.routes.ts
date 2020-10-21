import { Router } from "express";
import { container } from "tsyringe";
import {TeamDragonController} from "../../controllers/game-controllers/team-dragon.controller";


const teamDragonUserRouter = Router();
const teamDragonAdminRouter = Router();
const teamDragonController = container.resolve(TeamDragonController);

teamDragonUserRouter.get("/", teamDragonController.get);
teamDragonUserRouter.get("/:id", teamDragonController.getById);
teamDragonAdminRouter.post("/", teamDragonController.post);
teamDragonAdminRouter.delete("/:id", teamDragonController.remove);
teamDragonAdminRouter.put("/:id", teamDragonController.update);

export {teamDragonUserRouter, teamDragonAdminRouter};