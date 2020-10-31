import { ModelI } from "../model.interface";


export interface PermissionRoleI {
    permissionRoleId: string | number
    permissionId: string | number
    roleId: string | number
}

export interface PermissionRoleSi extends PermissionRoleI, ModelI{}
