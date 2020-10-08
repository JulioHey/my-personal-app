import { Router } from "express";
import { container } from "tsyringe";
import TeamController from "../../controllers/game-controllers/team.controller";


const userRouter = Router();
const teamController = container.resolve(TeamController);

userRouter.get("/", teamController.get);
userRouter.get("/:id", teamController.getById);
userRouter.post("/", teamController.post);
userRouter.delete("/:id", teamController.remove);

export default userRouter;