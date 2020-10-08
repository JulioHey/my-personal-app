import { injectable } from "tsyringe";
import PlayerSI from "../../interfaces/game-interfaces/player.interface";

import { PlayerRepo } from "../../models/game-models/player.model";
import BaseService from "../base.service";


@injectable()
export default class PlayerService extends BaseService<PlayerSI>{
    
    constructor(modelI?: PlayerRepo){
        super(modelI)
    }
}

