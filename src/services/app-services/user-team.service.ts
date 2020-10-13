import { injectable } from "tsyringe";
import {UserTeamSI} from "../../interfaces/app-interfaces/user-team.interface";

import { UserTeamRepo } from "../../models/app-models/user-team.model";
import BaseService from "../base.service";


@injectable()
export class UserTeamService extends BaseService<UserTeamSI>{
    
    constructor(modelI?: UserTeamRepo){
        super(modelI)
    }
}
