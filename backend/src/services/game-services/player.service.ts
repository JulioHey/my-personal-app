import { container, injectable } from "tsyringe";
import { DeepPartial } from "typeorm";
import {PlayerSI} from "../../interfaces/game-interfaces/player.interface";

import { PlayerRepo } from "../../models/game-models/player.model";
import BaseService from "../base.service";
import { PlayerMatchService } from "./player-match.service";


@injectable()
export class PlayerService extends BaseService<PlayerSI>{
    
    constructor(modelI?: PlayerRepo){
        super(modelI);
    }
}

