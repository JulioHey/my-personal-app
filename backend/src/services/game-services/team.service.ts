import { injectable } from "tsyringe";

import {TeamSI} from "../../interfaces/game-interfaces/team.interface";
import {TeamRepo} from "../../models/game-models/team.model";
import BaseService from "../base.service";


@injectable()
export class TeamService extends BaseService<TeamSI>{
    
    constructor(modelI?: TeamRepo){
        super(modelI)
    }
}
