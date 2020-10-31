import { Router } from "express";
import { container } from "tsyringe";
import {CompetitionController} from "../../controllers/app-controllers/competition.controller";


const competitionRouter = Router();
const competitionController = container.resolve(CompetitionController);

competitionRouter.get("/", competitionController.get);
competitionRouter.get("/:id", competitionController.getById);
competitionRouter.post("/", competitionController.post);
competitionRouter.delete("/:id", competitionController.remove);
competitionRouter.put("/:id", competitionController.update);

export {competitionRouter};