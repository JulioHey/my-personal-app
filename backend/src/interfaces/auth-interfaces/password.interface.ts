import { ModelI } from "../model.interface";


export interface PasswordI {
    userId: number | string
    password: string
}

export interface PasswordSI extends PasswordI, ModelI{}
