import { injectable } from "tsyringe";
import {PasswordSI} from "../../interfaces/auth-interfaces/password.interface";

import { PasswordRepo } from "../../models/auth-models/password.model";
import BaseService from "../base.service";


@injectable()
export class PasswordService extends BaseService<PasswordSI>{
    
    constructor(modelI?: PasswordRepo){
        super(modelI)
    }
}
