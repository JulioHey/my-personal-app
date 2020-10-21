import { container, injectable } from "tsyringe";
import { DeepPartial } from "typeorm";
import { PlayerMatchSI } from "../../interfaces/game-interfaces/player-match.interface";
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

        const playerPoints = Number(playerAssists) - Number(playerDeaths) + Number(playerKills) + Number(playerGold) + Number(playerMinions) + Number(playerVision);
        console.log(playerPoints);
        console.log(playerMatchId) 

        await this.PlayerMatchService.update(playerMatchId, {playerPoints});
    }

    update = async(entityId: string, data: DeepPartial<any>) => {
        await this.calculateNewPontuation(data);
        
        const updatedEntity = await this.model.repo.update(entityId, data);
        
        return updatedEntity;
    };
}

