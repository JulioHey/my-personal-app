import { injectable } from "tsyringe";
import {UserSI} from "../../interfaces/auth-interfaces/user.interface";

import { UserRepo } from "../../models/auth-models/user.model";
import BaseService from "../base.service";


@injectable()
export class UserService extends BaseService<UserSI>{
    
    constructor(modelI?: UserRepo){
        super(modelI)
    }

}
