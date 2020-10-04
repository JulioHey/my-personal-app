import express from 'express';

import {teamController} from '../controllers/team.controller';

const adminRoutes = express.Router();

adminRoutes.post("/", (request: Request, response: Response) => {
        return teamController.addTeam(request, response);
});

export {adminRoutes};
