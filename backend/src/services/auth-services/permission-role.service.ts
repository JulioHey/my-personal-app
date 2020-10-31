import { container, injectable } from "tsyringe";
import { PermissionRoleSi } from "../../interfaces/auth-interfaces/permission-role.interfacet";
import { PermissionRoleRepo } from "../../models/auth-models/permission-role.model";
import BaseService from "../base.service";


@injectable()
export class PermissionRoleService extends BaseService<PermissionRoleSi>{
    
    constructor(modelI?: PermissionRoleRepo){
        super(modelI)
    }

}
