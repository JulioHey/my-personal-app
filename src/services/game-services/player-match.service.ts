import { container, injectable } from "tsyringe";
import { DeepPartial } from "typeorm";
import {PlayerMatchI, PlayerMatchSI} from "../../interfaces/game-interfaces/player-match.interface";

import { PlayerMatchRepo } from "../../models/game-models/player-match.model";
import BaseService from "../base.service";
import { PlayerService } from "./player.service";


@injectable()
export class PlayerMatchService extends BaseService<PlayerMatchSI>{
    
    private PlayerService;
    constructor(modelI?: PlayerMatchRepo){
        super(modelI)
        this.PlayerService = container.resolve(PlayerService);
    }


    update = async(entityId: string, data: DeepPartial<any>) => {
        const {playerValue} = await this.updatePlayerValue({playerMatchId: entityId, playerPoints: data.playerPoints});

        if (playerValue) {
            data.playerValue = playerValue;
        }

        const updatedEntity = await this.model.repo.update(entityId, data);

        return updatedEntity;
    };

    updatePlayerValue = async (data: DeepPartial<any>): Promise<{playerValue: number} | null> => {
        const {playerMatchId, playerPoints} = data;

        if(playerMatchId && playerPoints) {
            const {playerId} = await this.model.repo.findOne(playerMatchId);

            const {playerValue} = await this.PlayerService.model.repo.findOne(playerId);
    
            const newPlayerValue = (playerValue +  playerPoints)/ 2;
    
            return {playerValue: newPlayerValue};
        }
        return;
    }

    updatePlayersValue = async (roundNumber: number) => {
        const players = await this.PlayerService.get();

        await Promise.all(players.map(async (player) => {
            const playerMatches = await this.get({playerId: player.playerId});

            await this.PlayerService.update(player.playerId, {playerValue: playerMatches[(playerMatches.length -1)].playerValue})
        }));
    }

    checkConstrains = async (data: DeepPartial<PlayerMatchI>): Promise<any> => {
        const {playerId, matchId, championId} =  data;

        const existPlayerMatch = await this.get({playerId, matchId});
        const existChampionMatch = await this.get({championId, matchId});

        if (existPlayerMatch[0] || existChampionMatch[0]) {
            return {error: "Constrains exists"};
        }

        return data;
    }
}

