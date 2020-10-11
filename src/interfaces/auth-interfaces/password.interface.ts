import { ModelI } from "../model.interface";


export interface PasswordI {
    userId: string
    password: string
}

export interface PasswordSI extends PasswordI, ModelI{}
