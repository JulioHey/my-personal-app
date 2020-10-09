import { injectable } from "tsyringe";
import {MatchSI} from "../../interfaces/game-interfaces/match.interface";

import { MatchRepo } from "../../models/game-models/match.model";
import BaseService from "../base.service";


@injectable()
export class MatchService extends BaseService<MatchSI>{
    
    constructor(modelI?: MatchRepo){
        super(modelI)
    }
}

