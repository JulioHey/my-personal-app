import { injectable } from "tsyringe";
import {TeamDragonSI} from "../../interfaces/game-interfaces/team-dragon.interface";

import {TeamDragonRepo} from "../../models/game-models/team-dragon.model";
import BaseService from "../base.service";


@injectable()
export class TeamDragonService extends BaseService<TeamDragonSI>{
    
    constructor(modelI?: TeamDragonRepo){
        super(modelI)
    }
}

