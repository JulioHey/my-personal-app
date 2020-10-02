import express from 'express';

import TeamController from '../controllers/team.controller';

const adminRoutes = express.Router();

const newTeamController = new TeamController();
