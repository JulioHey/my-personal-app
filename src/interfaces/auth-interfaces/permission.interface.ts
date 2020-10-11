import { ModelI } from "../model.interface";


export interface PermissionI {
    permissionId: string
    permissionName: string
    permissionDescription: string
}

export interface PermissionSI extends ModelI{}