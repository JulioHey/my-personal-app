import { injectable } from "tsyringe";

import {CoachMatchSI} from "../../interfaces/game-interfaces/coach-match.interface";
import {CoachMatchRepo} from "../../models/game-models/coach-match.model";
import BaseService from "../base.service";


@injectable()
export class CoachMatchService extends BaseService<CoachMatchSI>{
    
    constructor(modelI?: CoachMatchRepo){
        super(modelI)
    }
}
