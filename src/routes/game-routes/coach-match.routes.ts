import { Router } from "express";
import { container } from "tsyringe";
import {CoachMatchController} from "../../controllers/game-controllers/coach-match.controller";


const coachMatchUserRouter = Router();
const coachMatchAdminRouter = Router();
const coachMatchController = container.resolve(CoachMatchController);

coachMatchUserRouter.get("/", coachMatchController.get);
coachMatchUserRouter.get("/:id", coachMatchController.getById);
coachMatchAdminRouter.post("/", coachMatchController.post);
coachMatchAdminRouter.delete("/:id", coachMatchController.remove);
coachMatchAdminRouter.put("/:id", coachMatchController.update);

export {coachMatchUserRouter, coachMatchAdminRouter};