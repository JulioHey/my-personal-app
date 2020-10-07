import { Router, Request, Response } from "express";
import TeamController from "./controllers/team.controller";
import RoundController from "./controllers/round.controller";
import {container} from "tsyringe";

const teamController = container.resolve(TeamController);
const roundController = container.resolve(RoundController);

const appRouter = Router();

appRouter.post("/teams", (request: Request, response: Response) => {
    return teamController.post(request, response)
});

appRouter.post("/rounds", (request: Request, response: Response) => {
    return roundController.post(request, response)
});
export default appRouter;
