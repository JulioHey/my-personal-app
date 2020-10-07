import { Router, Request, Response } from "express";
import TeamController from "./controllers/team.controller";
import {container} from "tsyringe";
import { TeamRepo } from "./models/team.model";

const teamController = container.resolve(TeamController);

const appRouter = Router();

appRouter.post("/teams", (request: Request, response: Response) => {
    return teamController.post(request, response)
});
export default appRouter;
