import { injectable } from "tsyringe";
import {MatchI, MatchSI} from "../../interfaces/game-interfaces/match.interface";

import { MatchRepo } from "../../models/game-models/match.model";
import BaseService from "../base.service";


@injectable()
export class MatchService extends BaseService<MatchSI>{
    
    constructor(modelI?: MatchRepo){
        super(modelI)
    }

    checkConstrains = async (data: any) => {
        const { matchPosition, roundId } = data;

        const existTeam = await this.get({matchPosition, roundId});

        if (existTeam[0]) {
            return {error: "Constrains exists"}
        }

        return data
    }
}

