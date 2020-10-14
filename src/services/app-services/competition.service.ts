import { injectable } from "tsyringe";
import {CompetitionSI} from "../../interfaces/app-interfaces/competition.interface";

import { CompetitionRepo } from "../../models/app-models/competition.model";
import BaseService from "../base.service";


@injectable()
export class CompetitionService extends BaseService<CompetitionSI>{
    
    constructor(modelI?: CompetitionRepo){
        super(modelI)
    }
}
