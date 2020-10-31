import { Router } from "express";
import { container } from "tsyringe";
import {CoachController} from "../../controllers/game-controllers/coach.controller";


const coachUserRouter = Router();
const coachAdminRouter = Router();
const coachController = container.resolve(CoachController);

coachUserRouter.get("/", coachController.get);
coachUserRouter.get("/:id", coachController.getById);
coachAdminRouter.post("/", coachController.post);
coachAdminRouter.delete("/:id", coachController.remove);
coachAdminRouter.put("/:id", coachController.update);

export {coachUserRouter, coachAdminRouter};