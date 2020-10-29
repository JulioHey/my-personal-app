import { ModelI } from "../model.interface";


export interface PermissionI {
    permissionId: string | number
    permissionName: string
    permissionDescription: string
}

export interface PermissionSI extends ModelI{}