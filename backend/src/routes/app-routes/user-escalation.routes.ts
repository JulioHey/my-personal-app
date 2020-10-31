import { Router } from "express";
import { container } from "tsyringe";
import {UserEscalationController} from "../../controllers/app-controllers/user-escalation.controller";


const userEscalationRouter = Router();
const userEscalationController = container.resolve(UserEscalationController);

userEscalationRouter.get("/", userEscalationController.get);
userEscalationRouter.get("/:id", userEscalationController.getById);
userEscalationRouter.post("/", userEscalationController.post);
userEscalationRouter.delete("/:id", userEscalationController.remove);
userEscalationRouter.put("/:id", userEscalationController.update);

export {userEscalationRouter};