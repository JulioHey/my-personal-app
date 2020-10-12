import { Router } from "express";
import { container } from "tsyringe";
import {TeamMatchController} from "../../controllers/game-controllers/team-match.controller";


const teamMatchUserRouter = Router();
const teamMatchAdminRouter = Router();
const teamMatchController = container.resolve(TeamMatchController);

teamMatchUserRouter.get("/", teamMatchController.get);
teamMatchUserRouter.get("/:id", teamMatchController.getById);
teamMatchAdminRouter.post("/", teamMatchController.post);
teamMatchAdminRouter.delete("/:id", teamMatchController.remove);

export {teamMatchUserRouter, teamMatchAdminRouter};