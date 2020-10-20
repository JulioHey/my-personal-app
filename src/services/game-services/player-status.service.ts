import { injectable } from "tsyringe";
import {PlayerStatusI, PlayerStatusSI} from "../../interfaces/game-interfaces/player-status.interface";

import { PlayerStatusRepo } from "../../models/game-models/player-status.model";
import BaseService from "../base.service";


@injectable()
export class PlayerStatusService extends BaseService<PlayerStatusSI>{
    
    constructor(modelI?: PlayerStatusRepo){
        super(modelI)
    }
}

