import {
    Router,
    Request,
    Response
} from 'express';

import {
    TeamController
} from '../controllers/team.controller';

const teamController = new TeamController();

const adminRoutes = Router();

adminRoutes.post("/", (request: Request, response: Response) => {
        return teamController.addTeam(request, response);
    });

export {adminRoutes};