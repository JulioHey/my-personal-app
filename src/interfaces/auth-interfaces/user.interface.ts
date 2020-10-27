import { ModelI } from "../model.interface";


export interface UserI {
    userName: string
    userId: number | string
    userEmail: string
}

export interface UserSI extends UserI, ModelI{
}