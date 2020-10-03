import express from 'express';

import {teamController} from '../controllers/team.controller';

const adminRoutes = express.Router();

adminRoutes.post("/teams", teamController.handleAddTeam);

export default adminRoutes;