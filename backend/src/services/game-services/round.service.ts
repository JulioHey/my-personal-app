import { container, injectable } from "tsyringe";
import { DeepPartial } from "typeorm";
import { MatchI } from "../../interfaces/game-interfaces/match.interface";

import {RoundSI} from "../../interfaces/game-interfaces/round.interface";
import {RoundRepo} from "../../models/game-models/round.model";
import BaseService from "../base.service";
import { CoachMatchService } from "./coach-match.service";
import { MatchService } from "./match.service";
import { PlayerMatchService } from "./player-match.service";


@injectable()
export class RoundService extends BaseService<RoundSI>{

    private MatchService;
    private PlayerMatchService;
    private CoachMatchService;
    
    constructor(modelI?: RoundRepo){
        super(modelI)
        this.MatchService = container.resolve(MatchService);
        this.PlayerMatchService = container.resolve(PlayerMatchService);
        this.CoachMatchService = container.resolve(CoachMatchService);
    }

    
    create = async (data: {roundNumber: number, roundDate: string ,matches: DeepPartial<MatchI>[]}) => {
        try {
            const {roundNumber, roundDate, matches} = data;


            const resource = await this.model.repo.create({roundNumber, roundDate});
            await this.model.repo.save(resource);

            let newMatches;
            if (matches) {
                newMatches = await Promise.all(
                    matches.map(async (match, index) =>{
                    const newMatch = await this.MatchService.post({
                        blueSideTeam: match.blueSideTeam,
                        redSideTeam: match.redSideTeam,
                        roundId: resource.roundId,
                        matchPosition: (index + 1)
                    });
    
    
                    return newMatch;
                }));
    
            }
            
            await this.PlayerMatchService.updatePlayersValue();
            await this.CoachMatchService.updateCoachsValue();
            
            return {resource, newMatches}
        } catch(err) {
            return {Error: "Something went wrong"}
        }
    }
}
