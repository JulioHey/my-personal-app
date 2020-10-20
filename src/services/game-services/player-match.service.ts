import { injectable } from "tsyringe";
import { DeepPartial } from "typeorm";
import {PlayerMatchI, PlayerMatchSI} from "../../interfaces/game-interfaces/player-match.interface";

import { PlayerMatchRepo } from "../../models/game-models/player-match.model";
import BaseService from "../base.service";


@injectable()
export class PlayerMatchService extends BaseService<PlayerMatchSI>{
    
    constructor(modelI?: PlayerMatchRepo){
        super(modelI)
    }

    checkConstrains = async (data: DeepPartial<PlayerMatchI>) => {
        const {playerId, matchId, championId} =  data;

        const existPlayerMatch = await this.get({playerId, matchId});
        const existChampionMatch = await this.get({championId, matchId});

        if (existPlayerMatch[0] || existChampionMatch[0]) {
            return {error: "Constrains exists"};
        }

        return data;
    }
}

