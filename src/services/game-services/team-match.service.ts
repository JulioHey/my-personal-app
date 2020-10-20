import { injectable } from "tsyringe";
import { DeepPartial } from "typeorm";
import {TeamMatchI, TeamMatchSI} from "../../interfaces/game-interfaces/team-match.interface";

import { TeamMatchModel, TeamMatchRepo } from "../../models/game-models/team-match.model";
import BaseService from "../base.service";


@injectable()
export class TeamMatchService extends BaseService<TeamMatchSI>{
    
    constructor(modelI?: TeamMatchRepo){
        super(modelI)
    }

    checkConstrains = async(data: DeepPartial<TeamMatchI>) => {
        const { matchId, firstBan, secondBan, thirdBan, teamId } = data;

        if ( new Set([firstBan, secondBan, thirdBan]).size !== [firstBan, secondBan, thirdBan].length) {
            return {error: "Error"};
        }

        const existChampion = await this.model.repo.find({where:[
            {matchId, teamId},
            {matchId, firstBan: firstBan},
            {matchId, firstBan: secondBan},
            {matchId, firstBan: thirdBan},
            {matchId, secondBan: firstBan},
            {matchId, secondBan: secondBan},
            {matchId, secondBan: thirdBan},
            {matchId, thirdBan: firstBan},
            {matchId, thirdBan: secondBan},
            {matchId, thirdBan: thirdBan},
        ]});

        if (existChampion[0]) {
            return {error: "Error"};
        }

        return data;
    }

    countBans = async(roundId: number, championId: number) => {
        const numberOfBans = await this.model.repo.count({
            where: [
                {roundId, firstBan: championId},
                {roundId, secondBan: championId},
                {roundId, thirdBan: championId},
            ],
        });
        console.log(numberOfBans)

        return numberOfBans;
    }
}

