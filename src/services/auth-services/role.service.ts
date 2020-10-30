import { injectable } from "tsyringe";
import {RoleSI} from "../../interfaces/auth-interfaces/role.interface";

import { RoleRepo } from "../../models/auth-models/role.model";
import BaseService from "../base.service";


@injectable()
export class RoleService extends BaseService<RoleSI>{
    
    constructor(modelI?: RoleRepo){
        super(modelI)
    }

}
