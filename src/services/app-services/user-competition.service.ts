import { injectable } from "tsyringe";
import {UserCompetitionSI} from "../../interfaces/app-interfaces/user-competition.interface";

import { UserCompetitionRepo } from "../../models/app-models/user-competition.model";
import BaseService from "../base.service";


@injectable()
export class UserCompetitionService extends BaseService<UserCompetitionSI>{
    
    constructor(modelI?: UserCompetitionRepo){
        super(modelI)
    }
}
