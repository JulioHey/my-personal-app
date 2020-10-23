import { container, injectable } from "tsyringe";
import { DeepPartial } from "typeorm";
import {UserEscalationSI} from "../../interfaces/app-interfaces/user-escalation.interface";

import { UserEscalationRepo } from "../../models/app-models/user-escalation.model";
import BaseService from "../base.service";
import { CoachMatchService } from "../game-services/coach-match.service";
import { PlayerMatchService } from "../game-services/player-match.service";
import { TeamMatchService } from "../game-services/team-match.service";
import { UserTeamService } from "./user-team.service";


@injectable()
export class UserEscalationService extends BaseService<UserEscalationSI>{

    private PlayerMatchService;
    private TeamMatchService;
    private CoachMatchService;
    private UserTeamService;
    constructor(modelI?: UserEscalationRepo){
        super(modelI);
        this.UserTeamService = container.resolve(UserTeamService);
        this.CoachMatchService = container.resolve(CoachMatchService);
        this.TeamMatchService = container.resolve(TeamMatchService);
        this.PlayerMatchService = container.resolve(PlayerMatchService);
    }

    post = async (data: UserEscalationSI) => {
        const checkedData = await this.checkConstrains(data);

        const {error} = checkedData;

        if(error) {
            return {Error: "You are violating some constrains of this schema, check the data again"}
        }

        const resource = await this.model.repo.create(data);
        await this.model.repo.save(resource);
        return resource
    }

    calculateUserPontuation = async(data) => {
        const {
            userId,
            roundId,
            coach_id,
            toplaner,
            jungler,
            midlaner,
            adcarry,
            support,
            firstBan,
            secondBan,
            thirdBan
        } = data;

        const playerPontuaions =await this.calculatePlayersPontuation(roundId, userId, [jungler, midlaner, adcarry, toplaner, support]);
        const bansPontuaions =await this.calculateChampionsPontuation(roundId, [firstBan, secondBan, thirdBan]);
        const coachPontuation =await this.getCoachPontuation(roundId, coach_id);

        return playerPontuaions + bansPontuaions + coachPontuation;
    }

    calculatePlayersPontuation = async (roundId, userId, playersIds: number[]) => {
        let sum = 0;
        let deltaPatrymony = 0;

        await Promise.all(playersIds.map(async (playerId) => {
            const playerMatch = await this.PlayerMatchService.get({roundId, playerId: playerId});

            if (playerMatch[0]) {
                sum += playerMatch[0].playerPoints;
                deltaPatrymony += await this.PlayerMatchService.calculateDeltaPatrymony(String(playerId) , playerMatch[0].playerValue);
            };

        }));

        await this.UserTeamService.calcNewPatrymony(userId,  deltaPatrymony)

        return sum;
    }

    calculateChampionsPontuation = async (roundId, championsIds: number[]) => {
        let sum = 0;

        await Promise.all(
            championsIds.map(async championdId => {
                const numberOfBans = await this.TeamMatchService.countBans(roundId, championdId);

                sum += numberOfBans;
            })
        )

        return sum;

    }

    getCoachPontuation = async (roundId: number, coachId: number) => {
        const coachMatch = await this.CoachMatchService.get({roundId, coachId});

        if (coachMatch[0]) {
            return coachMatch[0].coachPontuation;
        }
        return 0;
    }

    checkConstrains = async (data: DeepPartial<any>) => {
        const {
            toplaner,
            jungler,
            midlaner,
            adcarry,
            support,
            firstBan,
            secondBan,
            thirdBan
        } = data;

        if ( new Set([firstBan, secondBan, thirdBan]).size !== [firstBan, secondBan, thirdBan].length) {
            return {error: "Error"}
        }

        if ( new Set([toplaner, jungler, midlaner, adcarry, support]).size !== [toplaner, jungler, midlaner, adcarry, support].length) {
            return {error: "Error"}
        }

        return data;
    }

    update = async(entityId: string, data: DeepPartial<any>) => {
        await this.checkConstrains(data);

        const userPontuation = await this.calculateUserPontuation(data);

        data.userPontuation = userPontuation;

        const updatedEntity = await this.model.repo.update(entityId, data);
        
        return updatedEntity;
    };
}
