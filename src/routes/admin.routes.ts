import express from 'express';

import {
    TeamController
} from '../controllers/team.controller';
import TypeOrmTeamRepo from '../database/repositories/team.repo';

const teamController = new TeamController();

const adminRoutes = express.Router();

adminRoutes.post("/", teamController.addTeam);

export {adminRoutes};