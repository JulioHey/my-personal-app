import { ModelI } from "../model.interface";


export interface UserI {
    userName: string
    userId: string
    userEmail: string
}

export interface UserSI extends UserI, ModelI{
}