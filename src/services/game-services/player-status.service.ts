import { container, injectable } from "tsyringe";
import { DeepPartial } from "typeorm";
import {PlayerStatusI, PlayerStatusSI} from "../../interfaces/game-interfaces/player-status.interface";

import { PlayerStatusRepo } from "../../models/game-models/player-status.model";
import BaseService from "../base.service";
import { PlayerMatchService } from "./player-match.service";


@injectable()
export class PlayerStatusService extends BaseService<PlayerStatusSI>{
    
    private PlayerMatchService;
    constructor(modelI?: PlayerStatusRepo){
        super(modelI)
        this.PlayerMatchService = container.resolve(PlayerMatchService)
    }

    calculateNewPontuation = async (data: DeepPartial<PlayerStatusI>) => {
        const { playerAssists, playerDeaths, playerKills, playerGold, playerMinions, playerVision, playerMatchId } = data;

        const playerPoints = playerAssists - playerDeaths + playerKills + playerGold + playerMinions + playerVision;

        const resource = await this.PlayerMatchService.update(playerMatchId, {playerPoints});

        return data;
    }

    checkConstrains = async (data: DeepPartial<PlayerStatusI>) => {

        const resource = await this.calculateNewPontuation(data);
        
        return resource;
    }
}

