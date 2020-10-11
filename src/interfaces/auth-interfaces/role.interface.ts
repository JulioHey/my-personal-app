import { ModelI } from "../model.interface";


export interface RoleI {
    roleId: string
    roleName: string
    roleDescription: string
}

export interface RoleSI extends ModelI{}