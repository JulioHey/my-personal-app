import { injectable } from "tsyringe";
import {PlayerMatchSI} from "../../interfaces/game-interfaces/player-match.interface";

import { PlayerMatchRepo } from "../../models/game-models/player-match.model";
import BaseService from "../base.service";


@injectable()
export class PlayerMatchService extends BaseService<PlayerMatchSI>{
    
    constructor(modelI?: PlayerMatchRepo){
        super(modelI)
    }
}

