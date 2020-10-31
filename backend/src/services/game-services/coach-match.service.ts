import { container, injectable } from "tsyringe";

import {CoachMatchI, CoachMatchSI} from "../../interfaces/game-interfaces/coach-match.interface";
import {CoachMatchRepo} from "../../models/game-models/coach-match.model";
import BaseService from "../base.service";
import { CoachService } from "./coach.service";


@injectable()
export class CoachMatchService extends BaseService<CoachMatchSI>{
    
    private CoachService;
    constructor(modelI?: CoachMatchRepo){
        super(modelI);
        this.CoachService = container.resolve(CoachService);
    }

    updateCoachsValue = async() => {
        const coachs = await this.CoachService.get();

        await Promise.all(coachs.map(async(coach) => {
            const coachMatches = await this.get({coachId: coach.coachId});
            if(coachMatches[0]) {
                await this.CoachService.update(coach.coachId, {coachValue: coachMatches[(coachMatches.length -1)].coachValue})
            }
        })
        );
    }
}
