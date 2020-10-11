import { injectable } from "tsyringe";
import {PermissionSI} from "../../interfaces/auth-interfaces/permission.interface";

import { PermissionRepo } from "../../models/auth-models/permission.model";
import BaseService from "../base.service";


@injectable()
export class PermissionService extends BaseService<PermissionSI>{
    
    constructor(modelI?: PermissionRepo){
        super(modelI)
    }
}
