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
        const updatedEntity = await this.model.repo.update(entityId, data);

        const playerMatch = await this.model.repo.findOne(data);

        console.log(playerMatch.playerId);

        return updatedEntity;
    };

    updatePlayersValue = async () => {
        const players = await this.PlayerService.get();

        console.log(players)

        await Promise.all(players.map(async (player) => {
            const playerMatches = await this.get({playerId: player.playerId});

            let sum = 0;
            // playerMatches.forEach(playerMatch => {
            //     sum += playerMatch.playerPoints;
            // })

            console.log(playerMatches)
    

            for (var i = 0; i < playerMatches.length; i++) {
                sum += playerMatches[i].playerPoints
            }

            const playerValue = sum/playerMatches.length;

            console.log(playerValue)

            await this.PlayerService.update(player.playerId, {playerValue})
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

