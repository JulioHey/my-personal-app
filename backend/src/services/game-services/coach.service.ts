import { injectable } from "tsyringe";

import {CoachSI} from "../../interfaces/game-interfaces/coach.interface";
import {CoachRepo} from "../../models/game-models/coach.model";
import BaseService from "../base.service";


@injectable()
export class CoachService extends BaseService<CoachSI>{
    
    constructor(modelI?: CoachRepo){
        super(modelI)
    }
}
