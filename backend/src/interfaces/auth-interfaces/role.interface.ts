import { ModelI } from "../model.interface";


export interface RoleI {
    roleId: number | string
    roleName: string
    roleDescription: string
}

export interface RoleSI extends ModelI{}