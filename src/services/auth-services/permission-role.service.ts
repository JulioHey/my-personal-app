import { autoInjectable, container, injectable } from "tsyringe";
import { RoleSI } from "../../interfaces/auth-interfaces/role.interface";
import { RoleRepo } from "../../models/auth-models/role.model";
import BaseService from "../base.service";
import { PermissionService } from "./permission.service";
import { RoleService } from "./role.service";


@injectable()
export class PermissionRoleService extends BaseService<RoleSI>{
    
    private role;
    private permission;
    constructor(modelI?: RoleRepo){
        super(modelI)
        this.role = container.resolve(RoleService)
        this.permission = container.resolve(PermissionService)
    }

    create = async (data) => {

        const { roleName, roleDescription, permissions } = data;

        const existRole = await this.role.get({roleName: roleName});

        if (existRole[0]) {
            return ({
                Error: "Roll already exists"
            })
        };

        const existPermissions = await this.permission.model.repo.findByIds(permissions);

        // if (!existPermissions[0] && permissions[0]) {
        //     return {Error: "should pass a valid permission or none"}
        // }

        const role = this.role.post({
            roleName,
            roleDescription,
            permission: existPermissions
        });

        return role;

    }

    
}
