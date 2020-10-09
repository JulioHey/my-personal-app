import { injectable } from "tsyringe";
import {TeamMatchSI} from "../../interfaces/game-interfaces/team-match.interface";

import { TeamMatchRepo } from "../../models/game-models/team-match.model";
import BaseService from "../base.service";


@injectable()
export class TeamMatchService extends BaseService<TeamMatchSI>{
    
    constructor(modelI?: TeamMatchRepo){
        super(modelI)
    }
}

