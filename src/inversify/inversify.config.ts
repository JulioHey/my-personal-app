import {
 Container
} from "inversify";
import { teamTypes } from './types';
import { ITeamController, ITeamRepo } from './interfaces';
import { TeamController } from '../controllers/team.controller';
import { TeamRepo } from '../database/repositories/team.repo';

const teamContainer = new Container();
teamContainer.bind<ITeamController>(teamTypes.ITeamController).to(TeamController);
teamContainer.bind<ITeamRepo>(teamTypes.ITeamRepo).to(TeamRepo);

export {teamContainer};