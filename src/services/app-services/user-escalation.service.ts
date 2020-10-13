import { injectable } from "tsyringe";
import {UserEscalationSI} from "../../interfaces/app-interfaces/user-escalation.interface";

import { UserEscalationRepo } from "../../models/app-models/user-escalation.model";
import BaseService from "../base.service";


@injectable()
export class UserEscalationService extends BaseService<UserEscalationSI>{
    
    constructor(modelI?: UserEscalationRepo){
        super(modelI)
    }
}
